select * from posts where user_id = (select id from users where authid= $1) Order by ID desc