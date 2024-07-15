const dotenv = require('dotenv');

const mongoose = require('mongoose');
const apiError = require('../utils/apiError');
dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Databse connected");

    } catch (error) {
        console.log('error at db connection', error);
        throw new apiError('databse not connected')
    }
}
module.exports = connectDb
