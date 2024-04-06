import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/test', async (req: Request, res: Response) => {
	res.json({ message: 'hello' })
})

app.listen(7000, () => {
	console.log('Server running on: http://localhost:7000')
})
