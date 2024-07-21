const tryCatch = require("../util/tryCatch");
const bcrypt = require("../util/bcrypt");
const userModel = require("../models/userModel");
const {createToken} = require('../middleware/auth')


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

        const payload = {
            id: user._id,
            mobile: user.mobile,
            role: "user"
        };
       
        const token = createToken(payload);

        res.status(200).json({success:true,user,token});
    }),


    signup: tryCatch(async (req, res) => {

        const {mobile, password} = req.body;
        const hashedPassword = await bcrypt.hashPassword(password);
        const user = await userModel.create({mobile, password: hashedPassword});
        res.status(201).json(user);
        
    }),




}