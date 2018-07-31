
const express = require('express')
, bodyParser = require('body-parser')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session')

const app = express();
massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
})


let SERVER_PORT = 3005;
app.listen(SERVER_PORT, () => {
    console.log(`Listening intently on port: ${SERVER_PORT}`);
}) 

