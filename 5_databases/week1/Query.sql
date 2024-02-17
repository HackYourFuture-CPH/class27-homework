-- Active: 1706378251164@@0.0.0.0@3306@hyf
CREATE TABLE `user` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `phone` varchar(255) NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `status` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `task` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` text NULL DEFAULT NULL, `created` DATETIME NOT NULL, `updated` DATETIME NOT NULL, `due_date` DATETIME NULL DEFAULT NULL, `status_id` int(10) unsigned NOT NULL, `user_id` int(10) unsigned, PRIMARY KEY (`id`), CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;