const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token =  authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
    

}


const verifyAdminToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    console.log('====================================');
    console.log(req.headers);
    console.log('====================================');
    const token =  authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        if(user.role !== 'admin') return res.sendStatus(403);
        req.user = user;
        next();
    })
}

const createToken = (payload) => {

    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
    })
}



module.exports = {verifyToken, createToken , verifyAdminToken}