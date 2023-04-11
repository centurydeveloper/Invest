const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const miscMiddlewares = require('../src/middleware/misc');
const customerRoute = require('./api/v1/customer/customer.routes');
const notificationRoute = require('./api/v1/notification/notification.routes');
const kycRoute = require('./api/v1/kyc/kyc.routes');
const miscRoute = require('./api/v1/misc/misc.routes');
const brokerRoute = require('./api/v1/broker/broker.routes');
const dataRoute = require('./api/v1/data/data.routes');


// Database Connection
require('../src/utils/connection');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '20kb' })); 
app.use(morgan());
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(bodyParser.json());


//Notification
app.use('/api/v1/notification', notificationRoute);
//Customer
app.use('/api/v1/customer', customerRoute);
//KYC
app.use('/api/v1/kyc', kycRoute);
//MISC
app.use('/api/v1/misc', miscRoute);
//GTN
app.use('/api/v1/broker', brokerRoute);
//Data
app.use('/api/v1/data', dataRoute);

//BETTER WAY FOR AUTH TOKEN MANAGEMENT
// Get Server Token
// Refresh Server Token





app.use(miscMiddlewares.notFound);
app.use(miscMiddlewares.errorHandler);



module.exports = app;