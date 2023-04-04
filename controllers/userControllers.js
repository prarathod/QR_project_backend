const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registerd !")
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            message: 'User Created',
            id: user.id,
            username: user.username,
            email: user.email
        });
    }else {
        res.status(400).json({message: "User data is not valid"});
    };
    
});

// @desc Login a user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const user = await User.findOne({email});

    // compare password with hashedpassword.
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username:user.username,
                email:user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN,
        {expiresIn: '5m'}
        );
        res.status(200).json({accessToken});
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

// @dosc Current user information
// @route GET /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current User Information" });
})

module.exports = {
    registerUser,
    loginUser,
    currentUser,
};

