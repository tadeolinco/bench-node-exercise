import express from 'express'
import bodyParser from 'body-parser'

import './db'
import router from './router'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', router)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`API Server listening at port: ${port}`)
})
