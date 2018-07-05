import db from '../../db'
import { Schema } from 'mongoose'

const contactSchema = new Schema({
  first_name: String,
  last_name: String,
  address: String,
  email_address: String,
  contact_number: String,
})

const Contact = db.model('Contact', contactSchema)

export default Contact
