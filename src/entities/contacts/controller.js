import Contact from './model'

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
    return res.status(200).json(contacts)
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'No contact with provided ID.' })
    }

    return res.status(200).json(contact)
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

export const addContact = async (req, res) => {
  try {
    const contact = new Contact(req.params.body)
    return res.status(201).json(contact)
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body)
    if (!contact) {
      return res.status(404).json({ message: 'No contact with provided ID.' })
    }
    return res.status(200).json(contact)
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndRemove(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'No contact with provided ID.' })
    }

    return res.status(200).json(contact)
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}
