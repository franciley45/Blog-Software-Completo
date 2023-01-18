DROP DATABASE IF EXISTS EspiritoSanto;

  CREATE DATABASE IF NOT EXISTS EspiritoSanto;

  CREATE TABLE EspiritoSanto.user(
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL
  ) engine = InnoDB;

  CREATE TABLE EspiritoSanto.posts(
    posts_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    user_id INT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    milagres VARCHAR(1000) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
  ) engine = InnoDB;
  
  INSERT INTO EspiritoSanto.user (name, email, password)
  VALUES
    ('user1', 'user1@gmail.com', '123');
    
    INSERT INTO EspiritoSanto.posts (title, user_id, date, milagres)
  VALUES
    ('Barbara Liskov', 1, NOW(),'deus tenha misericordia'),
    ('Barbara Liskov', 1, NOW(),'cristo salva')
