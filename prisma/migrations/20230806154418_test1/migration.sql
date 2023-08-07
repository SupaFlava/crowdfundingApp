/*
  Warnings:

  - You are about to drop the `ProjectPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProjectPost";

-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "project_description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "Edition" (
    "edition_id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "edition_name" TEXT NOT NULL,
    "pledge_price" DOUBLE PRECISION NOT NULL,
    "unit_left" INTEGER NOT NULL,
    "edition_description" TEXT NOT NULL,

    CONSTRAINT "Edition_pkey" PRIMARY KEY ("edition_id")
);

-- CreateTable
CREATE TABLE "Pledge" (
    "pledge_id" SERIAL NOT NULL,
    "edition_id" INTEGER NOT NULL,
    "pledge_amount" DOUBLE PRECISION NOT NULL,
    "backer_name" TEXT NOT NULL,
    "backer_email" TEXT NOT NULL,
    "backer_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pledge_pkey" PRIMARY KEY ("pledge_id")
);

-- AddForeignKey
ALTER TABLE "Edition" ADD CONSTRAINT "Edition_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pledge" ADD CONSTRAINT "Pledge_edition_id_fkey" FOREIGN KEY ("edition_id") REFERENCES "Edition"("edition_id") ON DELETE RESTRICT ON UPDATE CASCADE;
