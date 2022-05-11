import { useEffect, useState } from "react";
import { PostsAPI, UsersAPI } from "../../api/api";
import {
  actionsUsers,
  actionsUsersTypes,
  getUsers,
} from "../../redux/actionCreator/actionsUsers";
import { useDispatch, useSelector } from "react-redux";
import { UserInterface } from "../../common/types";
import {AppStateType} from "../../redux/store";

interface Props {
  user: UserInterface
  index: number,
  getUserName: (s: string)=> void,
}
const User = ({ user, index, getUserName }: Props) => (
  <div
    style={{ color: "black" }}
    key={index}
    onClick={()=>getUserName(user.name)}

  >
    <p>{user.name}</p>
    <p>{user.phone}</p>
    <p>{user.email}</p>
    <p>{user.address.geo.lat}</p>
    <br />
    <br />
  </div>
);

const MentorPage = () => {
  // const [name, setName] = useState<string | number | boolean>();
  const dispatch = useDispatch();
  //@ts-ignore
  const users = useSelector((state:AppStateType) => state.usersReducer.users);
  //@ts-ignore
  const error = useSelector((state:AppStateType) => state.usersReducer.errorUsers);

  // @ts-ignore
    const getUsersThunk = (id: string, token: string, userName: string) => dispatch(getUsers(id, token, userName));

  useEffect(() => {
    getUsersThunk("","","");
  }, []);

  const getUserName = (name: string) => {
    console.log(name)
  }
  return (
    <div>
      {/*<div onClick={sendPost}>POST</div>*/}
      {users?.map((user: any, index:number) => (
        <User key={index} user={user} index={index} getUserName={getUserName}/>
      ))}
      {error && <p>{error}</p>}
      {/*{error !== "" && <span>{error}</span>}*/}
    </div>
  );
};

export default MentorPage;
