import { v2 as cloudinary } from 'cloudinary'
import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import myRestaurantRoute from './routes/MyRestaurantRoute'
import myUserRoute from './routes/MyUserRoute'

mongoose
	.connect(process.env.MONGODB_CONNECTION_STRING as string)
	.then(() => console.log('Connected to DATABASE!'))

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', async (req: Request, res: Response) => {
	res.send({ message: 'OK!' })
})

app.use('/api/my/user', myUserRoute)
app.use('/api/my/restaurant', myRestaurantRoute)

app.listen(7000, () => {
	console.log('Server running on: http://localhost:7000')
})
