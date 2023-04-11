// Import the Express framework module.
var express = require('express');

const verifyToken = require('../../../middleware/authTokenValidator');
const verifyAppCheckToken = require('../../../middleware/appCheckValidator');

// Create a new Router object.
var router = express.Router();

var middleware = [verifyToken, verifyAppCheckToken];

var dataController = require('./data.controller');


router.get('/search',middleware,dataController.search)
// router.get('/securities', customerController.checkUser)
router.get('/news/trending',middleware, dataController.trendingNews)
router.post('/news/portfolio', dataController.portfolioNews)
router.get('/news/scoops',middleware, dataController.scoops)
router.get('/learning',middleware, dataController.learning)


// Export the router object.
module.exports = router;