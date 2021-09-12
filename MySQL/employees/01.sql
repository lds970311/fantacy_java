#
单字段查询
select last_name
from employees;

#
多字段查询
select last_name, salary, email
from employees;


#
查询所有字段
select *
from employees;

#查询常量值
select 100;
select 'john';

#
查询表达式
select 100 * 91;
select 1 + 21 % 2;

#
查询函数
select VERSION();

#
为字段起别名
select 100 % 32 as res;
select last_name as ln, first_name as fn
from employees;
#
便于理解


# 方式2 起别名
select last_name 'l', first_name 'f'
from employees;


#案例
: 查询员工表中涉及到所有的部门编号
select department_id as 'd_id'
from employees;

##
去重后
select distinct department_id as 'd_id'
from employees;


#
+的作用
## 案例: 查询员工名和姓连接成一个字段
，并显示为姓名

/*java中的+号：
①运算符，两个操作数都为数值型
②连接符，只要有一个操作数为字符串

mysql中的+号：
仅仅只有一个功能：运算符

select 100+90; 两个操作数都为数值型，则做加法运算
select '123'+90;只要其中一方为字符型，试图将字符型数值转换成数值型
			如果转换成功，则继续做加法运算
select 'john'+90;	如果转换失败，则将字符型数值转换成0

select null+10; 只要其中一方为null，则结果肯定为null*/
select last_name + employees.first_name as 'name'
from employees;

select concat(last_name, employees.first_name) as 'name'
from employees;