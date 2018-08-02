
let allPosts = [];

module.exports = {
    getAllPosts: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_posts()
          .then( posts => res.status(200).send( posts ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
    }