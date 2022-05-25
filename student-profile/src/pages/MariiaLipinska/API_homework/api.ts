import axios from "axios";
import Endpoints from "./Endpoints";
const {REACT_APP_API} = process.env

const instance = axios.create( {
    baseURL:REACT_APP_API,
    headers: {
        "Content-Type": "application/json"
    }
})

export const usersAPI = {
    getUsers(){
        return instance.get(Endpoints.USERS)
    }
}
export const postsAPI = {
    postsUsers(post:any){
        return instance.post(Endpoints.POSTS,post)
    }
}