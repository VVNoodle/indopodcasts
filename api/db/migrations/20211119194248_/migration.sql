/*
  Warnings:

  - Added the required column `rss` to the `Podcast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "rss" TEXT NOT NULL;
