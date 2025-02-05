const mongoose = require("mongoose");
const dbString = process.env.MONGODB_URI;

module.exports = async () => {
    try {
        await mongoose.connect(dbString);
        console.log(`DB Connection Success`);
    }
    catch (err) {
        console.log({ error: err })
    }
}