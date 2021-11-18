/*
  Warnings:

  - You are about to alter the column `popularity` on the `Podcast` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `popularity` on the `TopPodcasts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Podcast" ALTER COLUMN "popularity" SET DEFAULT 0,
ALTER COLUMN "popularity" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "TopPodcasts" ALTER COLUMN "popularity" SET DEFAULT 0,
ALTER COLUMN "popularity" SET DATA TYPE INTEGER;
