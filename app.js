const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


app.use(express.json());

app.use('/api/inventory', require('./routes/inventoryRouter.js'));


const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

connectToMongoDB();

app.use((error, req, res, next) => {
    console.error(error);
    return res.send(`Error: ${error}`);
})



app.listen(9000, () => {
    console.log('Server Listening on PORT 9000')
})