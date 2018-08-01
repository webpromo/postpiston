
INSERT INTO users
(username,sub)
VALUES
( $1)
RETURNING *;