const tryCatch = require("../util/tryCatch");
module.exports = {
    signup: tryCatch(async (req, res) => {
       
        res.status(201).json(user);
    }),
}