/*
  Warnings:

  - A unique constraint covering the columns `[sensitiveInformationId]` on the table `Volunteer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "SensitiveInformation" DROP CONSTRAINT "SensitiveInformation_volunteerId_fkey";

-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "sensitiveInformationId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_sensitiveInformationId_key" ON "Volunteer"("sensitiveInformationId");

-- AddForeignKey
ALTER TABLE "SensitiveInformation" ADD CONSTRAINT "SensitiveInformation_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
