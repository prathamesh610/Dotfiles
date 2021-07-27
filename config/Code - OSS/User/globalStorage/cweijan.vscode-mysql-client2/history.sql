/* 2021-01-05 22:24:20 [7 ms] */ SHOW DATABASES
/* 2021-01-05 22:24:34 [2 ms] */ CREATE DATABASE Ecommerce
/* 2021-01-05 22:24:37 [2 ms] */ SHOW DATABASES
/* 2021-01-05 22:24:41 [2 ms] */ USE Ecommerce
/* 2021-01-05 23:19:29 [3 ms] */ USE Ecommerce
/* 2021-01-05 23:19:37 [435 ms] */ create TABLE if not exists login_data(     C_Id int Not NULL ,     password VARCHAR (64) not null,     FOREIGN KEY (C_Id) REFERENCES user_profile(C_Id)    )
/* 2021-01-05 23:20:32 [4 ms] */ select * from login_data;
/* 2021-01-05 23:21:29 [72 ms] */ INSERT INTO login_data VALUES('1','123');
/* 2021-01-05 23:22:30 [1 ms] */ create TABLE if not exists login_data(     C_Id int Not NULL ,     password VARCHAR (64) not null,     FOREIGN KEY (C_Id) REFERENCES user_profile(C_Id)    )    select * from login_data
