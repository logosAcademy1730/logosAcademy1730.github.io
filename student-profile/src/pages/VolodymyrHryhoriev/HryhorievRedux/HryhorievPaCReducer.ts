import {actionsPaCTypes} from "./actionPaC";
import {HryhorievPostsAndComentsType, PaCReducerActionTypes} from "../types/HryhorievTypes";

interface PaCInitialState {
    postsAndComents?: HryhorievPostsAndComentsType[];
    errorPaC: string;
}

const initialState: PaCInitialState = {
    errorPaC: "",
};

const HryhorievPaCReducer = (state = initialState, action: PaCReducerActionTypes) => {
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