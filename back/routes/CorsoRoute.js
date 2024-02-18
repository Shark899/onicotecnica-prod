import express from 'express'

const router = express.Router()

import {
  getCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
} from '../controllers/CorsoController.js'

router.route('/').get(getCourses).post(createCourse)
router.route('/:id').get(getCourse).patch(updateCourse).delete(deleteCourse)

export default router
