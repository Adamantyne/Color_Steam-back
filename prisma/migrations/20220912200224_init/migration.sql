-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "iconUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "indications" (
    "id" SERIAL NOT NULL,
    "Indication" TEXT NOT NULL,

    CONSTRAINT "indications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "games_title_key" ON "games"("title");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
