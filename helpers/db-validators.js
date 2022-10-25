const Role = require('../models/role')
const User = require('../models/user')

const isValidRole = async (role = '') => {
  const existsRole = await Role.findOne({ role })
  if (!existsRole) {
    throw new Error(`El rol ${role} no está registrado en la BD`)
  }
}

const emailExists = async (email = '') => {
  const user = await User.findOne({ email })
  if (user) {
    throw new Error(`Ese correo ya está registrado`)
  }
}

const userByIdExists = async(id='') => {
  const user = await User.findById(id)
  if (!user){
    throw new Error(`Usuario con id ${id} no existe`)
  } 
}

module.exports = {
  isValidRole,
  emailExists,
  userByIdExists,
}
