 const router  = require("express").Router();
 const adminController = require("../controller/adminController");
 
 router.post('/signin', adminController.login)

 
 module.exports = router