import {lipinskaUsersTypes} from "../actionLipinska/actionLipinska";

const initialState = {
    users: [],
    errorUsers: "",
}

const lipinskaReducer = (state=initialState, action) => {
    switch (action.type){
        case lipinskaUsersTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
                errorUsers: "",
            };
        case lipinskaUsersTypes.SET_ERROR:
            return {
                ...state,
                errorUsers: action.payload
            }
        default:
            return state
    }

}

export default lipinskaReducer;