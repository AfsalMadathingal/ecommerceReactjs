const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db');
const userRoute =  require('./routes/userRoute')
const errorHandler = require('./middleware/errorHandler')

dotenv.config();
connectDB();


app.use(express.json());
app.use(cors());

app.use('/api/v1/user',userRoute);


app.use(errorHandler)

app.listen(3000, () => {
    console.log("Backend server is running!");
})

