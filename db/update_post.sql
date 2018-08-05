
UPDATE posts 
SET 
    article = $1,
    pic1 = $2,
    pic2 = $3,
    pic3 = $4
WHERE 
    id=$5;