CREATE TABLE IF NOT EXISTS volunteer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    race VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    phone VARCHAR(255) NOT NULL UNIQUE,
    nationality VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    intrests VARCHAR(255) NOT NULL,
    skills VARCHAR(255) NOT NULL,
    preferedDays VARCHAR(255) NOT NULL,
    frequency VARCHAR(255) NOT NULL,
    area VARCHAR(255) NOT NULL,
    language VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    NOKName VARCHAR(255) NOT NULL,
    NOKPhone VARCHAR(255) NOT NULL UNIQUE, 
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE;
)


CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    hours VARCHAR(255) NOT NULL,
    cause VARCHAR(255) NOT NULL,
    numberOfVolunteers INT NOT NULL,
    restrictions VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    volunteerId INT,
    FOREIGN KEY (volunteerId) REFERENCES volunteer(id)
)


CREATE TABLE IF NOT EXISTS workshops (
    workshopId INT AUTO_INCREMENT PRIMARY KEY,
    workshopName VARCHAR(255) NOT NULL,
    workshopType VARCHAR(255) NOT NULL,
    workshopDetails VARCHAR(255) NOT NULL,
    eventId INT,
    FOREIGN KEY (eventId) REFERENCES events(id)
);



// ---------------------------------------------------------







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
