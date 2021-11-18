/*
  Warnings:

  - You are about to drop the `TopPodcasts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TopPodcasts";

-- CreateTable
CREATE TABLE "TopPodcast" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genres" TEXT[],
    "image_url" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TopPodcast_pkey" PRIMARY KEY ("id")
);
