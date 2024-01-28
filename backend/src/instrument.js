let db;

const initialize = (database) => {
  db = database;
};

const get_name = function (req, res) {
  const { id } = req.params;

  const query = `SELECT instrumentName FROM instrument WHERE instrumentId = ?`;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching instrument name:", err.stack);
      return res.status(500).send("Internal Server Error");
    }

    if (results.length === 0) {
      return res.status(404).send("Instrument not found");
    }

    res.json({ instrumentName: results[0].instrumentName });
  });
};

const list = function (req, res) {
  db.query("SELECT * FROM instrument", (err, results) => {
    if (err) {
      console.error("Error fetching instruments:", err.stack);
      return res.status(500).send("Internal Server Error");
    }
    res.json(results);
  });
};

const get_by_ID = function (req, res) {
  db.query(
    "SELECT * FROM instrument WHERE instrumentId = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.error("Error fetching instrument by ID:", err.stack);
        return res.status(500).send("Internal Server Error");
      }
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).send("Instrument not found");
      }
    }
  );
};

const put_by_ID = function (req, res) {
  const { country, sector, instrumentType } = req.body;

  // Validate required fields
  if (!country || !sector || !instrumentType) {
    return res
      .status(400)
      .send("country, sector, and instrumentType are required");
  }

  const query =
    "UPDATE instrument SET country = ?, sector = ?, instrumentType = ? WHERE instrumentId = ?";

  db.query(
    query,
    [country, sector, instrumentType, req.params.id],
    (err, result) => {
      if (err) {
        console.error("Error updating instrument:", err.stack);
        return res.status(500).send("Internal Server Error");
      }

      if (result.affectedRows > 0) {
        res.send("Instrument updated successfully");
      } else {
        res.status(404).send("Instrument not found");
      }
    }
  );
};

const price_value = function (req, res) {
  db.query(
    "SELECT * FROM pricing WHERE instrumentId = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.error("Error fetching month-end price values:", err.stack);
        return res.status(500).send("Internal Server Error");
      }
      res.json(results);
    }
  );
};

const funds = function (req, res) {
  db.query(
    "SELECT * FROM positions WHERE instrumentId = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.error("Error fetching funds:", err.stack);
        return res.status(500).send("Internal Server Error");
      }
      res.json(results);
    }
  );
};

export { initialize, list, get_name, get_by_ID, price_value, put_by_ID, funds };
