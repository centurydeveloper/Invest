var kycServices = require('./kyc.services') 



exports.getAccessToken = async function (req, res, next) {
    try {
     
       return await kycServices.getAccessToken(req, res)

    } catch (e) {
       
        return res.status(400).json({ status: 400, message: e.message });
    }
}



exports.getFixedInfo = async function (req, res, next) {
    try {
        
        
       return await kycServices.getFixedInfo(req, res)

    } catch (e) {
       
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.SSWebhook = async function (req, res, next) {
    try {
        
        
       return await kycServices.SSWebhook(req, res)

    } catch (e) {
       
        return res.status(400).json({ status: 400, message: e.message });
    }
}