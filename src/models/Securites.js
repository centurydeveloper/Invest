const mongoose = require('mongoose');


const SecuritiesSchema = mongoose.Schema({
    symbol: {
        type: String,
    },
    theme:{
        type:Array,
    },
    name:{
        type: String,
    },
    type: {
        type: String,
    },
    tag: {
        type: String,
    },
    
    marketCap: {
        type: Number,
    },
    desc:{
        type:String
    },
    price:{
        type:Number
    },
    pe:{
        type:Number
    },
    dividendYeild:{
        type:Number
    },
    volatility30Days:{
        type:Number
    },
    nav:{
        type:Number
    },
    expenseRatio:{
        type:Number
    },
    return5Y:{
        type:String
    },
    return1Y:{
        type:String
    },
    General:{
        type:Object
    },
    Technicals:{
        type:Object
    },
    ETF_Data:{
        type:Object
    },
    esg:{
        type:Number
    },
    sri:{
        type:String
    },
    carbonFootprint:{
        type:Number
    },
    payoutRatio:{
        type:Number
    },
    divGrowth:{
        type:Number
    },
    AnalystRatings:{
        type:Object
    },
    SharesStats:{
        type:Object
    },
    Holders:{
        type:Object
    },
    ESGScores:{
        type:Object
    },
    volumn:{
        type:Number
    },
    holdings:{
        type:Number
    },
    sector:{
        type:String
    },
    payOutFr:{
        type:String
    },
    assetClass:{
        type:String
    },
    priceChange:{
        type:Number
    },
    
},{ timestamps: true });


SecuritiesSchema.index({ symbol: 'text', name: 'text' }, {name: 'text search', weights: {symbol: 10, name: 4}});



module.exports = mongoose.model('Securities',SecuritiesSchema);
