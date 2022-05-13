import axios from "axios";
import HryhorievEndpoints from "./HryhorievEndpoints";
import Endpoints from "../../../api/Endpoints";

const {REACT_APP_API} = process.env

const hryhorievInstance = axios.create({
    baseURL: REACT_APP_API,
    headers: {
        "Content-Type": "application/json",
    },
})

export const HryhorievPostsAndCommentsAPI = {
    getPostsAndComents(){
        return hryhorievInstance.get(HryhorievEndpoints.POSTS)
    }
}

export const HryhorievPutPosts = {
    putNewPost(put){
        return hryhorievInstance.put(HryhorievEndpoints.PUT_POSTS, put )
    }
}