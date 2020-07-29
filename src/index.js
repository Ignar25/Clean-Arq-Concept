import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import {
  deleteComment,
  getComments,
  notFound,
  postComment,
  patchComment
} from './controllers'
import makeCallback from './express-callback'
import productController from './controllers/productController'

dotenv.config()

const apiRoot = process.env.DM_API_ROOT
const app = express()
app.use(bodyParser.json())
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.post(`${apiRoot}/comments`, makeCallback(postComment))
app.delete(`${apiRoot}/comments/:id`, makeCallback(deleteComment))
app.delete(`${apiRoot}/comments`, makeCallback(deleteComment))
app.patch(`${apiRoot}/comments/:id`, makeCallback(patchComment))
app.patch(`${apiRoot}/comments`, makeCallback(patchComment))
app.get(`${apiRoot}/comments`, makeCallback(getComments))
app.get(`/products`, productController.listProducts)
app.use(makeCallback(notFound))

// listen for requests
app.listen(3048, () => {
  console.log('Server is listening on port 3048')
})

export default app
