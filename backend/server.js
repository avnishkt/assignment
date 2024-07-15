const express = require("express");
const bodyParser = require('body-parser');
const connectDb = require("./config/db");
// const seed = require("./seeder/seed");
const app = express();
const port = process.env.PORT || 8080;
const dishRoute=require('./routes/dishesh')


const serverEngine = () => {
    connectDb();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',dishRoute)
    app.get('/', (req, res) => {
        
        res.json({ mesg: "This server is for assignment" });
    });
    // app.get('/get',getPending);

    app.listen(port, async () => {
        console.log("The engine started successfully");
    });
}



// seed();
serverEngine();
