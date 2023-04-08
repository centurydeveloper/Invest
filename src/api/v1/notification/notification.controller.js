var notificationService = require('./notification.services') 



exports.sendNow = async function (req, res, next) {
    try {
        await notificationService.sendNow(req,res)

    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.sendNowByPhone = async function (req, res, next) {
    try {
        await notificationService.sendNowByPhone(req,res)

    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}