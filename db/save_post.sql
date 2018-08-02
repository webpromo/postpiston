insert into posts (article,pic1,pic2,pic3,user_id) 
Values ('How to post articles from Facebook to Twitter',
'https://4fi8v2446i0sw2rpq2a3fg51-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/5-Weeks-Corduroy.jpg',
'http://www.lifewithcats.tv/wp-content/uploads/2018/02/frankie-1.jpg',
'https://i.pinimg.com/736x/84/de/6f/84de6feb284a1fcfddb0d87602ac9f5f--baby-cats-baby-animals.jpg',
(select id from users where authid='github|2996722')
);