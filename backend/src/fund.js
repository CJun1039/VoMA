let db;

const initialize = (database) => {
    db = database;
};

const get_name = (req, res) => {
    const { id } = req.params;

    const query = `SELECT fundName FROM fund WHERE fundId = ?`;

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching fund name:', err.stack);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length === 0) {
            return res.status(404).send('Fund not found');
        }

        res.json({ fundName: results[0].fundName });
    });
}

const list = function(req, res) {
    db.query('SELECT * FROM fund', (err, results) => {
        if (err) {
            console.error('Error fetching instruments:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

const get_one_instrument_pos = function(req, res) {
    const { id, instrument_id } = req.params;

    db.query('SELECT * FROM positions WHERE fundId = ? AND instrumentId = ?', [id, instrument_id], (err, results) => {
        if (err) {
            console.error('Error fetching investment positions of fund:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

const get_all_instrument_pos = function(req, res) {
    const { id } = req.params;

    const query = `
        SELECT i.instrumentName, p.quantity, p.marketValue, p.realisedProfitLoss
        FROM positions p
        INNER JOIN instrument i ON p.instrumentId = i.instrumentId
        INNER JOIN (
            SELECT instrumentId, MAX(reportedDate) as latestDate
            FROM positions
            WHERE fundId = ?
            GROUP BY instrumentId
        ) as latestPosition
        ON p.instrumentId = latestPosition.instrumentId AND p.reportedDate = latestPosition.latestDate
        WHERE p.fundId = ?
    `;

    db.query(query, [id, id], (err, results) => {
        if (err) {
            console.error('Error fetching latest positions:', err.stack);
            return res.status(500).send('Internal Server Error');
        }

        // Calculate the price for each result
        results.forEach(row => {
            row.price = (row.marketValue / row.quantity).toFixed(2);
        });

        res.json(results);
    });
}

const get_total_market_value = function(req, res) {
    const { id } = req.params;
    
    const query = `
        SELECT reportedDate as latestDate, SUM(marketValue) as totalMarketValue 
        FROM positions 
        WHERE fundId = ? 
        AND reportedDate = (
            SELECT MAX(reportedDate) 
            FROM positions 
            WHERE fundId = ?
        ) 
        GROUP BY reportedDate
    `;

    db.query(query, [id, id], (err, results) => {
        if (err) {
            console.error('Error fetching latest market value:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results[0] || {});
    });
}

const get_total_pnl = function(req, res) {
    const { id } = req.params;
    
    const query = `
        SELECT reportedDate as latestDate, SUM(realisedProfitLoss) as totalPNL 
        FROM positions 
        WHERE fundId = ? 
        AND reportedDate = (
            SELECT MAX(reportedDate) 
            FROM positions 
            WHERE fundId = ?
        ) 
        GROUP BY reportedDate
    `;

    db.query(query, [id, id], (err, results) => {
        if (err) {
            console.error('Error fetching latest PNL:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results[0] || {});
    });
}

export { initialize, 
    get_one_instrument_pos, 
    get_all_instrument_pos, 
    get_total_market_value, 
    get_total_pnl, 
    get_name,
    list }