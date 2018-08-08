
UPDATE posts 
SET 
    article = $1,
    text1 = $2
    text2 = $3
    text3 = $4
    pic1 = $5,
    pic2 = $6,
    pic3 = $7
    fblink = $8
WHERE 
    id=(select id from users where authid=$9);