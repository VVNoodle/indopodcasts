-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "guid" TEXT NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Episode_title_key" ON "Episode"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_link_key" ON "Episode"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_guid_key" ON "Episode"("guid");
