const mongoose = require('mongoose');



const versionSchema = mongoose.Schema({
    iOSVersion: {
        type: String,
    },
    androidVersion:{
        type: String,

    },
});





module.exports = mongoose.model('version',versionSchema,'version');
