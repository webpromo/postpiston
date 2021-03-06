const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
session = require('express-session');
axios = require('axios');
massive = require('massive');
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

require('dotenv').config();

// PREP TO call to Pexels' APPI

  const PexelsAPI = require('pexels-api-wrapper');
  const key = process.env.PEXELS;  // works 8/16 at 7:28pm
  var pexelsClient = new PexelsAPI(key);

//   import Store from './../src/ducks/store'
// import {Connect}

// const controller = require('./controller');  opted not to use, but to access the endpoint here below.

const app = express();
app.use( express.static( `${__dirname}/../build` ) );  // likely should be the first app.use

const {
  SERVER_PORT,
  REACT_APP_DOMAIN,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET,
  CONNECTION_STRING,
  USER_EMAIL,
  USER_PASS
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
  
  const db = req.app.get('db');

  let { sub, name} = resWithUserData.data;  // "sub" = auth0's auth_id

  let foundUser = await db.find_user([sub]);

  if (foundUser[0]) {
    // put on session
    req.session.user = foundUser[0];
    res.redirect('/#/twitter-marketing');
    // res.status(200).send("Hola!")
    // res.redirect('http://localhost:3000/')
  } else {
    // create user
    let createdUser = await db.create_user([name, sub]);
    // put on session
    req.session.user = createdUser[0];
    // console.log("user: ",req.session.user)
    res.redirect('/#/twitter-marketing');
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
app.get('/api/posts',
 ( req, res, next ) => {
        // console.log("session ",req.session.user)
        const dbInstance = req.app.get('db');
        dbInstance.get_posts(req.session.user.authid) //) AUTH0
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
app.get( '/api/pics/:keyword',
 ( req, res, next ) => {
    keyword = req.params.keyword;

    pexelsClient.search(keyword, 10, 1)
    .then( (result) => {res.send(result.photos)})
    .catch( err => {
      res.status(500).send({errorMessage: "##############   db  #############"});
      console.log(err)
    } );
      }
);


app.post('/api/email', (req, res) => {
  const {emailAddress,tweetSubject,tweetText,attachment} = req.body 
  let locale = "";
  if(attachment.indexOf(".jp")){ locale = attachment.indexOf(".jp")}
  if(attachment.indexOf(".pn")){ locale = attachment.indexOf(".pn")}
  
  let coreURL = attachment.substring(0,locale+5)
  // console.log("coreURL", coreURL)
  let rightEnd = coreURL.substring(33,locale+5)
  // console.log("rightEnd", rightEnd)
  let whereSlash = rightEnd.indexOf("/")
  let filename = rightEnd.substring(whereSlash+1);
  // console.log("filename", filename)
  // let picNum = rightEnd.substring(0,whereSlash)
  // console.log("picNum",picNum)
  // let path = "https://images.pexels.com/photos/"+picNum+"/";
  // console.log ("path",path)
  let content=encodeURIComponent(coreURL);

  let arrayOfObjects = [
    {content:content,
    filename:filename}
  ]

  // const msg = {
  //   to: emailAddress, //"twitter@postpiston.com",  // this WON"T send emails
  //   from: 'twitter@postpiston.com',
  //   subject: tweetSubject,
  //   text: tweetText,
  // };
  // sgMail.send(msg);
  // // attachments:arrayOfObjects÷
  // console.log("SendGrid email sent",msg)

  let transporter = nodemailer.createTransport({  // 
      host:'mail.webpromo.us',
      port: 587,
      auth: {
        user:'top10traffic@webpromo.us',
        pass:process.env.PP_PASS
      },
      tls: {rejectUnauthorized: false},
      debug:true
  })

  let mailOptions = {
      from: `"PostPiston" <${process.env.USER_EMAIL}>`, // sender email address
      to: emailAddress, //email address you want to send email to.
      subject: "", //tweetSubject, // Subject line is empty for TweetyMail
      text: tweetText //body of email.     
      // attachments: {
      //   filename:filename, 
      //   path:path
      // }
  };


  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error)
          res.send(error)
      }
      res.status(200).send(info);
  });
})

app.delete( '/api/posts/:id',
 ( req, res, next ) => {
        let {id} = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.delete_post([id])
          .then( posts => res.status(200).send( posts ) ) 
          .catch( err => {
            res.status(500).send({errorMessage: "Error deleting post from the database."});
            console.log(err)
          } );
      }
);


app.get('/api/logout', (req, res) => {
  req.session.destroy();
  res.redirect('http://localhost:3000/');
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`)
})
