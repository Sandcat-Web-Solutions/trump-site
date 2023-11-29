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
VALUES ('Trump Acquitted… Again',
        1,
        'The former president of the United States, Donald John Trump, has been impeached twice but was also acquitted for the second time last January.
In US-law, the process of impeachment occurs when the House of Representatives, comprised of members from every state, decides to charge the current president or vice president for alleged misconduct. Since Trump had already left office, this was also the first time an impeachment trial has been held against a former president. Donald Trump is, until now, the only US president to be impeached twice. The other presidents were Andrew Johnson in 1868 and Bill Clinton in 1998.
This time around, Trump has been charged with incitement of insurrection. The reason for the impeachment was, on the one hand, the Capitol attack on January 6, about a month beforehand. Thousands of supporters of the former president felt an urge to rebel against the results of the presidential election, which Trump lost. They also were shouting “hang Mike Pence”, since he was overseeing Biden’s election process. A total of five people died during the events, and over 130 were injured. This was the first time the Capitol had ever been breached by rioters. 
The other reason for his impeachment was a phone call he had had with Secretary of State Brad Raffensperger (oversees elections in the state of Georgia). During this phone call, he pressured Raffensperger to investigate Georgia’s election results, even after being told multiple times that the results had been correct.
Ultimately however, Trump was acquitted in a 57-43 vote, 10 short of the needed two-thirds to have him convicted. Today Trump is currently running for president again, which would not have been possible had he been convicted.
Sources: Wikipedia
',
        'https://luczwyssig.github.io/TrumpImageRepo/insur.jpg',
        '2020-01-01 00:00:00',
        '2023-01-01 00:00:00');
INSERT INTO `article` (`title`, `fk_user_id`, `text`, `image_url`, `created_at`, `last_updated_at`)
VALUES ('Trump, the controversial president',
        1,
        "Donald Trump, the 45th President of the United States, can be described as one of the most controversial leaders in the nation's history. While his actions have been deemed idiotic and incomprehensible by some, others are of the opinion that he was a great leader and are fans of his political doings.
We first must look at the US political system to understand the political divide. The US Parliament is made up of two major political parties that control almost all seats. Currently, 48 of the 100 seats in the United States Senate are occupied by the Democratic Party, 49 by the Republican Party, and the remaining 3 by independent politicians. This is a stark contrast to the Swiss political system, where the seats are divided between many more parties. With there being only two parties in the United States, they tend to have completely different ideas and motives. Consequently, the current US president is usually disliked or disapproved of by a large part of the country, while the other half usually supports him.
However, this still leaves us with the question of why Trump stands out as being so controversial. Trump has put in place several policies, the most controversial of which have to do with immigrants. One of his key executive orders was the travel ban to the US from several Muslim countries, commonly referred to as the “Muslim Ban”. The decision triggered widespread backlash, both domestic and international. 
Another of Trump’s controversial orders was the “zero tolerance policy” imposed on immigrants crossing into the United States from the Mexican border. He would also announce an increase in spending on border control, which would also lead to the famous 'Wall,' which started construction in 2018 along the US-Mexican border but has since been halted by President Joe Biden.
In summary, Trump’s controversial policies, having to do with immigration but also with further topics (including the US’s withdrawal from the Paris agreement on the response to climate change), have made him stand out as an unorthodox and disruptive executive leader.
Sources: Wikipedia, Washington Post
",
        'https://luczwyssig.github.io/TrumpImageRepo/TrumpWall.jpg',
        '2020-02-01 00:00:00',
        '2023-02-01 00:00:00');

INSERT INTO `article` (`title`, `fk_user_id`, `text`, `image_url`, `created_at`, `last_updated_at`)
VALUES ('Trump and social media',
        2,
        " 
 
A well-known fact about Donald Trump is that he is, or at least was, very active on the social media platform Twitter.
Trump, who joined Twitter in 2009, has tweeted a total of around 57,000 times. 25000 of those have been written during his presidency - 8,000 during his first presidential election in 2016 alone. Additionally, it would also be incorrect to say that he hasn’t accumulated a following on the mentioned site since he was sitting at around 89 million followers before his ban. 
During his constant storm of tweets, he has also been known to spread lies and misleading comments. According to a study conducted by CNBC, four of Trump's 10 most popular tweets contained false claims or information; of his most popular 100 tweets, 36 of them did. Trump uses social media to relay his thoughts and suggestions, especially regarding political matters, which can be dangerous since many of his followers take his comments seriously. An example of this is the Capitol insurrection on January 6.
The reason why Trump’s followers believe him so much, not only on Twitter but also in general, can be traced back to several reasons. First and most importantly of all, people tend to believe in politicians who share their own ideas and opinions. This is a reason why his followers believe his political lies, especially those that have to do with Republican principles.
Furthermore, many of Trump's followers see him as a victim of the United States political system and still stand with him. They see the accusations against him as a desperate attempt by the Democratic Party, or more generally,by all non-Trump supporters, to not only get him out of office but also discredit him.
Trump is also known to deeply distrust the media, famously calling it 'fake news.' This distrust has clearly carried over to his followers and has also been aided by right-winged news networks; the most famous and influential one is Fox News Network.
Nowadays, Trump isn’t posting anything on Twitter, or X, as it's called now, but is instead expressing his opinions on his own platform, 'Truth Social.' Whether or not this will play a deciding role in the current election is yet to be determined.
Sources: Wikipedia, CNN

",
        'https://luczwyssig.github.io/TrumpImageRepo/TrumpTwitter.jpg',
        '2020-04-01 00:00:00',
        '2023-04-01 00:00:00');

