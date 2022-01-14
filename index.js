const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

// express app
const app = express();
// allows you to separate secrets from your source code
dotenv.config();

// connect to mongodb  
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.log(err)
    }
);

// routes
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute); 
app.use("/api/carts", cartRoute); 
app.use("/api/orders", orderRoute); 
app.use("/api/checkout", stripeRoute); 

// listen for requests
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
})