import React from "react";
import MariiaLipinska from "./MariiaLipinska";
import { Routes, Route } from "react-router-dom";
const LipinskaPage = () => {

    return(
        <div>
            <MariiaLipinska />
            <Routes>
                <Route path={"/form"} element={<h1>Hello!</h1>}/>
            </Routes>
        </div>

    )
}

export default LipinskaPage;
