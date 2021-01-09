/* Includes */

// import node_modules

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

// import data files

import users from './data/users.js'
import products from './data/products.js'

// import models

import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

// Import Data Base config file

import conenctDB from './config/db.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()



const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users),
          adminUser    = createdUsers[0]._id

    const sampleProducts = products.map(product => {
      return {...product, user: adminUser}
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported!'.green.inverse)

    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!'.red.inverse)

    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

process.argv[2] === '-d'
  ? destroyData()
  : importData()
