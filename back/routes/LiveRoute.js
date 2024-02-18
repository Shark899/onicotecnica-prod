import express from 'express'

const router = express.Router()

import {
  getLives,
  createLive,
  getLive,
  deleteLive,
  updateLive,
} from '../controllers/LiveController.js'

router.route('/').get(getLives).post(createLive)
router.route('/:id').get(getLive).patch(updateLive).delete(deleteLive)

export default router
