const tryCatch = require("../util/tryCatch");
const bcrypt = require("../util/bycrypt");
const auth = require("../middleware/auth");
const adminModel = require("../models/adminModel");

module.exports = {

    login: tryCatch(async (req, res) => {

        const {adminId, password} = req.body;
        const admin = await adminModel.findOne({adminId:Number(adminId)});
        if(!admin){
            return res.status(401).json({message: "Not Authorized"});   
        }
        const isMatch = await bcrypt.comparePassword(password, admin.password);
        if(!isMatch){
            return res.status(401).json({message: "Invalid credentials"});
        }
        const payload = {
            id: admin._id,
            role: "admin"
        };
        const token = auth.createToken(payload);
        return res.status(200).json({message: "Login successful", token});
    })

}