const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const dotenv = require('dotenv').config();
const connect = require('./config/dbConnection');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

connect().then(()=> {
    app.listen(PORT, ()=> {
        console.log(`server running on Port ${PORT}`);
    })
});
