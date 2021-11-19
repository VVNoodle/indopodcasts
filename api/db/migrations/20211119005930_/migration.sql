/*
  Warnings:

  - A unique constraint covering the columns `[publisher]` on the table `Podcast` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `publisher` to the `Podcast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "publisher" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TopPodcast" ADD COLUMN     "publisher" TEXT NOT NULL DEFAULT E'';

-- CreateIndex
CREATE UNIQUE INDEX "Podcast_publisher_key" ON "Podcast"("publisher");
