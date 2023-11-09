DROP TABLE `article` CASCADE;
DROP TABLE `comment` CASCADE;
DROP TABLE `user` CASCADE;

CREATE TABLE IF NOT EXISTS `user`
(
    `id`         int(11)  NOT NULL AUTO_INCREMENT,
    `username`   text     NOT NULL,
    `password`   text     NOT NULL,
    `is_admin`   boolean  NOT NULL DEFAULT false,
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `article`
(
    `id`              int(11)  NOT NULL AUTO_INCREMENT,
    `title`           text     NOT NULL,
    `fk_user_id`      int(11)  NOT NULL,
    `text`            text     NOT NULL,
    `created_at`      datetime NOT NULL,
    `last_updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_user_id` (`fk_user_id`),
    CONSTRAINT `article_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `comment`
(
    `id`         int(11)  NOT NULL AUTO_INCREMENT,
    `fk_user_id` int(11)  NOT NULL,
    `text`       text     NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_user_id` (`fk_user_id`),
    CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

# TODO: Delete development test data later
INSERT INTO `user` (`username`, `password`, `created_at`)
VALUES ('gato', 'gato', '2018-01-01 00:00:00');

INSERT INTO `article` (`title`, `fk_user_id`, `text`, `created_at`, `last_updated_at`)
VALUES ('Title Test',
        1,
        'Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jum eat the grass rip the couch scratched sumbathe, shed everywhere rip the couch sleep in the sink fluffy fur canip scratched.',
        '2020-01-01 00:00:00',
        '2023-01-01 00:00:00');

INSERT INTO `comment` (`fk_user_id`, `text`, `created_at`)
VALUES (1, 'Great article! I loved it! TEST', '2023-01-01 00:00:00')