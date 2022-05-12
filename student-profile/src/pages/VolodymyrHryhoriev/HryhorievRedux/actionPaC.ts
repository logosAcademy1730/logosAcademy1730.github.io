import {HryhorievPostsAndComentsType} from "../types/HryhorievTypes";

export const actionsPaCTypes = {
    SET_POSTS_COMENTS: "SET_POSTS_COMENTS",
     SET_ERROR: "SET_ERROR"
 }

 export const actionPaC = {
    setPostsComents: (postComents: HryhorievPostsAndComentsType[]) => ({type:actionsPaCTypes.SET_POSTS_COMENTS, payload: postComents}),
     setError: (error: string) => ({type:actionsPaCTypes.SET_ERROR, payload: error}),
 }