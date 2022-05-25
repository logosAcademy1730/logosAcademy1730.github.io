import React, {useEffect, useState} from "react";
import {usersAPI} from "./api";
import {postsAPI} from "./api";
import {User} from "../types/types"

type Props =
{
    user:any;
    index: number;
}
const User = ({user, index}: Props) => (
    <div key={index}>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
    </div>
)

const LipinskaAPI = () => {
    // @ts-ignore
    const [user, setUsers] = useState([])
    // @ts-ignore
    const [error, setError] = useState('')

    useEffect(() => {

        usersAPI.getUsers()
            //@ts-ignore
            .then((res: any) => res.status === 200 && setUsers(res.data))
            //@ts-ignore
            .catch((error: string) => setError(error.response.data))
            .finally(() => console.log('finally'))
    }, [])
    const sendPost = () => {
        //@ts-ignore
        postsAPI.postsUsers({
            mail: "lipa50196@i.ua",
            name: "Mariia",
            userId: 1
        })
            //@ts-ignore
            .then((res: any) => console.log(res))
            //@ts-ignore
            .catch((error: string) => setError(error.response.data))
            .finally(() => console.log('finally'))
    }
    return (
        <>
            <div onClick={sendPost}>POST</div>
            <div>
                {user?.length > 0 && user.map((user: any, index: number) => <User key={index} user={user}
                                                                                  index={index}/>)}
                {error !== '' && <span>{error}</span>}
            </div>
        </>
    )
}

export default LipinskaAPI