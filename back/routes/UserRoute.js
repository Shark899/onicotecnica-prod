import express from 'express'

const router = express.Router()

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getUserByEmail,
} from '../controllers/UserController.js'

router.post('/email', getUserByEmail)
router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

export default router
