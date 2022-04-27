import styles from "./MarianaBatig.module.css";
import photo from "./Mariana.jpg"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MarianaBatig from "./MarianaBatig";
const MarianaBatigPage = () => {
    return (
        <div className={styles.container}>
     <MarianaBatig />
            <Routes>
                <Route path={"/form"} element={<h1>Hello!</h1>}/>
            </Routes>
        </div>
);
};

export default MarianaBatigPage;
