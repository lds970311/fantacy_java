show databases;
use nodejs;

show table status;
show tables;

select *
from products
where price = 999
group by brand;


select *
from products
limit 10 offset 20;

# 查询华为手机价格总和
select sum(price)
from products
where brand = "华为";

# 查询评分>7.5的手机的平均价格
select brand, avg(price) `avg_score`
from products
where score > 7.5
group by brand
order by avg_score desc;

# 添加brandid字段
alter table products
    add `brand_id` int;
#修改brand_id为外键
alter table `products`
    add foreign key (brand_id) references brand (id);

# 设置brand_id的值
UPDATE
    `products`
SET `brand_id` = 1
WHERE `brand` = '华为';

UPDATE
    `products`
SET `brand_id` = 2
WHERE `brand` = '苹果';

UPDATE
    `products`
SET `brand_id` = 3
WHERE `brand` = '小米';

UPDATE
    `products`
SET `brand_id` = 4
WHERE `brand` = 'oppo';


UPDATE
    `products`
SET `brand_id` = 7
WHERE `brand` = 'vivo';

UPDATE
    `products`
SET `brand_id` = null
WHERE `brand` = '锤子科技';

# 更改外键约束条件
alter table products drop foreign key products_ibfk_2;
alter table products add foreign key(brand_id) references brand(id)
on update cascade
on delete restrict ;