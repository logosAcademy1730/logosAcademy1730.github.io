
export const actionsUsersTypes = {
    SET_USERS: "SET_USERS",
    SET_ERROR: "SET_ERROR"
}

export const actionsUsers = {
    setUsers: (users) => ({type:actionsUsersTypes.SET_USERS, payload: users}),
    setError: (error) => ({type:actionsUsersTypes.SET_ERROR, payload: error}),
}