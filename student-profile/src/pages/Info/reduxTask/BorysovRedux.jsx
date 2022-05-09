import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersAPI } from "../api/api";
import { borysovUsers } from "../redux/actionBorysov/actionBorysov";
import { actionsUsers } from "../../../redux/actionCreator/actionsUsers";

const User = ({user, index}) =>(
  <div
    style={{color: "black"}}
    key={index}
  >
    <p>{user.name}</p>
    <p>{user.phone}</p>
    <p>{user.email}</p>
    <br/>
    <br/>
  </div>
)

const BorysovRedux = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.borysovReducer.users)
  const error = useSelector((state) => state.borysovReducer.errorUsers)

  useEffect(() => {
    usersAPI.getUsers()
      .then((res) => res.status === 200 && dispatch(borysovUsers.setUsers(res.data)))
      .catch((e) => dispatch(actionsUsers.setError("Error while getting users")))
      .finally(() => console.log("finally"))
  }, [])

  return (
    <div>
      {/*<div onClick={sendPost}>POST</div>*/}
      {users?.map((user, index) => <User key={index} user={user} index={index} />)}
      {error && <p>{error}</p>}
      {/*{error !== "" && <span>{error}</span>}*/}
    </div>
  )
}
export default BorysovRedux