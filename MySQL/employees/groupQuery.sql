#进阶5：分组查询

/*
语法：

select 查询列表
from 表
【where 筛选条件】
group by 分组的字段
【order by 排序的字段】;

特点：
1、和分组函数一同查询的字段必须是group by后出现的字段
2、筛选分为两类：分组前筛选和分组后筛选
		针对的表			位置		连接的关键字
分组前筛选	原始表				group by前	where

分组后筛选	group by后的结果集    		group by后	having

问题1：分组函数做筛选能不能放在where后面
答：不能

问题2：where——group by——having

一般来讲，能用分组前筛选的，尽量使用分组前筛选，提高效率

3、分组可以按单个字段也可以按多个字段
4、可以搭配着排序使用

*/

show databases;
use myemployees;
show tables;


#引入：1.查询每个部门的员工个数
select count(*)
from employees
where department_id = '90';

#案例1：查询每个工种的员工平均工资
select avg(salary), job_id
from employees
group by job_id;


#案例2：查询每个位置的部门个数
select count(*) location_id
from departments
group by location_id;


#2、可以实现分组前的筛选
#案例1：查询邮箱中包含a字符的 每个部门的最高工资
select max(salary)
from employees
where email like '%a%'
group by department_id;


#案例2：查询有奖金的每个领导手下员工的平均工资
select avg(salary)
from employees
where commission_pct is not null
group by manager_id;

#案例3：领导编号>102的每个领导手下的最低工资大于5000的领导编号和最低工资
select manager_id, min(salary)
from employees
where manager_id > 102
group by manager_id
having min(salary) > 5000;

#4.添加排序

#案例：每个工种有奖金的员工的最高工资>6000的工种编号和最高工资,按最高工资升序
select employee_id, max(salary)
from employees
where commission_pct is not null
group by job_id
having max(salary) > 6000
order by salary asc;


#5.按多个字段分组

#案例：查询每个工种每个部门的最低工资,并按最低工资降序
select min(salary), job_id, department_id
from employees
group by job_id
order by min(salary) desc;

#案例:按员工姓名的长度分组，查询每一组的员工个数，筛选员工个数>5的有哪些
select length(first_name), count(employee_id)
from employees
group by length(first_name)
having count(employee_id) > 5;

#1.查询各job_id的员工工资的最大值，最小值，平均值，总和，并按job_id升序
select job_id, max(salary), min(salary), avg(salary), sum(salary)
from employees
group by job_id
order by job_id asc;

#2.查询所有部门的编号，员工数量和工资平均值,并按平均工资降序Ⅰ
select department_id, count(employee_id), avg(salary)
from employees
group by department_id
order by avg(salary) desc;