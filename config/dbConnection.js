const mongoose = require('mongoose');
const CONNECTION_STRING = 'mongodb+srv://prajwalnrathod:Law011rp%40+@contact-mamangemnt-app.cvtrmjj.mongodb.net/contact-mamangemnt-app?retryWrites=true&w=majority'
const connectDB = async() => {
    try{
        const connect = await mongoose.connect(CONNECTION_STRING);
        console.log('Database connected:- ',
        connect.connection.host,
        connect.connection.name)
    }catch(err){
        console.log('error while connecting:- ', err);
        process.exit(1);
    };
} 

module.exports = connectDB;