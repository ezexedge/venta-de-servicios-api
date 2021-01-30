import express from 'express'
import { showMessage } from '../controllers/auth'

const router = express.Router()


router.get('/',  showMessage )


module.exports = router