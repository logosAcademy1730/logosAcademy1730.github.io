import React from "react";
import MariiaLipinska from "./MariiaLipinska";
import { Routes, Route } from "react-router-dom";
import LipinskaForm from "./Form_homework/Lipinska_form";

const LipinskaPage = () => {

    return(
        <div>
            <MariiaLipinska />
            <Routes>
                <Route path={"/form"} element={<LipinskaForm/>}/>
            </Routes>
        </div>

    )
}

export default LipinskaPage;
