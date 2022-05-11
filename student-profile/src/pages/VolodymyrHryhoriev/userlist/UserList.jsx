import React from "react";

const UserList = (props) => {
    return(
        <div>
            <div>
            <h3>User {props.user.id}</h3>
            <p>{props.user.username}</p>
            <input type={"button"} onClick={() => props.deleteUser(props.user.id)} value={"delete"}></input>
        </div>
        </div>
    )
}

export default UserList