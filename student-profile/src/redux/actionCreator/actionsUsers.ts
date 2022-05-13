import { UsersAPI } from "../../api/api";
import { UserInterface, UserThunkType } from "../../common/types";

export const actionsUsersTypes = {
  SET_USERS: "SET_USERS",
  SET_ERROR: "SET_ERROR",
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
};

export const getUsers = (id: string, token: string, userName: string): UserThunkType => async (dispatch) => {
  await UsersAPI.getUsers()
    .then(
      (res) => res.status === 200 && dispatch(actionsUsers.setUsers(res.data))
    )
    .catch((e) => dispatch(actionsUsers.setError("Error while getting users")))
    .finally(() => console.log("finally"));
};
