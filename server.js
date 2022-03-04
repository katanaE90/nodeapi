const express = require('express');
const dotenv = require('dotenv');

//Load env vars

dotenv.config({path: './config/config.env'})

const app = express()
const PORT = process.env.PORT || 3001
const ENV = process.env.NODE_ENV || 'production'
app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`));