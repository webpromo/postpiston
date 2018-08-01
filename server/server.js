require('dotenv').config();
const express = require('express'),
  session = require('express-session'),
  axios = require('axios'),
  massive = require('massive');

const app = express();

const {
  SERVER_PORT,
  REACT_APP_DOMAIN,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET,
  CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.get('/auth/callback', async (req, res) => {
  // req.query.code ---> code from auth0
  // http://localhost:3005/auth/callback?code=hfj34834673yh
  // req.query = { code: hfj34834673yh }
  let payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: `http://${req.headers.host}/auth/callback`
  };

  // use the code from auth0 to get a token

  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );
  console.log("To here!");
  
  // use the access token to get user info for whoever just logged in
  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );
  console.log("resWithUserData = "+resWithUserData.data)
  // db calls
  // put user data on req.session object
  // req.session.user = responseFromDb
  // req.session = { user: {} }
  const db = req.app.get('db');

  let { sub, name} = resWithUserData.data;  // "sub" = auth0's auth_id

  let foundUser = await db.find_user([sub]);

  if (foundUser[0]) {
    // put on session
    req.session.user = foundUser[0];
    res.redirect('/#/facebook-to-twitter');
    // res.redirect('http://localhost:3000/')
  } else {
    // create user
    let createdUser = await db.create_user([name, sub]);
    // put on session
    req.session.user = createdUser[0];
    res.redirect('/#/facebook-to-twitter');
  }
});

app.get('/api/user-data', (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send('Not found.');
  }
});

app.get('/api/logout', (req, res) => {
  req.session.destroy();
  res.redirect('http://localhost:3000/');
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
