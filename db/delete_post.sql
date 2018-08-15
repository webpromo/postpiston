
delete from posts 
WHERE id = $1
RETURNING *;--