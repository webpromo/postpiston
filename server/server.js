
const express = require('express')
// only need body-parser when RECEIVING body info, not when sending like here
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session')
require ('dotenv').config()
axios = require('axios')

const app = express();


const {SERVER_PORT, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, SESSION_SECRET,CONNECTION_STRING} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then( db => {  // massive converts our db sql files into callable functions.
    console.log("connected")
  app.set('db', db);  // first argument is a key in an app object, then 2nd arg is the info stored there.
})

app.get('/auth/callback', async (req,res) =>{  // Auth0 will be sending a code, so we catch it here
    // req.query.code --> code from auth0 from a query
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback` // samm callback URL given in Auth0, also in login.js

    }

    // use the code from auth0 to get a token, using async
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);  

    // use the access token to get user info for whomever just logged in.
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);

    // db calls


    // TIP:  always save your db queries, just in case you lose your db and need to recreate
    // req.session.user = responseFromDb
    // put user data on req.session object, ie. req.session = {user:{}, }
    const db = req.app.get('db');  // retrieves our db connection.  now can use 'db' to invoke any of our methods
    let {sub, email, name, picture} = resWithUserData.data;
    let foundUser = await db.find_user([sub])  /// data coming back from a table is always an array

    if (foundUser[0]){
        // put on the req.session object
        req.session.user = foundUser[0];  // returns an array of 1 object
        res.redirect('/#/private') // <--- same as spelling out the full localhost:3000.  Sends redirect to the browser.
    } else {
        // create user
       let createdUser = await db.create_user([name, email, sub, picture])

        // put on a session
       req.session.user = createdUser[0];  // returns an array of 1 object.  // ### req.session.user IS the person logged in.
       res.redirect('/#/private')
    }

    });

    app.get('/api/user-data', (req,res) => {
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send("Who are you?")
        }
    })

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.send("Goodbye!") // if only res.send, it auto-sends a status 200.
})
app.listen(SERVER_PORT, () => {
    console.log(`Listening intently on port: ${SERVER_PORT}`);
})   