/*
  Warnings:

  - You are about to alter the column `yearlySalary` on the `Salary` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Salary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "yearlySalary" INTEGER NOT NULL
);
INSERT INTO "new_Salary" ("id", "name", "yearlySalary") SELECT "id", "name", "yearlySalary" FROM "Salary";
DROP TABLE "Salary";
ALTER TABLE "new_Salary" RENAME TO "Salary";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
