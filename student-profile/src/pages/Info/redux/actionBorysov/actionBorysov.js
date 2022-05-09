export const borysovUsersTypes = {
  SET_USERS: "SET_USERS",
  SET_ERROR: "SET_ERROR"
}

export const borysovUsers = {
  setUsers: (users) => ({type:borysovUsersTypes.SET_USERS, payload: users}),
  setError: (error) => ({type:borysovUsersTypes.SET_ERROR, payload: error}),
}