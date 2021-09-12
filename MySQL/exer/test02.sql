show tables;
# 显示所有员工的姓名，部门号和部门名称。
select concat(first_name, '_', last_name) as name, e.department_id, department_name
from employees as e,
     departments as d
where e.department_id = d.department_id;

# 2. 查询 90 号部门员工的 job_id 和 90 号部门的 location_id
select e.department_id, job_id, location_id
from employees as e,
     departments as d
where e.department_id = d.department_id
  and e.department_id = 90;

# 3. 选择所有有奖金的员工的 last_name , department_name , location_id , city
select last_name, department_name, l.location_id, city
from employees as e,
     departments as d,
     locations as l
where e.department_id = d.department_id
  and d.location_id = l.location_id
  and e.commission_pct is not null;

# 4. 选择city在Toronto工作的员工的
# last_name , job_id , department_id , department_name
select last_name, job_id, e.department_id, department_name, city
from employees as e,
     departments as d,
     locations as l
where e.department_id = d.department_id
  and d.location_id = l.location_id
  and city = 'Toronto';


# 5. 5.查询每个工种、每个部门的部门名、工种名和最低工资
select job_title, department_name, min(salary)
from employees as e,
     departments as d,
     jobs as j
where e.department_id = d.department_id
  and e.job_id = j.job_id
group by job_title;

# 6.查询每个国家下的部门个数大于 2 的国家编号
select country_id, count(department_id) as total
from locations as l,
     departments as d
where d.location_id = l.location_id
group by country_id
having count(department_id) > 2;

# 7. 选择指定员工的姓名，员工号，以及他的管理者的姓名和员工号，
select e.last_name, e.employee_id, m.last_name as 'manager_name', m.employee_id 'mgr#'
from employees as e,
     employees as m
where e.manager_id = m.employee_id;