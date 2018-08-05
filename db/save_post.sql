insert into posts (article,text1,text2,text3,user_id,fblink) 
Values ($1,$2,$3,$4,
(select id from users where authid=$5),$6
)
RETURNING *;--