var miscServices = require('./misc.services') 


exports.getApiKeys = async function (req, res, next) {
    try {

        var keys = await miscServices.getApiKeys()

        
        return res.status(200).json({ status: 200, data: keys[0],message:"API Keys fetched successfully" });

    } catch (e) {

        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getVersion = async function (req, res, next) {
    try {

        var keys = await miscServices.getVersion()

        
        return res.status(200).json({ status: 200, data: keys[0],message:"Version info fetched successfully" });

    } catch (e) {

        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}