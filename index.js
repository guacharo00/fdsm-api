require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConecction } = require('./database/config');

// make express server
const app = express();

// Database Connection
dbConecction();

// config cors
app.use(cors());

// Routes
app.get('/', (req, res) => {

    res.status(402).json({
        ok: true,
        msg: 'Peticion realizada correctamente'
    });

});

app.listen(3000, () => {
    console.log('Server running on port: 3000');
});