const router  = require("express").Router();
const userController = require("../controller/userController");



router.post('/signin', userController.signIn)
router.post('/signup',userController.signup)



module.exports = router;