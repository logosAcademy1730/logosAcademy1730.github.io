import { useEffect, useState } from "react";
import { PostsAPI, UsersAPI } from "../../api/api";


const User = ({user, index, deleteUser}) =>(
    <div
        style={{color: "black"}}
        key={index}
        onClick={()=>deleteUser(index)}>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
        <br/>
        <br/>
    </div>
)


const MentorPage = () => {
const [users, setUsers] = useState([]);
const [error, setError] = useState("");


const deleteUser = (index) => {
    setUsers(users.filter((item, i) => i!== index && item))
}

const getPosts = async () => {
    try{
        const response = await UsersAPI.getUsers()
        setUsers(response.data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log("finally")
    }
}

useEffect(()=>{
    console.log(users)
},[users])

    useEffect( ()=>{
        // getPosts();
    UsersAPI.getUsers()
        .then((res) => res.status === 200 && setUsers(res.data))
        .catch((e) => setError(e.response.data))
        .finally(()=> console.log("finally"))


}, [])

    const sendPost = () => {
        console.log("click")
    const newUser = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    };
        setUsers([ newUser, ...users]);

        // PostsAPI.postNewPost({
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        // })
        //     .then((res) => console.log(res))
        //     .catch((e) => console.log(e))
        //     .finally(()=> console.log("finally"))
    }


    return (
     <div>
         <div onClick={sendPost}>POST</div>
         {users?.length > 0 && users.map((user, index) => <User key={index} user={user} index={index} deleteUser={deleteUser}/>)}
         {/*{error !== "" && <span>{error}</span>}*/}
     </div>
 )
};

export default MentorPage;
