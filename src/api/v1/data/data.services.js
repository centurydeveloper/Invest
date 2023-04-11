const firebaseAdmin = require("../../../utils/firebaseAdmin");
const Securities = require('../../../models/Securites');
const fetch =  require("node-fetch");
const db = firebaseAdmin.db;

exports.search = async function (req,res) {

    try {
      
        var limit=parseInt(req.query.limit);

        var offset=parseInt(req.query.offset);


    const securities = await Securities.find({ $text : { $search : req.query.query }, }, 
    { score : { $meta: "textScore" } })
    .select({symbol:1,name:1,tag:1,type:1,price:1,desc:1})
    .sort({ score : { $meta : 'textScore' } },)
    .skip(offset).limit(limit);


    return securities;

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error while  search')
    }
}


exports.learning = async function (req,res) {

    try {


    const learning =  await fetch('https://api.knack.com/v1/objects/object_3/records?page=1&rows_per_page=1000', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'X-Knack-Application-Id': process.env.knackID,
            'X-Knack-REST-API-Key': process.env.knackAPIKey,
        }// body data type must match "Content-Type" header
      });


    return learning.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error while  learning')
    }
}

exports.portfolioNews = async function (req,res) {

    try {

    var tickers = req.body.tickers;

    var newsData=[];

    // for(var i=0;i<tickers.length;i++){
    
    //  var URL = "https://cloud.iexapis.com/stable/time-series/news/"+tickers[i]+"?token="+process.env.IEX+"&range=6m&limit=5";
    //  console.log(URL);
    // const data =  await fetch(URL, {
    //     method: "GET", // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }// body data type must match "Content-Type" header
    //   });

    //    newsData.push(data.text());
      
    // }


    return newsData;

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error while  learning')
    }
}



exports.trendingNews = async function (req,res) {

    try {


    const learning =  await fetch('https://finnhub.io/api/v1/news?category=general&token='+process.env.finhub, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        }// body data type must match "Content-Type" header
      });


    return learning.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error while  learning')
    }
}



exports.scoops = async function (req,res) {

    try {


    const learning =  await fetch('https://securities.pasiv.io/securities/scoops', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        }// body data type must match "Content-Type" header
      });


    return learning.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error while  learning')
    }
}


