const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000
//connecting to mongodb atlas;
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser:true}
)
.then(() => {
    console.warn("Connected to Mongodb atlas");
}).catch(console.error(error));
app.listen(PORT, () => {
    console.log("Server Started at port", PORT);
})