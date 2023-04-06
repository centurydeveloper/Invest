const {set, connect, connection } =  require('mongoose');

// We need to define the URL
const CONNECTION_URL = process.env.CONNECTION_URL;

//Connection establishment
connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = connection;

//We enabled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log(`DB Connection established successfully`);
});

module.exports = db;
