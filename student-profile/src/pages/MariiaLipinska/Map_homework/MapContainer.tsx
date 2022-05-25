import React from "react";
import styles from "./Map.module.css";
import MapData from "./MapData"
import a from "../../Info/mapTask/a.module.css";

const MapContainer = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h3>User {props.place}</h3>
                <p>{props.user?.username}</p>
                <div onClick={() => props.deleteUser(props.id)} className={styles.deleteButton}>Delete</div>
            </div>
        </div>
    )
}
export default MapContainer