var customerServices = require('./kyc.services') 
const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs');
const FormData = require('form-data');
require('dotenv').config();
// These parameters should be used for all requests
const SUMSUB_APP_TOKEN = process.env.SUMSUB_APP_TOKEN; 
const SUMSUB_SECRET_KEY = process.env.SUMSUB_SECRET_KEY; 
const SUMSUB_BASE_URL = process.env.SUMSUB_BASE_URL; 

var config = {};
config.baseURL= SUMSUB_BASE_URL;

axios.interceptors.request.use(createSignature, function (error) {
  return Promise.reject(error);
})

// This function creates signature for the request as described here: https://developers.sumsub.com/api-reference/#app-tokens

function createSignature(config) {
  console.log('Creating a signature for the request...');

  var ts = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac('sha256',  SUMSUB_SECRET_KEY);
  signature.update(ts + config.method.toUpperCase() + config.url);

  if (config.data instanceof FormData) {
    signature.update(config.data.getBuffer());
  } else if (config.data) {
    signature.update(config.data);
  }

  config.headers['X-App-Access-Ts'] = ts;
  config.headers['X-App-Access-Sig'] = signature.digest('hex');

  return config;
}

// https://developers.sumsub.com/api-reference/#access-tokens-for-sdks
function createAccessToken (externalUserId, levelName = 'basic-kyc-level', ttlInSecs = 600) {
  console.log("Creating an access token for initializng SDK...");

  var method = 'post';
  var url = `/resources/accessTokens?userId=${externalUserId}&ttlInSecs=${ttlInSecs}&levelName=${levelName}`;

  var headers = {
      'Accept': 'application/json',
      'X-App-Token': SUMSUB_APP_TOKEN
  };

  config.method = method;
  config.url = url;
  config.headers = headers;
  config.data = null;

  return config;
}



function fixedInfo (externalUserId) {
    console.log("Creating an access token for initializng SDK...");
  
    var method = 'get';
    var url = `/resources/applicants/-;externalUserId=${externalUserId}/one`;
  
    var headers = {
        'Accept': 'application/json',
        'X-App-Token': SUMSUB_APP_TOKEN
    };
  
    config.method = method;
    config.url = url;
    config.headers = headers;
    config.data = null;
  
    return config;
  }
  


exports.getAccessToken = async function (req, res, next) {
    try {
      
        externalUserId = "SS-" + Math.random().toString(36).substr(2, 9);
        levelName = 'basic-kyc-level';
        console.log("External UserID: ", externalUserId); 
      
        response = await axios(createAccessToken(externalUserId, levelName, 1200))
        .then(function (response) {
        //   console.log("Response:\n", response.data);
          return res.status(200).json({ status: 200, message: "Access token created", data: response.data });
        })
        .catch(function (error) {
          console.log("Error:\n", error.response.data);
          return res.status(400).json({ status: 400, message: error.toString() });
        });
      
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        console.log("Errors:\n", e);
        return res.status(400).json({ status: 400, message: e.toString() });
    }
}


exports.getFixedInfo = async function (req, res, next) {
    try {
      
        var externalUserId = req.body.externalUserId;
        levelName = 'basic-kyc-level';
        console.log("External UserID: ", externalUserId); 
      
        response = await axios(fixedInfo(externalUserId))
        .then(function (response) {
        //   console.log("Response:\n", response.data);
          return res.status(200).json({ status: 200, message: "Fixed Info Retrieved", data: response.data });
        })
        .catch(function (error) {
          console.log("Error:\n", error.response.data);
          return res.status(400).json({ status: 400, message: error.toString() });
        });
      
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        console.log("Errors:\n", e);
        return res.status(400).json({ status: 400, message: e.toString() });
    }
}



exports.SSWebhook = async function (req, res, next) {
    try {
      
        var data = req.body;
        
        console.log("data: ", data); 
      
      
         return res.status(200).json({ status: 200});
      
      
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        console.log("Errors:\n", e);
        return res.status(400).json({ status: 400, message: e.toString() });
    }
}



