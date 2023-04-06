const firebaseAdmin = require("../../../utils/firebaseAdmin");
const db = firebaseAdmin.db;
const mongoDB = require('../../../utils/connection')
const apiKeysModel = require('../../../models/apiKeys')
const versionModel = require('../../../models/version')
const mongoose= require( 'mongoose');

exports.getApiKeys = async function (phone) {

    try {
      
        var data = await apiKeysModel.find({_id:new mongoose.Types.ObjectId("642ebf71135d2080c7923d00")});
           
       return data;

        
          

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in  getApiKeys')
    }
}


exports.getVersion = async function (phone) {

    try {
      
        var data = await versionModel.find({_id:new mongoose.Types.ObjectId("642ebfe1135d2080c7923d02")});
           
       return data;

        
          

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in  getVersion')
    }
}
