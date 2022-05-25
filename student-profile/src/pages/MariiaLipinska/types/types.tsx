import {AppStateType, PropertiesTypes} from "../../../redux/store";
import {ThunkAction} from "redux-thunk";
import {UserReducerActionTypes} from "../../../common/types";


export interface User {
    name: string;
    phone: number;
    email: any;

}
export type UserThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    UserReducerActionTypes
    >
export interface LipinskaUserType {
    email: string
    id: number
    name: string
    postId: number
}
