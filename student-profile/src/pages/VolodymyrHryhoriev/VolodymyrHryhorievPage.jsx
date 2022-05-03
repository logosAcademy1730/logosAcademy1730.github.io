import React from "react";
import VolodymyrHryhoriev from "./VolodymyrHryhoriev";
import UserListHW from "./userlist/UserListHW";
import { Routes, Route } from "react-router-dom";
import HryhorievForm from "./form/HryhorievForm";
import {useEffect, useState} from "react";
import {HryhorievPostsAndCommentsAPI, HryhorievPutPosts} from "./apiHryhoriev/HryhorievApi";

const VolodymyrHryhorievPage = () => {

    const HryhorievPostsAndComents = ({element, index}) => (
        <div
            style={{color: "black"}}
            key={index}>
            <p>{element.name}</p>
            <p>{element.email}</p>
            <br/>
        </div>
    )


    const [postsAndComents, setpostsAndComents] = useState([]);
    const [error, setError] = useState("");

    const {REACT_APP_API} = process.env

    useEffect( ()=>{
        // getPosts();
        HryhorievPostsAndCommentsAPI.getPostsAndComents()
            .then((res) => res.status === 200 && setpostsAndComents(res.data))
            .catch((e) => setError(e.response.data))
            .finally(()=> console.log("finally"))
    }, [])
    useEffect( ()=>{
        // getPosts();
        HryhorievPutPosts.putNewPost()
            .then((res) => console.log(res))
            .catch((e) => setError(e.response.data))
            .finally(()=> console.log("finally"))
    }, [])

    return (
        <div>
    <VolodymyrHryhoriev />
            {postsAndComents?.length > 0 && postsAndComents.map((element, index) => <HryhorievPostsAndComents key={index} element={element} index={index} />)}
            <Routes>
                <Route path={"/userList"} element={<UserListHW />}/>
                <Route path={"/form"} element={<HryhorievForm />}/>
            </Routes>

</div>
    );
}

export default VolodymyrHryhorievPage;