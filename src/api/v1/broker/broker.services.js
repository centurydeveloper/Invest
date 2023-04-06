const fetch =  require("node-fetch");
require('dotenv').config();


var TOKEN = "O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNzgyNzUzLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDgxODc1MywidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA3ODI3NTN9.5kO0YpAP5he2-GkRnj38xzcxWshc5-rn6yyVSzJEshA";
exports.createCustomer = async function (req) {

    try {
      
        // curl --location 'https://gtn-api-uat.globaltradingnetwork.com/bo/customer-account' \
        // --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNzgyNzUzLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDgxODc1MywidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA3ODI3NTN9.5kO0YpAP5he2-GkRnj38xzcxWshc5-rn6yyVSzJEshA' \
        // --header 'Content-Type: application/json' \
        // --data-raw '{
        //   "referenceNumber": "alamba093@gmail.com",
        //   "institutionCode": "CENTURY"
        // }'
        var GTN_BASE_URL = process.env.GTN_BASE_URL;
       
          const response = await fetch(GTN_BASE_URL+'/bo/customer-account', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            },
            body: JSON.stringify({
                "referenceNumber": req.query.referenceNumber,
                "institutionCode": process.env.GTN_INSTITUTION_CODE
            }), // body data type must match "Content-Type" header
          });

        return response.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in createCustomer')
    }
}



exports.getPostions = async function (req) {

    try {
      
        // curl --location 'https://gtn-api-uat.globaltradingnetwork.com/fo/positions?accountNumber=P000145389' \
        // --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNzgyNzUzLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDgxODc1MywidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA3ODI3NTN9.5kO0YpAP5he2-GkRnj38xzcxWshc5-rn6yyVSzJEshA' \
        // --header 'Content-Type: application/json'

        var GTN_BASE_URL = process.env.GTN_BASE_URL;
       
          const response = await fetch(GTN_BASE_URL+'/fo/positions?accountNumber='+req.query.accountNumber, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            }
          });

        return response.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in getPostions')
    }
}


// 


exports.getAccountSummary = async function (req) {

    try {
      
        // curl --location 'https://gtn-api-uat.globaltradingnetwork.com/fo/account-summary?accountNumber=P000145831' \
        // --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNzgyNzUzLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDgxODc1MywidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA3ODI3NTN9.5kO0YpAP5he2-GkRnj38xzcxWshc5-rn6yyVSzJEshA' \
        // --header 'Content-Type: application/json'

        var GTN_BASE_URL = process.env.GTN_BASE_URL;
       
          const response = await fetch(GTN_BASE_URL+'/fo/account-summary?accountNumber='+req.query.accountNumber, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            }
          });

        return response.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in getPostions')
    }
}




  exports.getCashStatement = async function (req) {

    try {
      
     
        // curl --request GET \
        // --url 'https://gtn-api-uat.globaltradingnetwork.com/bo/cash-statement?month=2&year=2012&customerNumber=asd&contentType=pdf' \
        // --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNjU3ODIyLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDY5MzgyMiwidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA2NTc4MjJ9.nCigKHZOe5iPURM2siPpsyxLQhW550RgJnooeb5Q9tU' \
        // --header 'Content-Type: application/json'

        var GTN_BASE_URL = process.env.GTN_BASE_URL;
       
          const response = await fetch(GTN_BASE_URL+'/bo/cash-statement?month='+req.query.month+'&year='+req.query.year+'&customerNumber='+req.query.customerNumber+'&contentType=pdf', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            }
          });

          
          
        return response.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in getCashStatement')
    }
}





exports.getHoldingStatment = async function (req) {

    try {
      
     
        // curl --request GET \
        // --url 'https://gtn-api-uat.globaltradingnetwork.com/bo/cash-statement?month=2&year=2012&customerNumber=asd&contentType=pdf' \
        // --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNjU3ODIyLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDY5MzgyMiwidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA2NTc4MjJ9.nCigKHZOe5iPURM2siPpsyxLQhW550RgJnooeb5Q9tU' \
        // --header 'Content-Type: application/json'

        var GTN_BASE_URL = process.env.GTN_BASE_URL;
       
          const response = await fetch(GTN_BASE_URL+'/bo/holding-statement?month='+req.query.month+'&year='+req.query.year+'&customerNumber='+req.query.customerNumber+'&contentType=pdf', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            }
          });

          

        return response.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in getHoldingStatment')
    }
}





exports.getOrderHistory = async function (req) {

    try {
      
     
       
// curl --request POST \
//   --url https://gtn-api-uat.globaltradingnetwork.com/fo/order/search \
//   --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNjU3ODIyLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDY5MzgyMiwidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA2NTc4MjJ9.nCigKHZOe5iPURM2siPpsyxLQhW550RgJnooeb5Q9tU' \
//   --header 'Content-Type: application/json' \
//   --data '{
//   "accountNumber": "P000128310",
//   "sDate": "2022/03/02",
//   "eDate": "2022/09/10",
//   "pageNo": "1",
//   "pageWidth": "10"
// }'
        var GTN_BASE_URL = process.env.GTN_BASE_URL;
       
          const response = await fetch(GTN_BASE_URL+'/fo/order/search', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            },
            body: JSON.stringify({
                "accountNumber": req.query.accountNumber,
                "sDate": req.query.sDate,
                "eDate": req.query.eDate,
                "pageNo": req.query.pageNo,
                "pageWidth": req.query.pageWidth
            })
          });

          

        return response.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in getOrderHistory')
    }
}



exports.placeOrder = async function (req) {

    try {
      
     
// curl --request POST \
//   --url https://gtn-api-uat.globaltradingnetwork.com/fo/order/create \
//   --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNjU3ODIyLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDY5MzgyMiwidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA2NTc4MjJ9.nCigKHZOe5iPURM2siPpsyxLQhW550RgJnooeb5Q9tU' \
//   --header 'Content-Type: application/json' \
//   --data '{
//   "accountNumber": "P000128310",
//   "symbol": "DFM",
//   "exchange": "DFM",
//   "quantity": 100,
//   "orderType": "2",
//   "orderSide": 1,
//   "price": 2,
//   "tif": 0,
//   "tradingSession": "REG",
//   "orderValue": 1,
//   "securityType": "CS"
// }'
        var GTN_BASE_URL = process.env.GTN_BASE_URL;
       
          const response = await fetch(GTN_BASE_URL+'/fo/order/create', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            },
            body: JSON.stringify(
                {
                    "accountNumber": req.body.accountNumber,
                    "symbol": req.body.symbol,
                    "exchange": req.body.exchange,
                    "quantity": req.body.quantity,
                    "orderType": req.body.orderType,
                    "orderSize": req.body.orderSize,
                    "orderSide": req.body.orderSide,
                    "price": req.body.price,
                    "tif": req.body.tif,
                    "tradingSession": req.body.tradingSession,
                    "securityType": req.body.securityType
                }
            )
          });

          

        return response.json();

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error in placeOrder')
    }
}



