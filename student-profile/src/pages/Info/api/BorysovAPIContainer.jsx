import React, { useEffect, useState } from "react";
import { usersAPI } from "./api";
import { PostsAPI } from "../../../api/api";
const User = ({user,index}) => (
    <div key = {index}>
      <p>{user.name} asda</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
    </div>
)

const BorysovAPIContainer = () => {
  const [user,setUsers] = useState([])
  const [error,setError] = useState('')

  useEffect(()=> {

    usersAPI.getUsers()
        .then((res) =>res.status === 200 && setUsers(res.data) )
        .catch((error) => setError(error.response.data))
        .finally(() => console.log('finally'))
  },[])
  const sendPost = () => {
    PostsAPI.postNewPost({
      mail:"true",
      body:"bar",
      userId:1
    })
      .then((res) =>console.log(res))
      .catch((error) => setError(error.response.data))
      .finally(() => console.log('finally'))
  }
  return(
    <>
       <div onClick={sendPost}>POST</div>
       <div>
      {user?.length > 0 && user.map((user,index) => <User key={index} user = {user} index = {index}/>)}
      {error !== '' && <span>{error}</span>}
      </div>
    </>
  )
}

export default BorysovAPIContainer