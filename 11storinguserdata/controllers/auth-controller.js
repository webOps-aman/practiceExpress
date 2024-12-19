const User = require("../models/user-model");

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

// const register = async (req, res) => {
//     try {
//         res.status(200).send('Welcome, Register Page from auth-controller controller');
//     } catch (error) {
//         console.log(error);
//     }
// };

const register = async (req, res) => {
    try {
        console.log(req.body);
        // const data = req.body;
        const {username, email, phone, password} = req.body;
        const userExit = await User.findOne({email:email});

        if(userExit){
            return res.status(400).json({msg:"email already exists"});
        }

        const userCreated =  await User.create({username, email, phone, password})

        res.status(200).json({msg: userCreated});
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

module.exports = {home, about, register};