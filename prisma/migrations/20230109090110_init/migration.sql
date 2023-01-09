/*
  Warnings:

  - You are about to drop the column `nombre` on the `Salary` table. All the data in the column will be lost.
  - You are about to drop the column `salarioAnual` on the `Salary` table. All the data in the column will be lost.
  - Added the required column `name` to the `Salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearlySalary` to the `Salary` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Salary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "yearlySalary" DECIMAL NOT NULL
);
INSERT INTO "new_Salary" ("id") SELECT "id" FROM "Salary";
DROP TABLE "Salary";
ALTER TABLE "new_Salary" RENAME TO "Salary";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
