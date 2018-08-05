insert into posts (article,pic1,pic2,pic3,user_id,fblink) 
Values ($1,$2,$3,$4,
(select id from users where authid=$5),
$6
);