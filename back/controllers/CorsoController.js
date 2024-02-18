import Corsi from '../models/CorsoModel.js'

export const getCourses = async (req, res) => {
  try {
    const allCourses = await Corsi.find()
    res.status(200).json({ status: 'success', data: allCourses })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const createCourse = async (req, res) => {
  try {
    const create = await Corsi.create(req.body)
    res.status(200).json({ status: 'success', corso: create })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const getCourse = async (req, res) => {
  try {
    const single = await Corsi.findById(req.params.id)
    res.status(200).json({ status: 'success', data: single })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const updateCourse = async (req, res) => {
  try {
    const single = await Corsi.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ status: 'success', data: single })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const deleteCourse = async (req, res) => {
  try {
    await Corsi.findByIdAndDelete(req.params.id)
    res.status(200).json({ status: 'success', data: null })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
