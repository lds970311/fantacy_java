# 常用函数
select trim("a" from "aaa 123 ") as 'output';


#二、数学函数

#round 四舍五入
SELECT ROUND(-1.55);
SELECT ROUND(1.567, 2);


#ceil 向上取整,返回>=该参数的最小整数

SELECT CEIL(-1.02);

#floor 向下取整，返回<=该参数的最大整数
SELECT FLOOR(-9.99);

#truncate 截断

SELECT TRUNCATE(1.69999, 1);

# 三、日期函数

#now 返回当前系统日期+时间
SELECT NOW();

#curdate 返回当前系统日期，不包含时间
SELECT CURDATE();

#curtime 返回当前时间，不包含日期
SELECT CURTIME();


#可以获取指定的部分，年、月、日、小时、分钟、秒
SELECT YEAR(NOW()) 年;
SELECT YEAR('1998-1-1') 年;

SELECT YEAR(hiredate) 年
FROM employees;

SELECT MONTH(NOW()) 月;
SELECT MONTHNAME(NOW()) 月;

#str_to_date 将字符通过指定的格式转换成日期
SELECT STR_TO_DATE('1998-3-2', '%Y-%c-%d') AS out_put;

#查询入职日期为1992--4-3的员工信息
select *
from employees
where hiredate = '1992-4-3';


#date_format 将日期转换成字符
SELECT DATE_FORMAT(NOW(), '%y年%m月%d日') AS out_put;

#查询有奖金的员工名和入职日期(xx月/xx日 xx年)
select first_name, date_format(hiredate, '%y-%m-%d') as 'date'
from employees
where commission_pct is not null;

#四、其他函数
SELECT VERSION();
SELECT DATABASE();
SELECT USER();


#五、流程控制函数

#1.if函数： if else 的效果
SELECT IF(10 < 5, '大', '小');

SELECT last_name, commission_pct, IF(commission_pct IS NULL, '没奖金，呵呵', '有奖金，嘻嘻') 备注
FROM employees;


#2.case函数的使用一： switch case 的效果
SELECT salary     原始工资,
       department_id,
       CASE department_id
           WHEN 30 THEN salary * 1.1
           WHEN 40 THEN salary * 1.2
           WHEN 50 THEN salary * 1.3
           ELSE salary
           END AS 新工资
FROM employees;

#3.case 函数的使用二：类似于 多重if

#案例：查询员工的工资的情况
# 如果工资>20000,显示A级别
# 如果工资>15000,显示B级别
# 如果工资>10000，显示C级别
# 否则，显示D级别


SELECT salary,
       CASE
           WHEN salary > 20000 THEN 'A'
           WHEN salary > 15000 THEN 'B'
           WHEN salary > 10000 THEN 'C'
           ELSE 'D'
           END AS 工资级别
FROM employees;