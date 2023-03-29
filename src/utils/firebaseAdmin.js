const admin = require("firebase-admin");
const serviceAccount = require("../../century-invest-firebase-adminsdk-pwgp5-6ed6518401.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const firebaseAdmin = {};
firebaseAdmin.sendMulticastNotification = function(payload) {
    const message = {
        notification: {
            title: payload.title,
            body: payload.body
        },
        tokens: payload.tokens,
        data: payload.data || {}
    };
    return admin.messaging().sendMulticast(message);
};

firebaseAdmin.db = admin.firestore();


module.exports = firebaseAdmin;