import React from "react";
import MariiaLipinska from "./MariiaLipinska";
import { Routes, Route } from "react-router-dom";
import LipinskaForm from "./Form_homework/Lipinska_form";
import LipinskaAPI from "./API_homework/LipinskaAPI";
import Map from "./Map_homework/MapContainer";

const LipinskaPage = () => {

    return(
        <div>
            <MariiaLipinska />
            <Routes>
                <Route path={"/form"} element={<LipinskaForm/>}/>
            </Routes>
            <Routes>
                <Route path={"/api"} element={<LipinskaAPI/>}/>
            </Routes>
            <Routes>
                <Route path={"/map"} element={<Map/>}/>
            </Routes>
        </div>

    )
}

export default LipinskaPage;
