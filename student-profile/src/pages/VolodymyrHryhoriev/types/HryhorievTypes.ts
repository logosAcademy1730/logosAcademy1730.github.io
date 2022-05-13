import {PropertiesTypes} from "../../../redux/store";
import {actionsUsers} from "../../../redux/actionCreator/actionsUsers";
import {actionPaC} from "../HryhorievRedux/actionPaC";

export interface HryhorievPostsAndComentsType {
    body: string
    email: string
    id: number
    name: string
    postId: number
}

// export interface HryhorievFormInterface {
//     name: string
//     surname: string
//     age: number
// }

export type PaCReducerActionTypes = ReturnType<
    PropertiesTypes<typeof actionPaC>
    >