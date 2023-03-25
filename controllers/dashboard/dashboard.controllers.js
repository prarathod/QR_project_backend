const asyncHandler = require("express-async-handler");
const Test = require('../../models/dashboard/test.model');

const getdashoboardInfo = asyncHandler(async(req,res)=>{
    const test = await Test.find({});
    res.status(200).json(test)
});

const postdashoboardInfo = asyncHandler(async(req,res)=>{
    const {name, age} = req.body;
    const test = await Test.create({name, age});
    res.status(201).json(test)
});

module.exports = {
    getdashoboardInfo,
    postdashoboardInfo,
};