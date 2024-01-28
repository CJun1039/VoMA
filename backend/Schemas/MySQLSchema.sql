CREATE TABLE IF NOT EXISTS instrument (
    instrumentId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    instrumentName VARCHAR(255) NOT NULL UNIQUE,
    instrumentType ENUM('Equity', 'Government Bond') NOT NULL,
    currency CHAR(3),
    isinCode VARCHAR(64) UNIQUE,
    sedolCode VARCHAR(32),
    symbol VARCHAR(10),
    country CHAR(2),
    sector VARCHAR(32),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pricing (
    pricingId INT AUTO_INCREMENT PRIMARY KEY,
    instrumentId INT,
    unitPrice DECIMAL(20,2),
    reportedDate DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (instrumentId) REFERENCES instrument(instrumentId)
);

CREATE TABLE IF NOT EXISTS fund (
    fundId INT AUTO_INCREMENT PRIMARY KEY,
    fundName VARCHAR(64) UNIQUE
);

CREATE TABLE IF NOT EXISTS positions (
    positionId INT AUTO_INCREMENT PRIMARY KEY,
    fundId INT,
    instrumentId INT,
    quantity DECIMAL(20,2),
    marketValue DECIMAL(20,2),
    realisedProfitLoss DECIMAL(20,2),
    reportedDate DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (fundId) REFERENCES fund(fundId),
    FOREIGN KEY (instrumentId) REFERENCES instrument(instrumentId)
);

CREATE TABLE IF NOT EXISTS common (
    commonId INT AUTO_INCREMENT PRIMARY KEY,
    instrumentId INT,
    quantity DECIMAL(20,2),
    marketValue DECIMAL(20,2),
    realisedProfitLoss DECIMAL(20,2),
    reportedDate DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (instrumentId) REFERENCES instrument(instrumentId)
);
