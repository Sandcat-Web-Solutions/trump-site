DROP TABLE `article` CASCADE;
DROP TABLE `comment` CASCADE;
DROP TABLE `user` CASCADE;

CREATE TABLE IF NOT EXISTS `user`
(
    `id`         int(11)  NOT NULL AUTO_INCREMENT,
    `username`   text     NOT NULL,
    `password`   text     NOT NULL,
    `created_at` datetime NOT NULL,
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

INSERT INTO `user` (`username`, `password`, `created_at`)
VALUES ('gato', 'gato', '2018-01-01 00:00:00');