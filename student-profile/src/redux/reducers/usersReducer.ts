import { actionsUsersTypes } from "../actionCreator/actionsUsers";
import {UserInterface, UserReducerActionTypes} from "../../common/types";

interface UsersInitialState {
  users?: UserInterface[];
  errorUsers: string;
}
const initialState: UsersInitialState = {
  errorUsers: "",
};

const usersReducer = (state = initialState, action: UserReducerActionTypes)=> {
  switch (action.type) {
    case actionsUsersTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
        errorUsers: "",
      };
    case actionsUsersTypes.SET_ERROR:
      return {
        ...state,
        errorUsers: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
