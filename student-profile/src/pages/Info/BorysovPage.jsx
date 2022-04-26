import React from "react";
import Borysov from "./Borysov";
import { Routes, Route, useParams } from "react-router-dom";
const BorysovPage = () => {

    return(
        <div>
            <Borysov />
            <Routes>
                <Route path={"/form"} element={<h1>Hello!</h1>}/>
            </Routes>
        </div>

    )
}

export default BorysovPage