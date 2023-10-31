const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/User');
var cors = require('cors');

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT ;


const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "https://dilpreetsinghportfolio.onrender.com"
}))


app.post('/', async (req, res) => {

    const { username, email, message } = req.body;
    try {
        alert("Submitting your response wait!!!");
        const userDoc = await User.create({ username, email, message });
        res.json({ msg: "Successfully submitted" });
    }
    catch (error) {
        res.status(400).json({ msg: "Email already registered" });
    }
});
app.get('/dashboard', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ message: "Successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving data' });
    }
})
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