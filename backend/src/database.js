import dotenv from 'dotenv';
import mysql from 'mysql';
import { initialize as instrumentInit } from './instrument.js';
import { initialize as fundInit } from './fund.js';
import { initialize as instrument_analInit } from './analysis/instrument.js';
import { initialize as fund_analInit } from './analysis/fund.js';

let db;

export const connect = function() {
    dotenv.config();

    const dbConfig = {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME
    };

    db = mysql.createConnection(dbConfig);
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            process.exit(1); // Exit the process with failure code
        } else {
            console.log('Successfully connected to MySQL database');
        }
    });

    instrumentInit(db);
    fundInit(db);
    instrument_analInit(db);
    fund_analInit(db);
}