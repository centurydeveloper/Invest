var dataServices = require('./data.services') 



exports.search = async function (req, res, next) {
    try {
        
        
        
        var data = await dataServices.search(req,res)

        // Return a success response with the retrieved medical reports.
        return res.status(200).json({ status: 200, message: "Data Successfully Retrieved", data: data });
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.learning = async function (req, res, next) {
    try {
        
        
        
        var data = await dataServices.learning(req,res)

        // Return a success response with the retrieved medical reports.
        return res.status(200).json({ status: 200, message: "Data Successfully Retrieved", data: data });
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.portfolioNews = async function (req, res, next) {
    try {
        
        
        
        var data = await dataServices.portfolioNews(req,res)

        // Return a success response with the retrieved medical reports.
        return res.status(200).json({ status: 200, message: "Data Successfully Retrieved", data: data });
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.scoops = async function (req, res, next) {
    try {
        
        
        
        var data = await dataServices.scoops(req,res)

        // Return a success response with the retrieved medical reports.
        return res.status(200).json({ status: 200, message: "Data Successfully Retrieved", data: data });
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}



exports.trendingNews = async function (req, res, next) {
    try {
        
        
        
        var data = await dataServices.trendingNews(req,res)

        // Return a success response with the retrieved medical reports.
        return res.status(200).json({ status: 200, message: "Data Successfully Retrieved", data: data });
    } catch (e) {
        // Return an error response with the error message if an error occurs.
        return res.status(400).json({ status: 400, message: e.message });
    }
}