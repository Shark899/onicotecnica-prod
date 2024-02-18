import User from '../models/UserModel.js'

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.status(200).json({ status: 'success', data: allUsers })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const getUser = async (req, res) => {
  try {
    res.status(200).json({ status: 'success', data: 'GetUser' })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body
    const query = User.where({ email })
    const dedicated = await query.findOne()
    res.status(200).json({ status: 'success', data: dedicated })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const createUser = async (req, res) => {
  try {
    const create = await User.create(req.body)
    res.status(200).json({ status: 'success', data: create })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ status: 'success', data: updated })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
export const deleteUser = async (req, res) => {
  try {
    res.status(200).json({ status: 'success', data: 'deleteUser' })
  } catch (err) {
    res.status(404).json({ status: 'failed', msg: err.message })
  }
}
