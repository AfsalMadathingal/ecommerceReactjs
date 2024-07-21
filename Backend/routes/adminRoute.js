 const router  = require("express").Router();
 const adminController = require("../controller/adminController");
 
 router.post('/login', adminController.login)

 
 module.exports = router