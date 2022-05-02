import React from "react";
import Borysov from "./Borysov";
import BorysovContainer from "./mapTask/BorysovContainer";
import { Routes, Route, useParams } from "react-router-dom";
import BorysovFormContainer from "./formTask/BorysovFormContainer";
const BorysovPage = () => {

    return(
        <div>
            <Borysov />
            <Routes>
                <Route path={"/map"} element={<BorysovContainer />}/>
                <Route path={"/form"} element={<BorysovFormContainer />}/>
             </Routes>
        </div>

    )
}

export default BorysovPage