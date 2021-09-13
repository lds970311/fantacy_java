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



#二、外连接

/*
应用场景：用于查询一个表中有，另一个表没有的记录

特点：
1、外连接的查询结果为主表中的所有记录
   如果从表中有和它匹配的，则显示匹配的值
   如果从表中没有和它匹配的，则显示null
   外连接查询结果=内连接结果+主表中有而从表没有的记录
2、左外连接，left join左边的是主表
   右外连接，right join右边的是主表
3、左外和右外交换两个表的顺序，可以实现同样的效果
4、全外连接=内连接的结果+表1中有但表2没有的+表2中有但表1没有的
*/
use girls;
show tables;
#引入：查询男朋友 不在男神表的的女神名
select name, bo.boyName
from beauty as b
         left join boys as bo
                   on b.boyfriend_id = bo.id
where bo.id is not null;


#案例1：查询哪个部门没有员工
use myemployees;
show tables;
select d.*, employee_id
from departments d
         left join employees e on d.department_id = e.department_id
where e.employee_id is null;