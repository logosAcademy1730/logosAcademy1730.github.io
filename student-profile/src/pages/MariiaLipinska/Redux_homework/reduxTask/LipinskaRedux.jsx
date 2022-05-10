import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersAPI } from "../../../../api/api";
import { lipinskaUsers } from "../../Redux_homework/actionLipinska/actionLipinska";
import { actionsUsers } from "../../../../redux/actionCreator/actionsUsers";

const User = ({user, index}) =>(
    <div
        style={{color: "black"}}
        key={index}
    >
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
        <br/>
        <br/>
    </div>
)

const LipinskaRedux = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.lipinskaReducer.users)
    const error = useSelector((state) => state.lipinskaReducer.errorUsers)

    useEffect(() => {
        usersAPI.getUsers()
            .then((res) => res.status === 200 && dispatch(lipinskaUsers.setUsers(res.data)))
            .catch((e) => dispatch(actionsUsers.setError("Error while getting users")))
            .finally(() => console.log("finally"))
    }, [])

    return (
        <div>
            {/*<div onClick={sendPost}>POST</div>*/}
            {users?.map((user, index) => <User key={index} user={user} index={index} />)}
            {error && <p>{error}</p>}
            {/*{error !== "" && <span>{error}</span>}*/}
        </div>
    )
}
export default LipinskaRedux