/*
  Warnings:

  - You are about to drop the column `Indication` on the `indications` table. All the data in the column will be lost.
  - Added the required column `indication` to the `indications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "indications" DROP COLUMN "Indication",
ADD COLUMN     "indication" TEXT NOT NULL;
