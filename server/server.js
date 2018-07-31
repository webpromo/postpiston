
const express = require('express')
, bodyParser = require('body-parser')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session')
require('dotenv').config();

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
    }));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {
  
    const db = app.get('db');
  
    db.find_user([ profile.identities[0].user_id ])
    .then( user => {
     if ( user[0] ) {
       return done( null, { id: user[0].id } );
     } else {
       db.create_user([profile.displayName, profile.password])
       .then( user => {
          return done( null, { id: user[0].id } );
       })
     }
    })
  
  
  }));

let SERVER_PORT = 3005;
app.listen(SERVER_PORT, () => {
    console.log(`Listening intently on port: ${SERVER_PORT}`);
}) 

