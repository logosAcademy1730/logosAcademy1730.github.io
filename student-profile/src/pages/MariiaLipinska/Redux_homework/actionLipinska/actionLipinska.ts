export const lipinskaUsersTypes = {
    SET_USERS: "SET_USERS",
    SET_ERROR: "SET_ERROR"
}

export const lipinskaUsers =  {
    setUsers: (users:string) => ({type:lipinskaUsersTypes.SET_USERS, payload: users}),
    setError: (error:string) => ({type:lipinskaUsersTypes.SET_ERROR, payload: error}),
}