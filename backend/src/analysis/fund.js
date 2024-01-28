let db;

const initialize = (database) => {
    db = database;
};

const get_topten_instruments = function(req, res) {
    const { id } = req.params;

    const query = `
        SELECT 
            p.instrumentId AS InstrumentID,
            i.instrumentName AS InstrumentName,
            p.realisedProfitLoss AS pnl,
            p.quantity AS quantity,
            p.marketValue AS marketValue
        FROM positions p
        INNER JOIN instrument i ON p.instrumentId = i.instrumentId
        WHERE p.fundId = ? AND p.reportedDate = (
            SELECT MAX(reportedDate) FROM positions WHERE fundId = ?
        )
        ORDER BY p.realisedProfitLoss DESC
        LIMIT 10
    `;

    db.query(query, [id, id], (err, results) => {
        if (err) {
            console.error('Error fetching top 10 performing instruments:', err.stack);
            return res.status(500).send('Internal Server Error');
        }

        // Annotate each result with its rank
        results.forEach((row, index) => {
            row.Rank = index + 1;
        });

        res.json(results);
    });
}

const list_monthly_pnl = function(req, res) {
    const { fundId } = req.params;

    const query = `
        SELECT 
            DATE_FORMAT(reportedDate, '%Y-%m-01') as date, 
            SUM(realisedProfitLoss) as pnl
        FROM positions
        WHERE fundId = ?
        GROUP BY YEAR(reportedDate), MONTH(reportedDate)
        ORDER BY date
    `;

    db.query(query, [fundId], (err, results) => {
        if (err) {
            console.error('Error fetching monthly PNL list for the fund:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

const list_instrument_monthly_pnl = function(req, res) {
    const { fundId, instrumentId } = req.params;

    const query = `
        SELECT 
            DATE_FORMAT(reportedDate, '%Y-%m-01') as date, 
            SUM(realisedProfitLoss) as pnl
        FROM positions
        WHERE fundId = ? AND instrumentId = ?
        GROUP BY YEAR(reportedDate), MONTH(reportedDate)
        ORDER BY date
    `;

    db.query(query, [fundId, instrumentId], (err, results) => {
        if (err) {
            console.error('Error fetching monthly PNL list for the instrument:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

const list_monthly_market_value = function(req, res) {
    const fundId = req.params.id;

    // SQL query to sum up market values for each reportedDate for the given fundId
    const query = `
        SELECT reportedDate as date, SUM(marketValue) as marketValue
        FROM positions 
        WHERE fundId = ?
        GROUP BY reportedDate
        ORDER BY reportedDate ASC
    `;

    // Execute the query
    db.query(query, [fundId], (err, results) => {
        if (err) {
            console.error('Error fetching monthly market values:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

const get_topten = function(req, res) {
    const fundId = req.params.id;

    // Modified SQL query to find the top ten funds by PNL for their latest reported date with ranking
    const query = `
        SELECT
            ROW_NUMBER() OVER (ORDER BY totalPNL DESC) as ranking,
            t.fundId,
            f.fundName, 
            t.totalPNL,
            t.latestDate
        FROM (
            SELECT
                p.fundId,
                SUM(p.realisedProfitLoss) as totalPNL,
                p.reportedDate as latestDate
            FROM positions p
            WHERE p.reportedDate = (
                SELECT MAX(reportedDate) 
                FROM positions
                WHERE fundId = p.fundId
            )
            GROUP BY p.fundId, p.reportedDate
        ) t
        JOIN fund f ON t.fundId = f.fundId
        ORDER BY t.totalPNL DESC
        LIMIT 10
    `;

    // Execute the query
    db.query(query, [fundId], (err, results) => {
        if (err) {
            console.error('Error fetching top ten performing funds:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

const get_topten_countries = function(req, res) {
    const fundId = req.params.id;

    // SQL query to find the top ten performing countries by PNL for the given fund's latest reported date and rank them
    const query = `
        SELECT 
            ROW_NUMBER() OVER(ORDER BY totalPNL DESC) as ranking,
            country,
            totalPNL as pnl
        FROM (
            SELECT
                i.country,
                SUM(p.realisedProfitLoss) as totalPNL
            FROM positions p
            JOIN instrument i ON p.instrumentId = i.instrumentId
            WHERE p.fundId = ? AND p.reportedDate = (
                SELECT MAX(reportedDate) 
                FROM positions
                WHERE fundId = ?
            )
            GROUP BY i.country
        ) as subquery
        ORDER BY totalPNL DESC
        LIMIT 10
    `;

    // Execute the query
    db.query(query, [fundId, fundId], (err, results) => {
        if (err) {
            console.error('Error fetching top ten performing countries:', err.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
}

export { 
    initialize,
    list_instrument_monthly_pnl, 
    list_monthly_pnl, 
    get_topten_instruments, 
    list_monthly_market_value,
    get_topten,
    get_topten_countries }