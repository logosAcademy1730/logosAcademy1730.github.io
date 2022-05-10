import {actionsPaCTypes} from "./actionPaC";

const initialState = {
    postsAndComents: [],
    errorPaC: ""
}

const HryhorievPaCReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsPaCTypes.SET_POSTS_COMENTS:
            return {
                ...state,
                postsAndComents: action.payload,
                errorUsers: "",
            };
        case actionsPaCTypes.SET_ERROR:
            return {
                ...state,
                errorUsers: action.payload,
            }
        default:
            return state
    }
}

export default HryhorievPaCReducer;