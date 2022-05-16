import React, { useEffect, useState } from "react";
import { usersAPI } from "./api";
import { postsAPI } from "./api";

const User = ({user,index}) => (
    <div key = {index}>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
    </div>
)

const LipinskaAPI = () => {
    const [user,setUsers] = useState([])
    const [error,setError] = useState('')

    useEffect(()=> {

        usersAPI.getUsers()
            .then((res) =>res.status === 200 && setUsers(res.data) )
            .catch((error) => setError(error.response.data))
            .finally(() => console.log('finally'))
    },[])
    const sendPost = () => {
        postsAPI.postsUsers({
            mail:"lipa50196@i.ua",
            name:"Mariia",
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

export default LipinskaAPI