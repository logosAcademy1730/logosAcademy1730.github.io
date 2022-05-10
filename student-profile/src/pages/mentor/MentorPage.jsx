import { useEffect, useState } from "react";
import { PostsAPI, UsersAPI } from "../../api/api";
import { actionsUsers, actionsUsersTypes } from "../../redux/actionCreator/actionsUsers";
import { useDispatch, useSelector } from "react-redux";


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

const MentorPage = () => {
// const [users, setUsers] = useState([]);
// const [error, setError] = useState("");
const dispatch = useDispatch();
const users = useSelector((state) => state.usersReducer.users);
const error = useSelector((state) => state.usersReducer.errorUsers);

useEffect(()=>{
    console.log("users", users);
}, [users])


    useEffect( ()=>{
        // getPosts();
    UsersAPI.getUsers()
        .then((res) => res.status === 200 && dispatch(actionsUsers.setUsers(res.data)))
        .catch((e) => dispatch(actionsUsers.setError("Error while getting users")))
        .finally(()=> console.log("finally"))
}, [])

    return (
     <div>
         {/*<div onClick={sendPost}>POST</div>*/}
         {users?.map((user, index) => <User key={index} user={user} index={index}/>)}
         {error && <p>{error}</p>}
         {/*{error !== "" && <span>{error}</span>}*/}
     </div>
 )
};

export default MentorPage;
