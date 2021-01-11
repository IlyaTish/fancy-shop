/* Includes */

// import node_modules

import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

// import mongoDB connection config

import connectDB from './config/db.js'

// import routes

import productRoutes from './routes/productRoutes.js'

// import middleware functions

import { notFound, errorHandler } from './middleware/errorMiddleware.js'




const PORT = process.env.PORT || 5000

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})


// Routes

app.use('/api/products', productRoutes)


// Error middleware functions

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
