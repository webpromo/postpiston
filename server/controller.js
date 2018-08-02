
let allPosts = [];
// not used, imported instead into server.js
module.exports = {
    getAllPosts: ( req, res, next ) => {
        console.log("session ",req.session.user)
        const dbInstance = req.app.get('db');
        dbInstance.get_posts(req.session.id)
          .then( posts => res.status(200).send( posts ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
    }