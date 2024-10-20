const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/Message');
var cors = require('cors');
const { MessageCreate, dashboardAccess } = require('./controllers/MessageController');

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors())


app.post('/', MessageCreate);
app.get('/dashboard', dashboardAccess)
const start = async () => {
    try {
        await mongoose.connect(mongoURI).then(response => {
            console.log('Server connection successful');
        }).catch(err => {
            console.error("Error connecting to the database");
        });
        app.listen(port, () => {
            console.log("server is running..")
        })
    } catch (error) {
        console.error("Error connecting to the database");
    }
}
start();