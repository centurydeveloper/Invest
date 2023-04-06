const mongoose = require('mongoose');



const apiKeysSchema = mongoose.Schema({
    knackID: {
        type: String,
    },
},{
    strict: false
});





module.exports = mongoose.model('apiKeys',apiKeysSchema,'apiKeys');
