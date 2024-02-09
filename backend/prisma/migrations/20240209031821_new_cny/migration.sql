-- CreateTable
CREATE TABLE "Volunteer" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT,
    "race" TEXT,
    "dob" TIMESTAMP(3),
    "phone" TEXT,
    "nationality" TEXT,
    "address" TEXT,
    "intrests" TEXT,
    "skills" TEXT,
    "preferedDays" TEXT,
    "frequency" TEXT,
    "area" TEXT,
    "language" TEXT,
    "role" TEXT,
    "NOKName" TEXT,
    "NOKPhone" TEXT,
    "profilePic" TEXT,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensitiveInformation" (
    "volunteerId" INTEGER NOT NULL,
    "passwordhash" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "SensitiveInformation_pkey" PRIMARY KEY ("volunteerId")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "time" TIMESTAMP(3),
    "hours" TEXT,
    "cause" TEXT,
    "numberOfVolunteers" INTEGER,
    "restrictions" TEXT,
    "location" TEXT,
    "description" TEXT,
    "type" TEXT,
    "image" TEXT,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VolunteerParticipates" (
    "volunteerId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "isLeader" BOOLEAN NOT NULL,

    CONSTRAINT "VolunteerParticipates_pkey" PRIMARY KEY ("volunteerId","eventId")
);

-- CreateTable
CREATE TABLE "ExternalOrganizations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cause" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "ExternalOrganizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalOrganizationsHostedBy" (
    "organizationId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "ExternalOrganizationsHostedBy_pkey" PRIMARY KEY ("organizationId","eventId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_email_key" ON "Volunteer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_phone_key" ON "Volunteer"("phone");

-- AddForeignKey
ALTER TABLE "SensitiveInformation" ADD CONSTRAINT "SensitiveInformation_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "Volunteer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VolunteerParticipates" ADD CONSTRAINT "VolunteerParticipates_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "Volunteer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VolunteerParticipates" ADD CONSTRAINT "VolunteerParticipates_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalOrganizationsHostedBy" ADD CONSTRAINT "ExternalOrganizationsHostedBy_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "ExternalOrganizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalOrganizationsHostedBy" ADD CONSTRAINT "ExternalOrganizationsHostedBy_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
