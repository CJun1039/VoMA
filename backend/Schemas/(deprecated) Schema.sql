CREATE TABLE IF NOT EXISTS instrument (
    instrumentId INT NOT NULL PRIMARY KEY,
    instrumentName VARCHAR(255) NOT NULL UNIQUE,
    instrumentType VARCHAR(32) CHECK (instrumentType IN ('Equity', 'Government Bond')),
    currency CHAR(3),
    isinCode VARCHAR(64) UNIQUE,
    sedolCode VARCHAR(32),
    symbol VARCHAR(10),
    country CHAR(2),
    sector VARCHAR(32),
    createdAt TIMESTAMP,
    modifiedAt TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pricing (
    pricingId INT PRIMARY KEY,  -- Added this for primary key
    instrumentId INT,
    unitPrice DECIMAL(20,2),
    reportedDate DATE,
    createdAt TIMESTAMP,
    modifiedAt TIMESTAMP,
    FOREIGN KEY (instrumentId) REFERENCES instrument(instrumentId)
);

CREATE TABLE IF NOT EXISTS fund (
    fundId INT PRIMARY KEY,
    fundName VARCHAR(64) UNIQUE
);

CREATE TABLE IF NOT EXISTS positions (
    positionId INT PRIMARY KEY,  -- Added this for primary key
    fundId INT,
    instrumentId INT,
    quantity DECIMAL(20,2),
    marketValue DECIMAL(20,2),
    realisedProfitLoss DECIMAL(20,2),
    reportedDate DATE,
    createdAt TIMESTAMP,
    modifiedAt TIMESTAMP,
    FOREIGN KEY (fundId) REFERENCES fund(fundId),
    FOREIGN KEY (instrumentId) REFERENCES instrument(instrumentId)
);

CREATE TABLE IF NOT EXISTS common (
    commonId INT PRIMARY KEY,  -- Added this for primary key
    instrumentId INT,
    quantity DECIMAL(20,2),
    marketValue DECIMAL(20,2),
    realisedProfitLoss DECIMAL(20,2),
    reportedDate DATE,
    createdAt TIMESTAMP,
    modifiedAt TIMESTAMP,
    FOREIGN KEY (instrumentId) REFERENCES instrument(instrumentId)
);
