import React from "react";
import m from "./m.module.css";

const MainMap = (props) => {
    return(
        <div className={m.container}>
            <div className={m.card}>
                <h3>User {props.place}</h3>
                <p>{props.user.username}</p>
                <div onClick={() => props.deleteUser(props.id)} className={m.deleteButton}>Delete</div>
            </div>
        </div>)
}
export default MainMap