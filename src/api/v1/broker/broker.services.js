const fetch =  require("node-fetch");
const axios = require('axios')
const firebaseAdmin = require('../../../utils/firebaseAdmin');
require('dotenv').config();


var TOKEN = "O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjg3OTY4NjEwLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4ODAwNDYxMCwidXNlcklkIjoiU0VSVkVSMDAxIiwiaWF0IjoxNjg3OTY4NjEwfQ.DTgYDd5H4tyYujPmGZZhu12Gfq5ZSpMmGLxtcasgdMU";
exports.createCustomer = async function (res,req) {

    try {


        const { referenceNumber,externalUserId } = req.query;

    // Validate required input fields
    if (!referenceNumber || !externalUserId) {
      
      return {"status":"FAILED","data":"Missing required input(s)."}
    }

        var users = await firebaseAdmin.db.collection("Users")
        .where("externalUserIdForSS", "==", req.query.externalUserId)
        .get();
      
        // curl --location 'https://gtn-api-uat.globaltradingnetwork.com/bo/customer-account' \
        // --header 'Authorization: Bearer O0AeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYnJva2VyIiwibmJmIjoxNjgwNzgyNzUzLCJwcm92aWRlciI6Im9tcyIsImlzcyI6IkdUTiIsImluc3RDb2RlIjoiQ0VOVFVSWSIsImV4cCI6MTY4MDgxODc1MywidXNlcklkIjoiMTExMTEiLCJpYXQiOjE2ODA3ODI3NTN9.5kO0YpAP5he2-GkRnj38xzcxWshc5-rn6yyVSzJEshA' \
        // --header 'Content-Type: application/json' \
        // --data-raw '{
        //   "referenceNumber": "alamba093@gmail.com",
        //   "institutionCode": "CENTURY"
        // }'

        if(Object.keys(users.docs).length == 0){
            
            return {"status":"FAILED","data":"External User ID Not Found"}
        }
        else{
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






            return response.json().then((data) => {
                
                    //FIREBASE STEPS Updation
                firebaseAdmin.db.collection("Users").
                doc(users.docs[0].id)
                .update({
                    "brokerReferenceNumber": req.query.referenceNumber,
                    "cashAccountNumbers":data["cashAccountNumbers"],
                    "accountNumbers":data["accountNumbers"],
                    "exchangeAccountIds": data["exchangeAccountIds"],
                    "customerNumber": data["customerNumber"],

                })


                return data;
            }).catch((err) => {
                console.log(err);
                return {"status":"FAILED","data":err}
            }) 
                
                

        // return response.json();
            }

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

        const { accountNumber } = req.query;

        // Validate required input fields
        if (!accountNumber) {
          
          return {"status":"FAILED","data":"Missing required input(s)."}
        }

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
      const { accountNumber } = req.query;
  
      // Validate required input fields
      if (!accountNumber) {
        return {
          status: 'FAILED',
          data: 'Missing required input(s).',
        };
      }
  
      const GTN_BASE_URL = process.env.GTN_BASE_URL;
  
      const response = await fetch(
        GTN_BASE_URL + '/fo/account-summary?accountNumber=' + req.query.accountNumber,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + TOKEN,
          },
        }
      );
  
      return response.json();
    } catch (e) {
      console.error(e);
      throw Error('Error in getAccountSummary');
    }
  };
  
  exports.getCashStatement = async function (req) {
    try {
      const { month, year, customerNumber } = req.query;
  
      // Validate required input fields
      if (!month || !year || !customerNumber) {
        return {
          status: 'FAILED',
          data: 'Missing required input(s).',
        };
      }
  
      const GTN_BASE_URL = process.env.GTN_BASE_URL;
  
      const response = await fetch(
        GTN_BASE_URL +
          '/bo/cash-statement?month=' +
          req.query.month +
          '&year=' +
          req.query.year +
          '&customerNumber=' +
          req.query.customerNumber +
          '&contentType=pdf',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + TOKEN,
          },
        }
      );
  
      return response.json();
    } catch (e) {
      console.error(e);
      throw Error('Error in getCashStatement');
    }
  };
  
  exports.getHoldingStatment = async function (req) {
    try {
      const { month, year, customerNumber } = req.query;
  
      // Validate required input fields
      if (!month || !year || !customerNumber) {
        return {
          status: 'FAILED',
          data: 'Missing required input(s).',
        };
      }
  
      const GTN_BASE_URL = process.env.GTN_BASE_URL;
  
      const response = await fetch(
        GTN_BASE_URL +
          '/bo/holding-statement?month=' +
          req.query.month +
          '&year=' +
          req.query.year +
          '&customerNumber=' +
          req.query.customerNumber +
          '&contentType=pdf',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + TOKEN,
          },
        }
      );
  
      return response.json();
    } catch (e) {
      console.error(e);
      throw Error('Error in getHoldingStatment');
    }
  };
  
  exports.getOrderHistory = async function (req) {
    try {
      const { accountNumber, sDate, eDate, pageNo, pageWidth } = req.query;
  
      // Validate required input fields
      if (!accountNumber || !sDate || !eDate || !pageNo || !pageWidth) {
        return {
          status: 'FAILED',
          data: 'Missing required input(s).',
        };
      }
  
      const GTN_BASE_URL = process.env.GTN_BASE_URL;
  
      const response = await fetch(GTN_BASE_URL + '/fo/order/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + TOKEN,
        },
        body: JSON.stringify({
          accountNumber: req.query.accountNumber,
          sDate: req.query.sDate,
          eDate: req.query.eDate,
          pageNo: req.query.pageNo,
          pageWidth: req.query.pageWidth,
        }),
      });
  
      return response.json();
    } catch (e) {
      console.error(e);
      throw Error('Error in getOrderHistory');
    }
  };
  
  exports.placeOrder = async function (req) {
    try {
      const {
        accountNumber,
        symbol,
        exchange,
        quantity,
        orderType,
        orderSide,
        price,
        tif,
        tradingSession,
        
      } = req.body;
//   console.log(req.body)
      // Validate required input fields
      if (
        !accountNumber ||
        !symbol ||
        !exchange ||
        !quantity ||
        !orderType ||
        !orderSide ||
        !price ||
        !tif||
        !tradingSession 
      ) {
        return {
          status: 'FAILED',
          data: 'Missing required input(s).',
        };
      }
  
      const GTN_BASE_URL = process.env.GTN_BASE_URL;
  
      const response = await fetch(GTN_BASE_URL + '/fo/order/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + TOKEN,
        },
        body: JSON.stringify({
          accountNumber: req.body.accountNumber,
          symbol: req.body.symbol,
          exchange: req.body.exchange,
          quantity: req.body.quantity,
          orderType: req.body.orderType,
          
          orderSide: req.body.orderSide,
          price: req.body.price,
          tif: req.body.tif,
          tradingSession: req.body.tradingSession,
          
        }),
      });
  
      return response.json();
    } catch (e) {
      console.error(e);
      throw Error('Error in placeOrder');
    }
  };
  



