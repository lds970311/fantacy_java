show databases;
use girls;
show tables;
desc beauty;

# 1. 查询编号>3 的女神的男朋友信息，如果有则列出详细，如果没有，用 null 填充
select name, bo.*
from beauty as b
         left join boys as bo
                   on b.boyfriend_id = bo.id;


# 2. 查询哪个城市没有部门
use myemployees;
select city, d.department_name
from locations
         left join departments d on locations.location_id = d.location_id
where d.department_id is null;

# 3. 查询部门名为 SAL 或 IT 的员工信息
select first_name, department_name
from employees
         left join departments d on d.department_id = employees.department_id
where d.department_name in('SAL','IT')