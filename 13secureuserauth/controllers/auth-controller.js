const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome, Home Page from auth-controller controller');
    } catch (error) {
        console.log(error);
    }
};

const about = async (req, res) => {
    try {
        res.status(200).send('Welcome, About Page from auth-controller controller');
    } catch (error) {
        console.log(error);
    }
};



const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExit = await User.findOne({ email });
        if (userExit) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password: hash_password, 
        });

        res.status(201).json({ 
            // msg: userCreated, 
            msg: "registration successfully", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString()
         });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};

module.exports = {home, about, register};