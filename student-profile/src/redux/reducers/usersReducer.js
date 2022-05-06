import { actionsUsersTypes } from "../actionCreator/actionsUsers";

const initialState = {
    users: [],
    errorUsers: "",
}

const usersReducer = (state=initialState, action) => {
    switch (action.type){
        case actionsUsersTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
                errorUsers: "",
            };
        case actionsUsersTypes.SET_ERROR:
            return {
                ...state,
                errorUsers: action.payload
            }
        default:
            return state
    }

}

export default usersReducer;