import React from "react";
import Borysov from "./Borysov";
import BorysovContainer from "./mapTask/BorysovContainer";
import { Routes, Route, useParams } from "react-router-dom";
const BorysovPage = () => {

    return(
        <div>
            <Borysov />
            <Routes>
                <Route path={"/form"} element={<BorysovContainer />}/>
             </Routes>
        </div>

    )
}

export default BorysovPage