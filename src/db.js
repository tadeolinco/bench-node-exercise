import mongoose from 'mongoose'

const DATABASE = 'sample'

const db = mongoose.createConnection(
  `mongodb://localhost:27017/${DATABASE}`,
  { useNewUrlParser: true }, // due to deprecationg warning
  err => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Successfully connected to MongoDB: ${DATABASE}`)
    }
  }
)

export default db
