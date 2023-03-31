const firebaseAdmin = require("../../../utils/firebaseAdmin");
const db = firebaseAdmin.db;

exports.checkUser = async function (phone) {

    try {
      
const allUsers = await db.collection("Users")
.where('phone','==',phone)
.get();


if(Object.keys(allUsers.docs).length > 0)
{
    return "Found";
}
else{ 
    return "NotFound";
}

    } catch (e) {
        // Log any errors that occur during execution.
        console.error(e)

        // Throw a new error with a custom message if any errors occur.
        throw Error('Error while getting checkUser')
    }
}
