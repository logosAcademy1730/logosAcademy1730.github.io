import React from "react";
import a from "./a.module.css";

const BorysovPresentation = (props) => {
    return(
    <div className={a.container}>
        <div className={a.card}>
            <h3>User {props.place}</h3>
            <p>{props.user.username}</p>
            <div onClick={() => props.deleteUser(props.id)} className={a.delete__button}>Delete</div>
        </div>
    </div>)
}
export default BorysovPresentation