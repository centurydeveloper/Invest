const admin = require("firebase-admin");

  function verifyToken(req, res, next) {
    
    next();
  //   const appCheckToken = req.header("X-AppCheck-token");
    

  //   if(!appCheckToken) {
  //     res.status(401).send({message:'UnAuthorized',status:401});
  //   }


  //  admin.appCheck().verifyToken(appCheckToken)
  //  .then(function(result) {
    
  //     //result will be `true` if token is valid, non-expired, and has matching claims
  //     if(result){
        
  //       next();
  //     }   
  //     else{
  //       res.status(401).send({message:'UnAuthorized',status:401});
  //     }
  //     //result will be `false` if token is invalid, expired or fails the claims check
  //   }).catch(function(error) {
  //     res.status(401).send({message:'UnAuthorized',status:401});
  //   })
   
  }
  
module.exports = verifyToken;