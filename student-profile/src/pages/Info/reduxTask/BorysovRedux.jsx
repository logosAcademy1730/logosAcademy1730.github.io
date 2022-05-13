import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/reducers/borysovReducers";

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
   dispatch(getUsers())
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