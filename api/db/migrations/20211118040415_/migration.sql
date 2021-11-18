/*
  Warnings:

  - Added the required column `rownum` to the `TopPodcast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TopPodcast" ADD COLUMN     "rownum" INTEGER NOT NULL;
