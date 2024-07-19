const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db');
const userRoute =  require('./routes/userRoute')
const productsRoute = require('./routes/prouductsRoute')
const adminRoute = require('./routes/adminRoute')
const errorHandler = require('./middleware/errorHandler')
const path = require('path');

dotenv.config();
connectDB();


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/v1/user',userRoute);
app.use('/api/v1/admin',adminRoute);
app.use('/api/v1/products',productsRoute);


app.use(errorHandler)

app.listen(3000, () => {
    console.log("Backend server is running!");
})

