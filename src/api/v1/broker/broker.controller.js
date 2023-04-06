var brokerServices = require('./broker.services') 


exports.createCustomer = async function (req, res, next) {
    try {
      

        var data = await brokerServices.createCustomer(req)

    
        return res.status(200).json({ status: 200, data: data});
    } catch (e) {
    
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getPostions = async function (req, res, next) {
    try {
      

        var data = await brokerServices.getPostions(req)

    
        return res.status(200).json({ status: 200, data: data});
    } catch (e) {
    
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAccountSummary = async function (req, res, next) {
    try {
      

        var data = await brokerServices.getAccountSummary(req)

    
        return res.status(200).json({ status: 200, data: data});
    } catch (e) {
    
        return res.status(400).json({ status: 400, message: e.message });
    }
}



exports.getCashStatement = async function (req, res, next) {
    try {
      

        var data = await brokerServices.getCashStatement(req)

    
        return res.status(200).json({ status: 200, data: data});
    } catch (e) {
    
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.getHoldingStatment = async function (req, res, next) {
    try {
      

        var data = await brokerServices.getHoldingStatment(req)

    
        return res.status(200).json({ status: 200, data: data});
    } catch (e) {
    
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getOrderHistory = async function (req, res, next) {
    try {
      

        var data = await brokerServices.getOrderHistory(req)

    
        return res.status(200).json({ status: 200, data: data});
    } catch (e) {
    
        return res.status(400).json({ status: 400, message: e.message });
    }
}



exports.placeOrder = async function (req, res, next) {
    try {
      

        var data = await brokerServices.placeOrder(req)

    
        return res.status(200).json({ status: 200, data: data});
    } catch (e) {
    
        return res.status(400).json({ status: 400, message: e.message });
    }
}