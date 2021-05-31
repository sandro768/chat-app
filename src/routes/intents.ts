import express from 'express'
import { getReplies } from '../controllers/intents'

const router = express.Router()

router.post('', getReplies)

export default router
