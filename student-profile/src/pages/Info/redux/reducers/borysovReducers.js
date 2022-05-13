import { borysovUsers, borysovUsersTypes } from "../actionBorysov/actionBorysov";
import { usersAPI } from "../../api/api";

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

export const getUsers = () => (dispatch) =>{
  usersAPI.getUsers()
    .then((response) => {
      if(response.status == 200){
        debugger
        dispatch(borysovUsers.setUsers(response.data))
      }else{
        console.log('mistake')
      }
  })
}

export default borysovReducer;