-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "popularity" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "TopPodcasts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genres" TEXT[],
    "image_url" TEXT NOT NULL,
    "popularity" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "TopPodcasts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TopPodcasts_name_key" ON "TopPodcasts"("name");
