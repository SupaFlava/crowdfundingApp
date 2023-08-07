-- CreateTable
CREATE TABLE "ProjectPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProjectPost_pkey" PRIMARY KEY ("id")
);
