const admin = require("firebase-admin");

  function verifyToken(req, res, next) {
    
    
    const authToken = req.header("auth-token");
    

    if(!authToken) {
      res.status(401).send({message:'UnAuthorized',status:401});
    }


   admin.auth().verifyIdToken(authToken).then(function(decodedToken) {
      //result will be `true` if token is valid, non-expired, and has matching claims
      if(decodedToken.uid){
        
        next();
      }   
      else{
        res.status(401).send({message:'UnAuthorized',status:401});
      }
      //result will be `false` if token is invalid, expired or fails the claims check
    }).catch(function(error) {
      res.status(401).send({message:'UnAuthorized',status:401});
    })
   
  }
  
module.exports = verifyToken;