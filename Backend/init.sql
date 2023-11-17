DROP TABLE IF EXISTS `comment` CASCADE;
DROP TABLE IF EXISTS `article` CASCADE;
DROP TABLE IF EXISTS `user` CASCADE;

CREATE TABLE IF NOT EXISTS `user`
(
    `id`         int(11)  NOT NULL AUTO_INCREMENT,
    `username`   text     NOT NULL UNIQUE,
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
    `image_url`       text     NULL,
    `created_at`      datetime NOT NULL,
    `last_updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_user_id` (`fk_user_id`),
    CONSTRAINT `article_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `comment`
(
    `id`            int(11)  NOT NULL AUTO_INCREMENT,
    `fk_user_id`    int(11)  NOT NULL,
    `fk_article_id` int(11)  NOT NULL,
    `text`          text     NOT NULL,
    `created_at`    datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_user_id` (`fk_user_id`),
    CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `user` (`id`),
    CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`fk_article_id`) REFERENCES `article` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

# TODO: Delete development test data later

INSERT INTO `user` (`username`, `password`, `is_admin`, `created_at`)
VALUES ('user',
        'eUBaWQQuNeDDtO8LvpYstDWn1bYiY0qLuQhnKrP7KlGpnYr5kM0jXafb5OzThi3Z7uHxIbYmvBFp33wHRiLGOghbfi2VKjSZCTZ88zKrTahRdd464qyF3ETS4RtU2Vx33N6LvSwrEgCQU0rhZiaHm6u27J7SnZe+OynA7L+ShCo=',
        false,
        '2019-01-01 00:00:00'),
       ('admin',
        'TctRz0PN//3+7j1m1ekJ1zalFYDcKd4HdSWVNlhS9iHiu1nKXUlPyMkEReuePeHyuxU6E+Mr2A5g4dlf04c4EVPdnEJqg5KznudAbQFZ47IlFNTPnhRZKhabA7RXQWLMSMlGYsSd0EHcEbFjyzV87/526nGsGMkXdS2Xwcz5zF0=',
        true,
        '2023-01-01 00:00:00');


INSERT INTO `article` (`title`, `fk_user_id`, `text`, `image_url`, `created_at`, `last_updated_at`)
VALUES ('Title Test',
        1,
        'Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jum eat the grass rip the couch scratched sumbathe, shed everywhere rip the couch sleep in the sink fluffy fur canip scratched.',
        'https://http.cat/409.jpg',
        '2020-01-01 00:00:00',
        '2023-01-01 00:00:00');

INSERT INTO `comment` (`fk_user_id`, `fk_article_id`, `text`, `created_at`)
VALUES (1,
        1,
        'Never read a worse article in my life. I think my eyes are bleeding. My cat could write better than this.',
        '2020-01-01 00:00:00');
