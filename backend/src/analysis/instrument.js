let db;

const initialize = (database) => {
    db = database;
};

const list_monthly_market_value = function(req, res) {
    const { id } = req.params;

    const query = `
        SELECT 
            reportedDate,
            SUM(marketValue) as totalMarketValue
        FROM positions
        WHERE instrumentId = ?
        GROUP BY reportedDate
        ORDER BY reportedDate
    `;

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching monthly market value list for the instrument:', err.stack);
            return res.status(500).send('Internal Server Error');
        }

        res.json(results);
    });
}

const list_monthly_pnl = function(req, res) {
    const { id } = req.params;

    const query = `
        SELECT 
            reportedDate,
            SUM(realisedProfitLoss) as totalPNL
        FROM positions
        WHERE instrumentId = ?
        GROUP BY reportedDate
        ORDER BY reportedDate
    `;

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching monthly PnL list for the instrument:', err.stack);
            return res.status(500).send('Internal Server Error');
        }

        res.json(results);
    });
}

const list_monthly_pnl_range = function(req, res) {
    const instrumentId = req.params.id;
    const startDate = req.params['start-date'];
    const endDate = req.params['end-date'];

    // Make sure that the dates are in valid format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
        return res.status(400).send('Invalid date format. Expected yyyy-mm-dd.');
    }

    // SQL query to get the aggregated PNL for each date for a specified instrument and within the given date range
    const query = `
        SELECT
            SUM(p.realisedProfitLoss) as pnl,
            p.reportedDate as date
        FROM positions p
        WHERE p.instrumentId = ?
        AND p.reportedDate BETWEEN ? AND ?
        GROUP BY p.reportedDate
        ORDER BY p.reportedDate ASC
    `;

    // Execute the query
    db.query(query, [instrumentId, startDate, endDate], (err, results) => {
        if (err) {
            console.error('Error fetching monthly PNL list:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

const get_twelve_month_returns = function(req, res) {
    const instrumentId = req.params.id;

    // First query: Get the total PNL from Sep 1, 2022 to Aug 31, 2023
    db.query(
        'SELECT SUM(realisedProfitLoss) as sumPNL FROM positions WHERE instrumentId = ? AND reportedDate BETWEEN ? AND ?', 
        [instrumentId, '2022-09-01', '2023-08-31'], 
        (err, sumPNLResults) => {
            if (err) {
                console.error('Error fetching sumPNL:', err.stack);
                return res.status(500).send('Internal Server Error');
            }

            const pnlValue = sumPNLResults[0].sumPNL;

            // Second query: Get the market value of the instrument on Aug 31, 2022
            db.query(
                'SELECT marketValue FROM positions WHERE instrumentId = ? AND reportedDate = ? LIMIT 1', 
                [instrumentId, '2022-08-31'], 
                (err, marketValueResults) => {
                    if (err) {
                        console.error('Error fetching marketValue 2022:', err.stack);
                        return res.status(500).send('Internal Server Error');
                    }

                    const marketValue2022 = marketValueResults[0].marketValue;

                    // Third query: Get the market value of the instrument on Aug 31, 2023
                    db.query(
                        'SELECT marketValue FROM positions WHERE instrumentId = ? AND reportedDate = ? LIMIT 1',
                        [instrumentId, '2023-08-31'], 
                        (err, marketValueResultsCurrent) => {
                            if (err) {
                                console.error('Error fetching marketValue 2023:', err.stack);
                                return res.status(500).send('Internal Server Error');
                            }

                            const marketValue2023 = marketValueResultsCurrent[0].marketValue;

                            // Calculate 12 month investment return using the provided formula
                            const investmentReturn = ((pnlValue + marketValue2023) / marketValue2022) - 1;

                            // Respond with the calculated value
                            res.json({ investmentReturn });
                        }
                    );
                }
            );
        }
    );
}

export { 
    initialize,  
    list_monthly_market_value,
    list_monthly_pnl,
    list_monthly_pnl_range,
    get_twelve_month_returns,
}