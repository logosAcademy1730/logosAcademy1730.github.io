import {borysovUsersTypes} from "../actionBorysov/actionBorysov";

const initialState = {
  users: [],
  errorUsers: "",
}

const borysovReducer = (state=initialState, action) => {
  switch (action.type){
    case borysovUsersTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
        errorUsers: "",
      };
    case borysovUsersTypes.SET_ERROR:
      return {
        ...state,
        errorUsers: action.payload
      }
    default:
      return state
  }

}

export default borysovReducer;