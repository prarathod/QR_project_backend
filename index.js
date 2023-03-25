const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const conenctDB = require('./config/dbConnection');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/v1/dashboard', require('./routes/dashboard/dashboard.routes'));

app.listen(port, ()=>{
    conenctDB();
    console.log(`Server running on port ${port}`);
})