const mongoose = require('mongoose');
require('dotenv').config();


const dbConecction = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('Database online');

    } catch (error) {
        console.log(error)
        throw new Error('Error starting DB connection, see logs');
    }

}

module.exports = {
    dbConecction
}