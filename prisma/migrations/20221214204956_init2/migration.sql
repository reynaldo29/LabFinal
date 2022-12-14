/*
  Warnings:

  - You are about to drop the `playlists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `songs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `playlists` DROP FOREIGN KEY `playlists_songId_fkey`;

-- DropForeignKey
ALTER TABLE `playlists` DROP FOREIGN KEY `playlists_userId_fkey`;

-- DropForeignKey
ALTER TABLE `songs` DROP FOREIGN KEY `songs_userId_fkey`;

-- DropTable
DROP TABLE `playlists`;

-- DropTable
DROP TABLE `songs`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `productos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
