import { Router } from 'express'
import * as controller from './controller'

const router = Router()

router
  .route('/')
  .get(controller.getAllContacts)
  .post(controller.addContact)

router
  .route('/:id')
  .get(controller.getContactById)
  .put(controller.updateContact)
  .delete(controller.deleteContact)

export default router
