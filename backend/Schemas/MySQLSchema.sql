CREATE TABLE IF NOT EXISTS volunteer (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(255),
    race VARCHAR(255),
    dob DATE,
    phone VARCHAR(255) UNIQUE,
    nationality VARCHAR(255),
    address VARCHAR(255),
    intrests VARCHAR(255),
    skills VARCHAR(255),
    preferedDays VARCHAR(255),
    frequency VARCHAR(255),
    area VARCHAR(255),
    language VARCHAR(255),
    role VARCHAR(255),
    NOKName VARCHAR(255),
    NOKPhone VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS sensitive_information (
    volunteerId INT PRIMARY KEY,
    passwordhash VARCHAR(255),
    isAdmin BOOLEAN,
    FOREIGN KEY (volunteerId) REFERENCES volunteer(id)
);

CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    hours VARCHAR(255) NOT NULL,
    cause VARCHAR(255) NOT NULL,
    numberOfVolunteers INT NOT NULL,
    restrictions VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL CHECK (type IN ('volunteering', 'workshop'))
);

CREATE TABLE IF NOT EXISTS volunteer_participates (
    volunteerId INT,
    eventId INT,
    isLeader BOOLEAN NOT NULL,
    PRIMARY KEY (volunteerId, eventId),
    FOREIGN KEY (volunteerId) REFERENCES volunteer(id),
    FOREIGN KEY (eventId) REFERENCES events(id)
);

CREATE TABLE IF NOT EXISTS external_organizations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cause VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS external_organizations_hosted_by (
    organizationId INT,
    eventId INT,
    type VARCHAR(255) NOT NULL CHECK (type IN ('organizer', 'sponsor')),
    PRIMARY KEY (organizationId, eventId),
    FOREIGN KEY (organizationId) REFERENCES external_organizations(id),
    FOREIGN KEY (eventId) REFERENCES events(id)
);
