const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')

//Load env vars
dotenv.config({path: './config/config.env'})

// Routes
const bootcampsRoutes = require('./routes/bootcamps')

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount roters
app.use('/api/v1/bootcamps', bootcampsRoutes)


const PORT = process.env.PORT || 3001
const ENV = process.env.NODE_ENV || 'production'
app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`));