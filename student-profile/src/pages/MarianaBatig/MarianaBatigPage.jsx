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
import ContainerM from "./FormMariana/ContainerM";
const MarianaBatigPage = () => {
    return (
        <div className={styles.container}>
     <MarianaBatig />
            <Routes>
                <Route path={"/map"} element={<SecondMap />}/>
                <Route path={"/form"} element={<ContainerM />}/>
            </Routes>
        </div>
);
};

export default MarianaBatigPage;
