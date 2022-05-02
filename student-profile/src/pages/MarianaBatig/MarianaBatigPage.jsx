import styles from "./MarianaBatig.module.css";
import photo from "./Mariana.jpg"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MarianaBatig from "./MarianaBatig";
import MainMap from "./MapWork/MainMap";
import SecondMap from "./MapWork/SecondMap";
const MarianaBatigPage = () => {
    return (
        <div className={styles.container}>
     <MarianaBatig />
            <Routes>
                <Route path={"/form"} element={<SecondMap />}/>
            </Routes>
        </div>
);
};

export default MarianaBatigPage;
