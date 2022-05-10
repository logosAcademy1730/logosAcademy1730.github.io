export const lipinskaUsersTypes = {
    SET_USERS: "SET_USERS",
    SET_ERROR: "SET_ERROR"
}

export const lipinskaUsers =  {
    setUsers: (users) => ({type:lipinskaUsersTypes.SET_USERS, payload: users}),
    setError: (error) => ({type:lipinskaUsersTypes.SET_ERROR, payload: error}),
}