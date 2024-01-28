// Load given csv files to the postgre database
// DON'T RUN THIS FILE

import dotenv from 'dotenv';
import pkg from 'pg';
import fs from 'fs';
import { parse } from 'csv-parse';
import sqlite3 from 'sqlite3';
import mysql from 'mysql2';

// Load env variables
dotenv.config();

/**
 * Ingestor module.
 */
export default class Populate {

    FUND_DICT = {
        "Applebead": 1,
        "Belaware": 2,
        "Fund Whitestone": 3,
        "Leeder": 4,
        "Magnum": 5,
        "Wallington": 6,
        "Gohen": 7,
        "Catalysm": 8,
        "Trustmind": 9,
        "Virtous": 10
    };

    constructor() {
        this.curDir = process.cwd();
        this.conn = this._connectToPool();
        this.db = this._connectToMasterReferenceDB();
    }

    /**
     * Process a new monthly csv breakdown file. Please put the new file under '/to-process' folder.
     * @constructor
     * @param {string} fileName - Name of the new csv file. 
    */
    async ingestCSV(fileName) {
        this._loadUniqueInstrumentsFromCSV(fileName).then((data) => {
            let equities = new Set();
            let bonds = new Set();
            data.forEach((row) => {
                row[0].forEach((equity) => equities.add(equity));
                row[1].forEach((bond) => bonds.add(bond));
            });
            // console.log(equities.size, bonds.size);
            this._mapInstrumentToMasterReferenceDB(equities, bonds);
            this._mapPositionToDB(fileName);
        })
    }

    async _loadUniqueInstrumentsFromCSV(fileName) {
        return new Promise(resolve => fs.createReadStream(this.curDir + '/to-process/' + fileName)
            .pipe(parse({ delimiter: ',', from_line: 2 }))
            .on('data', (row) => { // row is a list of elems
                row[0] == "Equities" ? equities.add(row[1]) : bonds.add(row[1]);
            })
            .on('error', (err) => console.log(err))
            .on('end', (err) => { resolve([equities, bonds]) }));
    }

    // Connect to database
    _connectToPool() {
        const conn = mysql.createConnection({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBNAME
        });
        return conn;
    }

    _connectToMasterReferenceDB() {
        let db = new sqlite3.Database(this.curDir + '/master-reference.db', (err) => console.log(err));
        return db;
    }


    /* POPULATTE table 'pricing' */
    // Sourced from master reference db i.e. 'market price'
    // Only within the relevant time period 01/2022 - 12/2023
    // Take the last reported day of every month

    // Run ONCE only
    async _pricingIngestAllCSV() {
        let promises = [];

        this.db.serialize(() => {
            this.conn.connect((err) => {
                if (err) throw err;

                // Process equities
                let queryEquity = `SELECT instrumentId, symbol FROM instrument WHERE instrumentType = 'Equity';`;
                this.conn.query(queryEquity, (err, rows) => {
                    if (err) throw err;

                    for (let row of rows) {
                        let monthEndRecords = [];
                        let instrumentId = row.instrumentId;

                        let query = `SELECT * FROM  equity_prices WHERE SYMBOL = '${row.symbol}' AND
                            (DATETIME LIKE '%2022' OR DATETIME LIKE '%2023');
                        `;
                        this.db.all(query, (err, res) => {
                            if (err) throw err;
                            for (let month of [...Array(13).keys()]) {
                                for (let year of [2022, 2023]) {
                                    let candidates = res.filter(x => x.DATETIME.split('/')[0] == month && x.DATETIME.split('/')[2] == year);
                                    candidates.sort();
                                    let record = candidates[candidates.length - 1];
                                    record != undefined ? monthEndRecords.push(record) : null;
                                }
                            }

                            for (let record of monthEndRecords) {
                                const [m, d, y] = record.DATETIME.split('/');

                                let reportedDate = new Date(y, parseInt(m) - 1, d).toISOString().split('T')[0];
                                let insertQuery = `INSERT INTO pricing(instrumentId, unitPrice, reportedDate) 
                                        VALUES(
                                            ${instrumentId},
                                            ${record.PRICE},
                                            '${reportedDate}'
                                        );`;
                                promises.push(new Promise(resolve =>
                                    this.conn.query(insertQuery, (err) => { if (err) throw err; resolve(); })
                                ));
                            }
                        });
                    }
                });

                // Process bonds
                let queryBond = `SELECT instrumentId, isinCode FROM instrument WHERE instrumentType = 'Government Bond';`;
                this.conn.query(queryBond, (err, rows) => {
                    if (err) throw err;

                    for (let row of rows) {
                        let monthEndRecords = [];
                        let instrumentId = row.instrumentId;

                        let query = `SELECT * FROM  bond_prices WHERE ISIN = '${row.isinCode}' AND
                             (DATETIME LIKE '2022%' OR DATETIME LIKE '2023%');
                         `;
                        this.db.all(query, (err, res) => {
                            if (err) throw err;
                            for (let month of [...Array(12).keys()]) {
                                for (let year of [2022, 2023]) {
                                    let candidates = res.filter(x => x.DATETIME.split('-')[1] == month && x.DATETIME.split('-')[0] == year);
                                    candidates.sort();
                                    let record = candidates[candidates.length - 1];
                                    record != undefined ? monthEndRecords.push(record) : null;
                                }
                            }

                            for (let record of monthEndRecords) {
                                let reportedDate = record.DATETIME;
                                let insertQuery = `INSERT INTO pricing(instrumentId, unitPrice, reportedDate) 
                                         VALUES(
                                             ${instrumentId},
                                             ${record.PRICE},
                                             '${reportedDate}'
                                         );`;
                                promises.push(new Promise(resolve =>
                                    this.conn.query(insertQuery, (err) => { if (err) throw err; resolve(); })
                                ));
                            }
                        });
                    }
                });
            })
        });
        return Promise.all(promises);
    }

    /* POPULATE table 'fund' */
    // Sourced from the csv file names

    // Run ONCE only
    async _fundIngestAllCSV() {
        let funds = this.FUND_DICT.keys();
        for (let fund of funds) {
            this.conn.connect((err) => {
                if (err) throw err;
                let query = `INSERT INTO fund(fundName) VALUES('${fund}')`;
                this.conn.query(query, (err, res) => { if (err) throw (err) });
            })
        }
    }

    /* POPULATE table 'positions' */
    // Sourced from the csv files

    // Run ONCE only
    async _positionIngestAllCSV() {
        let dataDir = this.curDir + '/external-funds';

        // Get all csv filenames
        let fileNames = fs.readdirSync(dataDir);
        fileNames = fileNames.filter(x => x.endsWith('.csv'));

        // For each filename, get list of instrument symbols & types
        let promises = [];
        this.conn.connect((err) => {
            if (err) throw err;
            for (let fileName of fileNames) {
                let promise = this._mapPositionToDB(fileName, dataDir);
                promises.push(promise);
            }
        })
        return Promise.all(promises);
    }

    async _mapPositionToDB(fileName, dataDir = (this.curDir + '/to-process')) {
        let fund = fileName.split('.')[0];
        let fundId = this.FUND_DICT[fund];
        let reportedDate = this._getDateFromFileName(fileName);

        return new Promise(resolve => fs.createReadStream(dataDir + '/' + fileName)
            .pipe(parse({ delimiter: ',', from_line: 2 }))
            .on('data', (row) => { // row is a list of elems
                let fk = "";
                if (row[0] == "Equities") {
                    fk = "symbol"
                } else if (row[0] == "Government Bond") {
                    fk = "isinCode"
                } else { return; }
                this.conn.query(`SELECT instrumentId FROM instrument WHERE ${fk} = '${row[1]}'`, (err, res) => {
                    if (err) { console.log("Error at " + row[0]); return; }
                    let instrumentId = res[0].instrumentId;
                    let insertQuery = `INSERT INTO positions(    
                    fundId, 
                    instrumentId,
                    quantity,
                    marketValue,
                    realisedProfitLoss,
                    reportedDate) VALUES(
                        ${fundId},
                        ${instrumentId},
                        ${row[5]},
                        ${row[7]},
                        ${row[6]},
                        '${reportedDate}'
                    )`;
                    this.conn.query(insertQuery, (err, res) => { if (err) throw err; });
                });

            })
            .on('error', (err) => console.log(err))
            .on('end', (err) => { resolve() }));
    }

    _getDateFromFileName(fileName) {
        let date = fileName.split('.')[1].split('.')[0].split(' ')[0];
        if (date.includes('-')) {
            if (parseInt(date.split('-')[0]) < 28) {
                const [m, d, y] = date.split('-');
                return `${y}-${m}-${d}`;
            } else if (parseInt(date.split('-')[0]) < 2000) {
                const [d, m, y] = date.split('-');
                return `${y}-${m}-${d}`;
            } else {
                const [y, m, d] = date.split('-');
                return `${y}-${m}-${d}`;
            }
        } else if (date.includes('_')) {
            if (parseInt(date.split('_')[0]) < 28) {
                const [m, d, y] = date.split('_');
                return `${y}-${m}-${d}`;
            } else if (parseInt(date.split('_')[0]) < 2000) {
                const [d, m, y] = date.split('_');
                return `${y}-${m}-${d}`;
            }
        } else {
            const [y, m, d] = [date.slice(0, 4), date.slice(4, 6), date.slice(6, 8)];
            return `${y}-${m}-${d}`;
        }
    }

    /* POPULATE table 'instrument' */
    // Sourced from funds' positions
    // Referred with master reference db for more details

    // Run ONCE only
    async _instrumentIngestAllCSV() {
        this._loadUniqueInstrumentsFromAllCSV().then((data) => {
            let equities = new Set();
            let bonds = new Set();
            data.forEach((row) => {
                row[0].forEach((equity) => equities.add(equity));
                row[1].forEach((bond) => bonds.add(bond));
            });
            // console.log(equities.size, bonds.size);
            this._mapInstrumentToMasterReferenceDB(equities, bonds);
        });
    }

    async _loadUniqueInstrumentsFromAllCSV() {
        let equities = new Set();
        let bonds = new Set();
        let dataDir = this.curDir + '/external-funds';

        // Get all csv filenames
        let fileNames = fs.readdirSync(dataDir);
        fileNames = fileNames.filter(x => x.endsWith('.csv'));

        // For each filename, get list of instrument symbols & types
        let promises = [];
        for (let fileName of fileNames) {
            let promise = new Promise(resolve => fs.createReadStream(dataDir + '/' + fileName)
                .pipe(parse({ delimiter: ',', from_line: 2 }))
                .on('data', (row) => { // row is a list of elems
                    if (row[0] == "Equities") {
                        equities.add(row[1])
                    } else if (row[0] == "Government Bond") {
                        bonds.add(row[1]);
                    }
                })
                .on('error', (err) => console.log(err))
                .on('end', (err) => { resolve([equities, bonds]) }));
            promises.push(promise);
        }
        return Promise.all(promises);
    };

    // Map with master reference databse to populate the necessary fields for instruments table
    _mapInstrumentToMasterReferenceDB(equities, bonds) {
        this.db.serialize(() => {
            this.conn.connect((err) => {
                if (err) throw err;

                // Process equities
                for (let equity of equities) {
                    let query = `SELECT [SECURITY NAME], SYMBOL, COUNTRY, SECTOR, CURRENCY FROM equity_reference WHERE SYMBOL = '${equity}';`;
                    this.db.each(query, (err, row) => {
                        if (err) return;
                        let name = row['SECURITY NAME'].replace("'", "''");
                        let insertQuery = `INSERT INTO instrument(    
                            instrumentName,
                            instrumentType,
                            currency,
                            symbol,
                            country,
                            sector) VALUES(
                                '${name}',
                                'Equity',
                                '${row.CURRENCY}',
                                '${row.SYMBOL}',
                                '${row.COUNTRY}',
                                '${row.SECTOR}'
                            )`;
                        this.conn.query(insertQuery, (err, res) => { if (err) throw err; });
                    });
                }

                // Process bonds
                for (let bond of bonds) {
                    let query = `SELECT [SECURITY NAME], ISIN, SEDOL, COUNTRY, SECTOR, CURRENCY FROM bond_reference WHERE ISIN = '${bond}';`;
                    this.db.each(query, (err, row) => {
                        if (err) return;
                        let name = row['SECURITY NAME'].replace("'", "''");
                        let insertQuery = `INSERT INTO instrument(    
                            instrumentName,
                            instrumentType,
                            currency,
                            isinCode,
                            sedolCode,
                            country,
                            sector) VALUES(
                                '${name}',
                                'Government Bond',
                                '${row.CURRENCY}',
                                '${row.ISIN}',
                                '${row.SEDOL}',
                                '${row.COUNTRY}',
                                '${row.SECTOR}'
                            )`;
                        this.conn.query(insertQuery, (err, res) => { if (err) throw err; })
                    });
                }
            });
        })

    }
}

