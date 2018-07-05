import * as db from '../../db'

export const getAllContacts = async (req, res) => {
  try {
    const text = 'SELECT * FROM contacts'
    const { rows } = await db.query(text)
    return res.status(200).json(rows)
  } catch (err) {
    console.log(err.stack)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const getContactById = async (req, res) => {
  try {
    const { id } = req.params
    const text = 'SELECT * FROM contacts WHERE _id = $1'
    const values = [id]
    const { rows } = await db.query(text, values)
    if (!rows.length) {
      return res.status(404).json({ message: 'No contact with provided ID' })
    }
    return res.status(200).json(rows[0])
  } catch (err) {
    console.log(err.stack)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const createContact = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      address,
      email_address,
      contact_number,
    } = req.body
    const text =
      'INSERT INTO contacts VALUES(DEFAULT, $1, $2, $3, $4, $5) RETURNING *'
    const values = [
      first_name,
      last_name,
      address,
      email_address,
      contact_number,
    ]
    const { rows } = await db.query(text, values)
    return res.status(200).json(rows[0])
  } catch (err) {
    console.log(err.stack)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const updateContact = async (req, res) => {
  try {
    const { id } = req.params

    const cols = Object.keys(req.body)
    const text =
      'UPDATE contacts SET ' +
      cols.map((col, index) => `${col} = $${index + 1}`).join(', ') +
      ` WHERE _id = $${cols.length + 1} RETURNING *`

    const values = [...cols.map(col => req.body[col]), id]
    const { rows } = await db.query(text, values)
    if (!rows.length) {
      return res.status(404).json({ message: 'No contact with provided ID' })
    }

    return res.status(200).json(rows[0])
  } catch (err) {
    console.log(err.stack)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params

    const text = 'DELETE FROM contacts WHERE _id = $1 RETURNING *'
    const values = [id]

    const { rows } = await db.query(text, values)
    if (!rows.length) {
      return res.status(404).json({ message: 'No contact with provided ID' })
    }

    return res.status(200).json(rows[0])
  } catch (err) {
    console.log(err.stack)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
