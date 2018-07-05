import { Router } from 'express'
import contactRouter from './entities/contacts/router'

const router = Router()

router.use('/contacts', contactRouter)

export default router
