const loginUser = (users, loginData) => {
  for (const user of users) {
    if (user.email === loginData.email) {
      if (user.password === loginData.password) {
        return user
      } else {
        return "Bad password"
      }
    }
  }
  return "Bad email"
}

const registerUser = (users, userData) => {
  const { email, name, password } = userData
  // const email = req.body.email
  // const name = req.body.name
  // const password = req.body.password

  if (email && name && password) {
    users.push({ email, name, password })
    console.log(users)
    return { email, name, password }
  } else {
    return null
  }
}

module.exports = { loginUser, registerUser }