import mongoose from 'mongoose'

const repliesSchema = new mongoose.Schema()

export default mongoose.model('Replies', repliesSchema)
