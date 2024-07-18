const tryCatch = require("../util/tryCatch");
const bcrypt = require("../util/bycrypt");
const userModel = require("../models/userModel");

module.exports = {

    signIn: tryCatch(async (req, res) => {

        const {mobile,password} = req.body;

        const user = await userModel.findOne({mobile});

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        const isMatch = await bcrypt.comparePassword(password, user.password);

        if(!isMatch){
            return res.status(401).json({message: "Invalid credentials"});
        }

        res.status(200).json(user);
    }),


    signup: tryCatch(async (req, res) => {

        const {mobile, password} = req.body;
        const hashedPassword = await bcrypt.hashPassword(password);
        const user = await userModel.create({mobile, password: hashedPassword});
        res.status(201).json(user);
        
    }),




}