import cloudinary from 'cloudinary'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Restaurant from '../models/restaurant'

const getMyRestaurant = async (req: Request, res: Response) => {
	try {
		const restaurant = await Restaurant.findOne({ user: req.userId })
		if (!restaurant)
			return res.status(404).json({ message: 'Restaurant not found' })

		res.json(restaurant)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error fetching restaurant' })
	}
}

const createMyRestaurant = async (req: Request, res: Response) => {
	try {
		const existingRestaurant = await Restaurant.findOne({ user: req.userId })

		if (existingRestaurant)
			return res.status(409).json({ message: 'User already have a restaurant' })

		const image = req.file as Express.Multer.File
		const base64Image = Buffer.from(image.buffer).toString('base64')
		const dataURI = `data:${image.mimetype};base64,${base64Image}`

		const uploadResponse = await cloudinary.v2.uploader.upload(dataURI)

		const restaurant = new Restaurant(req.body)

		restaurant.imageUrl = uploadResponse.url
		restaurant.user = new mongoose.Types.ObjectId(req.userId)
		restaurant.lastUpdated = new Date()

		await restaurant.save()

		res.status(200).send(restaurant)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Something went wrong' })
	}
}

export default { getMyRestaurant, createMyRestaurant }
