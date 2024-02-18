import Live from '../models/LiveModel.js'

export const getLives = async (req, res) => {
  try {
    const allCourses = await Live.find()
    res.status(200).json({ status: 'success', data: allCourses })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const createLive = async (req, res) => {
  try {
    const create = await Live.create(req.body)
    res.status(200).json({ status: 'success', corso: create })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const getLive = async (req, res) => {
  try {
    const single = await Live.findById(req.params.id)
    res.status(200).json({ status: 'success', data: single })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const updateLive = async (req, res) => {
  try {
    const single = await Live.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ status: 'success', data: single })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const deleteLive = async (req, res) => {
  try {
    await Live.findByIdAndDelete(req.params.id)
    res.status(200).json({ status: 'success', data: null })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
