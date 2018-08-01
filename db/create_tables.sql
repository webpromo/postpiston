
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    authid text
);


-- CREATE TABLE posts (
--     id SERIAL PRIMARY KEY,
--     article text,
--     fblink text,
--     text1 text,
--     text2 text,
--     text3 text,
--     pic1 text,
--     pic2 text,
--     pic3 text,
--     user_id integer FOREIGN KEY REFERENCES users(id)
-- );

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    article text,
    fblink text,
    text1 text,
    text2 text,
    text3 text,
    pic1 text,
    pic2 text,
    pic3 text,
    user_id integer REFERENCES users(id)
);

CREATE TABLE history (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id),
    post_id integer REFERENCES posts(id)
);
