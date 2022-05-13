import React from "react";
import VolodymyrHryhoriev from "./VolodymyrHryhoriev";
import UserListHW from "./userlist/UserListHW";
import { Routes, Route } from "react-router-dom";
import HryhorievForm from "./form/HryhorievForm";
import {useEffect} from "react";
import {HryhorievPostsAndCommentsAPI, HryhorievPutPosts} from "./apiHryhoriev/HryhorievApi";
import {useDispatch, useSelector} from "react-redux";
import {actionPaC} from "../VolodymyrHryhoriev/HryhorievRedux/actionPaC";
import { HryhorievPostsAndComentsType } from "./types/HryhorievTypes";
import {AppStateType} from "../../redux/store";

interface Props {
    element: HryhorievPostsAndComentsType,
    index: number
}

const HryhorievPostsAndComents = ({element, index} :Props) => (
    <div
        style={{color: "black"}}
        key={index}>
        <p>{element.name}</p>
        <p>{element.email}</p>
        <br/>
    </div>
)

const VolodymyrHryhorievPage = () => {



    // @ts-ignore
    const postsAndComents = useSelector((state:AppStateType) => state.HryhorievPaCReducer.postsAndComents);
    // @ts-ignore
    const error = useSelector((state:AppStateType) => state.HryhorievPaCReducer.errorPaC);
    const dispatch = useDispatch();
    const {REACT_APP_API} = process.env

    useEffect( ()=>{
        HryhorievPostsAndCommentsAPI.getPostsAndComents()
            .then((res) => res.status === 200 && dispatch(actionPaC.setPostsComents(res.data)))
            .catch(() => dispatch(actionPaC.setError("Error while getting posts and coments")))
            .finally(()=> console.log("finally"))
    }, [])
    useEffect( ()=>{
        HryhorievPutPosts.putNewPost()
            .then((res) => console.log(res))
            .catch(() => actionPaC.setError("Error while getting posts"))
            .finally(()=> console.log("finally"))
    }, [])

    return (
        <div>
    <VolodymyrHryhoriev />
            {postsAndComents?.map((element: any, index: number) => <HryhorievPostsAndComents key={index} element={element} index={index}/>)}
            {error && <p>{error}</p>}
            <Routes>
                <Route path={"/userList"} element={<UserListHW />}/>
                <Route path={"/form"} element={<HryhorievForm />}/>
            </Routes>

</div>
    );
}

export default VolodymyrHryhorievPage;