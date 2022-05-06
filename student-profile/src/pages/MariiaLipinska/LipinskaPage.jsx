import React from "react";
import MariiaLipinska from "./MariiaLipinska";
import { Routes, Route } from "react-router-dom";
import LipinskaForm from "./Form_homework/Lipinska_form";
import LipinskaAPI from "./API_homework/LipinskaAPI";

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
        </div>

    )
}

export default LipinskaPage;
