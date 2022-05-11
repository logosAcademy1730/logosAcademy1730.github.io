import { useEffect, useState } from "react";
import { PostsAPI, UsersAPI } from "../../api/api";
import {
  actionsUsers,
  actionsUsersTypes,
  getUsers,
} from "../../redux/actionCreator/actionsUsers";
import { useDispatch, useSelector } from "react-redux";

const User = ({ user, index }) => (
  <div style={{ color: "black" }} key={index}>
    <p>{user.name}</p>
    <p>{user.phone}</p>
    <p>{user.email}</p>
    <br />
    <br />
  </div>
);

const MentorPage = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const users = useSelector((state) => state.usersReducer.users);
  // @ts-ignore
  const error = useSelector((state) => state.usersReducer.errorUsers);
  // @ts-ignore
    const getUsersThunk = () => dispatch(getUsers());
  useEffect(() => {
    console.log(users);
  });
  useEffect(() => {
    getUsersThunk();
  }, []);

  return (
    <div>
      {/*<div onClick={sendPost}>POST</div>*/}
      {users?.map((user: any, index:number) => (
        <User key={index} user={user} index={index} />
      ))}
      {error && <p>{error}</p>}
      {/*{error !== "" && <span>{error}</span>}*/}
    </div>
  );
};

export default MentorPage;
