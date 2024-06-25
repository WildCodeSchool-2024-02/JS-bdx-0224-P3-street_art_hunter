create table user (
  id int unsigned primary key auto_increment not null,
  username varchar(80) not null,
  city varchar(80) not null,
  email varchar(255) unique not null,
  password varchar(255) not null,
  isAdmin BOOLEAN DEFAULT 0,
  registration_date date not null default (CURRENT_DATE)
);

create table art (
  id int unsigned primary key auto_increment not null,
  title varchar(80),
  information text,
  latitude DECIMAL (8,6) not null,
  longitude DECIMAL (9,6) not null,
  upload_date date not null,
  status varchar(20) not null,
  is_best_picture boolean
);

create table picture (
  id int unsigned primary key auto_increment not null,
  image varchar(2048) not null,
  user_id int unsigned not null,
  art_id int unsigned not null,
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