show databases ;
use nodejs;

create table  if not exists  `student` (
    id int auto_increment primary key ,
    age int not null ,
    score int
)engine ="innodb";

alter table usr modify update_time timestamp default current_timestamp
    on update current_timestamp;