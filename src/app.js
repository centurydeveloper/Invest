const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const miscMiddlewares = require('../middleware/misc');
const customerRoute = require('./api/v1/customer/customer.routes');
const kycRoute = require('./api/v1/kyc/kyc.routes');
require('dotenv').config();

const app = express();

app.use(morgan());
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(bodyParser.json());


//Customer
app.use('/api/v1/customer', customerRoute);
//KYC
app.use('/api/v1/kyc', kycRoute);

//MISC - GETAPI KEYS, GET VERISONS

// Verify Token using FirebaseAUTH Token and App Check Token

//GTN
// Get Server Token
// Refresh Server Token
// Customer Creation 
// Customer Creation Webhook for Knack
// Place Order 
// Order DETAILS
// Order List 
// Customer Account Details
// User Account Summary
// Get Postions
// Get Cash Statement - PDF
// Get holdings Statement - PDF





app.use(miscMiddlewares.notFound);
app.use(miscMiddlewares.errorHandler);



module.exports = app;