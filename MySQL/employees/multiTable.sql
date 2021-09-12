show databases;
use myemployees;
show tables;

## 1. 查询员工名和对应的部门名
select first_name, department_name
from employees,
     departments
where employees.department_id = departments.department_id;

## 2. 案例：查询有奖金的员工名、部门名
select first_name, department_name
from employees as e,
     departments as d
where e.department_id = d.department_id
  and e.commission_pct is not null;


## 3. 查询城市名中第二个字符为o的部门名和城市名
select department_name, city
from departments as d,
     locations as l
where d.location_id = l.location_id
  and city like '_o%';


#5、可以加分组
#案例1：查询每个城市的部门个数
select city, count(department_id)
from locations as l,
     departments as d
where l.location_id = d.location_id
group by city;

## 2. 查询有奖金的每个部门的部门名和部门的领导编号和该部门的最低工资
select department_name, e.manager_id, min(salary)
from employees as e,
     departments as d
where e.department_id = d.department_id
  and commission_pct is not null
group by department_name, d.manager_id;


## 3, 案例：查询每个工种的工种名和员工的个数，并且按员工个数降序
select job_title, count(first_name) as total
from jobs as j,
     employees as e
where j.job_id = e.job_id
group by job_title
order by total desc;

# 可以实现三表连接？

# 4. 案例：查询员工名、部门名和所在的城市
select first_name, department_name, city
from employees as e,
     departments as d,
     locations as l
where e.department_id = d.department_id
  and d.location_id = l.location_id;


#2、非等值连接
#案例1：查询员工的工资和工资级别
select first_name, salary, grade_level
from employees as e,
     job_grades as j
where e.salary between j.lowest_sal and j.highest_sal
order by grade_level desc;

select md5('123');