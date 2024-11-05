import express from 'express'
import { addToCart,getUserCart,updateToCart } from '../controllers/cartController.js'

const cartRouter = express.Router()

cartRouter.post('/get',getUserCart)
cartRouter.post('/add',addToCart)
cartRouter.post('/update',updateToCart)

export default cartRouter