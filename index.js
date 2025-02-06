require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect = require("./db");

// routes
const routes = require("./routes");

dbConnect();

// Middleware to parse JSON
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Enable CORS for all routes
app.use(cors(corsOptions));

//routing path
app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

// route
app.use("/api", routes);


// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});