const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const miscMiddlewares = require('../src/middleware/misc');
const customerRoute = require('./api/v1/customer/customer.routes');
const kycRoute = require('./api/v1/kyc/kyc.routes');
const miscRoute = require('./api/v1/misc/misc.routes');
const brokerRoute = require('./api/v1/broker/broker.routes');
const verifyToken = require('../src/middleware/authTokenValidator');
const verifyAppCheckToken = require('../src/middleware/appCheckValidator');

// Database Connection
require('../src/utils/connection');
require('dotenv').config();

const app = express();

app.use(morgan());
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(bodyParser.json());

// ## PUBLIC ROUTES ##
// Verify Token using App Check Token
// app.use(verifyAppCheckToken);

//Customer
app.use('/api/v1/customer', customerRoute);


// ## PROTECTED ROUTES ##
// // Verify Token using FirebaseAUTH Token
// app.use(verifyToken);
//KYC
app.use('/api/v1/kyc', kycRoute);
//MISC
app.use('/api/v1/misc', miscRoute);
//GTN
app.use('/api/v1/broker', brokerRoute);

//BETTER WAY FOR AUTH TOKEN MANAGEMENT
// Get Server Token
// Refresh Server Token





app.use(miscMiddlewares.notFound);
app.use(miscMiddlewares.errorHandler);



module.exports = app;