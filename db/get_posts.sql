select * from posts where user_id = (select id from users where authid= $1) Order by ID desc

-- select * from posts 
-- INNER JOIN users
-- ON (post.user_id = users.ID)
-- Order by ID desc