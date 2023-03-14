const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const miscMiddlewares = require('../middleware/misc');
require('dotenv').config();

const app = express();

app.use(morgan());
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(bodyParser.json());


app.use(miscMiddlewares.notFound);
app.use(miscMiddlewares.errorHandler);

module.exports = app;