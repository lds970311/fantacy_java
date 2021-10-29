# 多表查询
show tables;
select brand, title, price, brand_id, b.website
from products as p
         left join brand as b
                   on p.brand_id = b.id
where  p.brand_id is null;