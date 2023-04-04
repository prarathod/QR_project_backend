const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModels');

// @desc Get All contacts.
// @route GET /api/contacts
// @access public
const getAllContacts = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
});

// @desc Get Signle contact.
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);

    res.status(200).json(contact);
});

// @desc Create contact.
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async(req,res)=>{
    const {name, email, phone} = req.body;
    if ( !name || !email || !phone) {
        res.status(400);
        throw new Error({message:'All fieds required'});
    }
    const contact = await Contact.create({name, email, phone,});
    res.status(201).json(`new contact created:-`. contact);
});

// @desc Update contact.
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findByIdAndUpdate(req.params.id,
        req.body, {new:true});
    res.status(201).json(contact);
});

// @desc Delete contacts.
// @route DELETE /api/contact/:id
// @access public
const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(400);
        throw new Error('Contact Not Found');
    }
    const deleteContact = await Contact.findByIdAndDelete(req.params.id);
    req.status(200).json({message:'contact deleted..'});
});

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
}