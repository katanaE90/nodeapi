const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const colors = require('colors')
const connectDb = require('./config/db')

//Load env vars
dotenv.config({path: './config/config.env'})

//Connect to database
connectDb()

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

const server = app.listen(
    PORT,
    console.log(`Server running in ${ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
//    Close server & exit process
    server.close(process.exit(1))
})
