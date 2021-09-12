# 连接查询
show databases;
use myemployees;
show tables;

# 1. 查询哪个部门的员工个数>3的部门名和员工个数，并按个数降序（添加排序）
select department_name, count(employee_id)
from employees as e
         inner join departments as d
                    on e.department_id = d.department_id
group by department_name
having count(employee_id) > 3
order by count(employee_id) desc;


# 2. 查询员工名、部门名、工种名，并按部门名降序（添加三表连接）
select concat(first_name, '_', last_name) as name, department_name, job_title
from employees as e
         inner join departments as d
                    on e.department_id = d.department_id
         inner join jobs as j on e.job_id = j.job_id
order by department_name desc;

#二）非等值连接
#1. 查询工资级别的个数>20的个数，并且按工资级别降序
select grade_level, count(*) num
from employees as e
         join job_grades as j
              on e.salary between j.lowest_sal and j.highest_sal
group by grade_level
order by grade_level desc;