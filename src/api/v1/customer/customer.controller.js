var customerServices = require('./customer.services') 


// Define an asynchronous function to retrieve all medical reports.
exports.checkUser = async function (req, res, next) {
    try {
        var phone = "+"+req.query.phone;
        
        // Call the getMedicalReports function from the MedicalReportService module and wait for the result.
        var checkUserMessage = await customerServices.checkUser(phone)

        // Return a success response with the retrieved medical reports.
        return res.status(200).json({ status: 200, message: checkUserMessage});
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}