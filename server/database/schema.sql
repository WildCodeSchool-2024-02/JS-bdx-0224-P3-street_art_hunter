create table user (
  id int unsigned primary key auto_increment not null,
  username varchar(80) not null,
  city varchar(80) not null,
  zipcode int not null DEFAULT '33000',
  email varchar(255) unique not null,
  hashed_password varchar(255) not null,
  point_number int not null DEFAULT "0",
  is_Admin BOOLEAN not null default 0,
  registration_date date not null default (CURRENT_DATE)
);

create table art (
  id int unsigned primary key auto_increment not null,
  title varchar(80),
  information text,
  latitude DECIMAL(8,6) not null,
  longitude DECIMAL(9,6) not null,
  upload_date date not null DEFAULT (CURRENT_DATE),
  status varchar(20) not null DEFAULT "pending"
);

create table picture (
  id int unsigned primary key auto_increment not null,
  image varchar(2048) not null,
  user_id int unsigned not null,
  art_id int unsigned not NULL,
  foreign key(user_id) references user(id),
  foreign key(art_id) references art(id)
);

create table artist (
  id int unsigned primary key auto_increment not null,
  name varchar(80) not null
);

create table creating (
  art_id int unsigned not null,
  artist_id int unsigned not null,
  PRIMARY KEY (art_id, artist_id),
  foreign key(art_id) references art(id),
  foreign key(artist_id) references artist(id)
);

INSERT INTO user (username, city, zipcode, email, hashed_password, point_number, is_Admin, registration_date) VALUES
('Alice Admin', 'Bordeaux', 33000, 'aliceberthelot.pro@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$BV2MSsl8RXsEsC5RMeM81w$BHXHDPpzJxr1T9Dy0NH8Df0KX5cfbS/oRaf76lzfIEg', 0, 1, '2024-07-23'),
('Adrien Admin', 'Bordeaux', 33000, 'adrien.douville@protonmail.com', '$argon2id$v=19$m=19456,t=2,p=1$KTjhxul2Yh8mgKRKK40nsw$/7wyfNQ8L0KLnVJZN0ACZO36zb85Ia3FN8sjP+0gl9g', 0, 1, '2024-07-13'),
('Sorrento', 'Bordeaux', 33000, 'sorrento974@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$MQaEOO1zCeRuvZwuhfTYrQ$xLG0CJbp4qQyyOybsLK9bg8QJSsfAt3z8MOD2iAosnE', 20, 1, '2024-07-13');
('Devin58', 'Bordeaux', 33000, 'Deon.Crona79@yahoo.fr', 'gKX9zqFUWx7vHdM', 20, 0, '2024-06-10');
('Rosalia84', 'Bordeaux', 33000, 'Dallas38@hotmail.com', 'FhOAIYMdoOmRGZf', 20, 0, '2024-06-11');
('Everardo_Littel0 ', 'Bordeaux', 33000, 'Meta19@yahoo.com', 'L2bTZTiUKKMmG91', 20, 0, '2024-06-21');
('Wilson94', 'Bordeaux', 33000, 'Lucinda92@yahoo.com', 'YoeiIbzsY9KsT4_', 20, 0, '2024-06-22');
('Heaven_Ward9', 'Bordeaux', 33000, 'Santiago.Carter@hotmail.com', 'FhOAIYMdoOmRGZf', 20, 0, '2024-06-23');