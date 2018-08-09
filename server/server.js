require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express'),
  session = require('express-session'),
  axios = require('axios'),
  massive = require('massive');

  // PREP TO call to Pexels' APPI
  require('dotenv').config();
  const key = process.env.PEXELS
  const PexelsAPI = require('pexels-api-wrapper');
  var pexelsClient = new PexelsAPI(key);

//   import Store from './../src/ducks/store'
// import {Connect}

// const controller = require('./controller');  opted not to use, but to access the endpoint here below.

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
app.use( bodyParser.json() );


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
  
  // use the access token to get user info for whoever just logged in
  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );
  
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
    // res.status(200).send("Hola!")
    // res.redirect('http://localhost:3000/')
  } else {
    // create user
    let createdUser = await db.create_user([name, sub]);
    // put on session
    req.session.user = createdUser[0];
    console.log("user: ",req.session.user)
    res.redirect('/#/facebook-to-twitter');
  }
//   res.status(200).send('hi')

});

app.get('/api/user-data', (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send('Not found.');
  }
});

// get all posts
app.get( '/api/posts',
 ( req, res, next ) => {
        console.log("session ",req.session.user)
        const dbInstance = req.app.get('db');
        dbInstance.get_posts(req.session.user.authid)
          .then( posts => res.status(200).send( posts ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
);

app.post( '/api/posts',
 ( req, res, next ) => {
        let {article,text1,text2,text3,authid,fblink} = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.save_post([article,text1,text2,text3,authid,fblink])
          .then( posts => res.status(200).send( posts ) )  // Megan says this is perfect!
          .catch( err => {
            res.status(500).send({errorMessage: "Error posting to the database. Abort! Abort!"});
            console.log(err)
          } );
      }
);

app.put('/api/puts', 
 ( req, res, next ) => {
        let {article,text1,text2,text3,pic1,pic2,pic3,fblink,id} = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.update_post([article,text1,text2,text3,pic1,pic2,pic3,fblink,id])
          // .then( (id2) => {res.status(200).send( id2 );
          .then( (updatedPost) => {res.send(updatedPost)})
          .catch( err => {
            res.status(500).send({errorMessage: "Error updating the database. Scoundrels!"});
            console.log(err)
          } );
      }
);

// fetch photo by keyword
// const pexelsQuery = "https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1"
app.get( '/api/pics/:keyword',
 ( req, res, next ) => {
   keyword = req.params.keyword;
    pexelsClient.search(keyword, 10, 1)
    .then( (result) => {
      let picArr = result.photos;

      console.log("server: picArr: ",picArr[0]);
      return picArr;
    }).catch( err => {
      res.status(500).send({errorMessage: "##############   db  #############"});
      console.log(err)
    } );
      
    // .catch(function(e){
    //     console.err(e);
    // });

      }
);

  
app.get('/api/logout', (req, res) => {
  req.session.destroy();
  res.redirect('http://localhost:3000/');
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`)
})
