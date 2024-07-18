const errorHandler = (err, req, res, next) => {
    
    if(err.message.includes("E11000 duplicate key error collection")) {

        const key = Object.keys(err.keyValue);
        const value = Object.values(err.keyValue);
        return res.status(409).json({message:`${key[0]} ${value[0]} already exists`});

    }
        

    return res.status(400).json({message:err.message})
}

module.exports = errorHandler