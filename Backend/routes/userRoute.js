const router  = require("express").Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const userController = require("../controller/userController");


router.get('/signin',(req,res)=>{

   

    const accessToken = jwt.sign({user:"afsal",id:1},process.env.ACCESS_TOKEN_SECRET);

    res.json({message:accessToken})
})


router.post('/signup',(req,res)=>{
    res.json(req.body)
})


router.get('/1',auth,(req,res)=>{
    res.json(req.user)
})


module.exports = router;