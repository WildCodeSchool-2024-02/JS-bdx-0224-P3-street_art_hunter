create table user (
  id int unsigned primary key auto_increment not null,
  refName VARCHAR(100) NOT NULL,
  username varchar(80) not null,
  firstname varchar(80),
  lastname varchar(80),
  city varchar(80) not null,
  zipcode int not null,
  email varchar(255) not null,
  password varchar(255) not null,
  role varchar(80) not null,
  registration_date date not null
);

create table art (
  id int unsigned primary key auto_increment not null,
  title varchar(80),
  information varchar(255),
  latitude DECIMAL (10,8) not null,
  longitude DECIMAL (11,8) not null,
  upload_date date not null,
  status varchar(20) not null,
  best_picture boolean
);

create table picture (
  id int unsigned primary key auto_increment not null,
  image varchar(1000) not null,
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