import { Request, Response, NextFunction } from 'express'
import Replies from '../models/replies'

const getReplies = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.message)
  Replies.findOne()
    .or([
      { 'trainingData.messages.text': req.body.message },
      { 'trainingData.expressions.text': req.body.message },
    ])
    // .select({ reply: 1, _id: 0 })
    .then((reply) => {
      console.log(reply)
      res.status(200).json(reply)
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

export { getReplies }
