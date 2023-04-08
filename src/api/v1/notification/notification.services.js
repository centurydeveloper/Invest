const firebaseAdmin = require("../../../utils/firebaseAdmin");
const db = firebaseAdmin.db;

exports.sendNow = async function (req,res) {

    try {

        var tokens = [req.body.token];
        const payload = {
            tokens,
            title: req.body.title,
            body: req.body.body,
            data: req.body.data || {}
          };
  
          firebaseAdmin.sendMulticastNotification(payload);
  
      res.status(200).json({
        message: "Notification sent successfully",
        status: 200,
        success: true,
      });

    } catch (e) {
      res.status(400).json({ message: e.message, success: false });
    }
}


exports.sendNowByPhone = async function (req,res) {

    try {
        const users = await firebaseAdmin.db
        .collection("Users").where('phone', '=', req.body.phone)
        .get();
    
    
       
             
        var tokens = [pendingApplicationUser.docs[0].data()['fcmToken']];

        const payload = {
          tokens,
          title: req.body.title,
              body: req.body.body,
              data: req.body.data || {}
        };
    
        firebaseAdmin.sendMulticastNotification(payload);
    
        res.status(200).json({
        message: "Notification sent successfully",
        status: 200,
        success: true,
      });
        
    
    
    
     
    
      } catch (e) {
        res.status(400).json({ message: e.message, success: false });
      }
}