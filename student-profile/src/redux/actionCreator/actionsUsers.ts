import { UsersAPI } from "../../api/api";
import {MyInfo, UserInterface, UserThunkType} from "../../common/types";
import {getInfoFirebase} from "../../api/firebaseCalls";

export const actionsUsersTypes = {
  SET_USERS: "SET_USERS",
  SET_ERROR: "SET_ERROR",
  SET_MY_INFO: "SET_MY_INFO",
}

export const actionsUsers = {
  setUsers: (users: UserInterface[]) => ({
    type: actionsUsersTypes.SET_USERS,
    payload: users,
  }),
  setError: (error: string) => ({
    type: actionsUsersTypes.SET_ERROR,
    payload: error,
  }),
  setMyInfo: (info:MyInfo) => ({
    type: actionsUsersTypes.SET_MY_INFO,
    payload: info,
  })
};

export const getUsers = (id: string, token: string, userName: string): UserThunkType => async (dispatch) => {
  await UsersAPI.getUsers()
    .then(
      (res) => res.status === 200 && dispatch(actionsUsers.setUsers(res.data))
    )
    .catch((e) => dispatch(actionsUsers.setError("Error while getting users")))
    .finally(() => console.log("finally"));
};

export const getMyInfo = (): UserThunkType => async (dispatch) => {
  // dispatch(actionsUsers.setUsers(res.data))
  getInfoFirebase(dispatch);
};