import React from "react";
import VolodymyrHryhoriev from "./VolodymyrHryhoriev";
import UserListHW from "./userlist/UserListHW";
import { Routes, Route } from "react-router-dom";
import HryhorievForm from "./form/HryhorievForm";
import {useEffect, useState} from "react";
import {HryhorievPostsAndCommentsAPI, HryhorievPutPosts} from "./apiHryhoriev/HryhorievApi";
import {useDispatch, useSelector} from "react-redux";
import {actionsPaCTypes, actionPaC} from "./HryhorievRedux/actionPaC.js";

const HryhorievPostsAndComents = ({element, index}) => (
    <div
        style={{color: "black"}}
        key={index}>
        <p>{element.name}</p>
        <p>{element.email}</p>
        <br/>
    </div>
)

const VolodymyrHryhorievPage = () => {



    const postsAndComents = useSelector((state) => state.HryhorievPaCReducer.postsAndComents);
    const error = useSelector((state) => state.HryhorievPaCReducer.errorPaC);
    const dispatch = useDispatch();
    const {REACT_APP_API} = process.env

    useEffect( ()=>{
        // getPosts();
        HryhorievPostsAndCommentsAPI.getPostsAndComents()
            .then((res) => res.status === 200 && dispatch(actionPaC.setPostsComents(res.data)))
            .catch((e) => dispatch(actionPaC.setError("Error while getting posts and coments")))
            .finally(()=> console.log("finally"))
    }, [])
    useEffect( ()=>{
        // getPosts();
        HryhorievPutPosts.putNewPost()
            .then((res) => console.log(res))
            .catch((e) => actionPaC.setError("Error while getting posts"))
            .finally(()=> console.log("finally"))
    }, [])

    return (
        <div>
    <VolodymyrHryhoriev />
            {console.log(postsAndComents)}
            {postsAndComents?.map((element, index) => <HryhorievPostsAndComents key={index} element={element} index={index}/>)}
            {error && <p>{error}</p>}
            <Routes>
                <Route path={"/userList"} element={<UserListHW />}/>
                <Route path={"/form"} element={<HryhorievForm />}/>
            </Routes>

</div>
    );
}

export default VolodymyrHryhorievPage;