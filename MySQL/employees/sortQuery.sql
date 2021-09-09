show databases;
use myemployees;
show tables;

#1.查询员工的姓名和部门号和年薪，按年薪降序 按姓名升序
select first_name, department_id, salary * 12 * (1 + ifnull(commission_pct, 0)) as "sal"
from employees
order by sal asc, first_name desc;

#2、添加筛选条件再排序
#案例：查询部门编号>=90的员工信息，并按员工编号降序
select *
from employees
where department_id >= 90
order by department_id desc;


#3、按表达式排序
#案例：查询员工信息 按年薪降序
select *, salary * 12 * (1 + ifnull(commission_pct, 0)) as "sal"
from employees
order by sal desc;


#4、按别名排序
#案例：查询员工信息 按年薪升序
select *, salary * 12 * (1 + ifnull(commission_pct, 0)) as "sal"
from employees
order by sal asc;

#5、按函数排序
#案例：查询员工名，并且按名字的长度降序
select length(first_name) as 'len', first_name, last_name
from employees
order by len desc;

#6、按多个字段排序
#案例：查询员工信息，要求先按工资降序，再按employee_id升序
select *
from employees
order by salary desc, employee_id asc;