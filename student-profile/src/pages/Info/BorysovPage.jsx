import React from "react";
import Borysov from "./Borysov";
import BorysovContainer from "./mapTask/BorysovContainer";
import { Routes, Route, useParams } from "react-router-dom";
import BorysovFormContainer from "./formTask/BorysovFormContainer";
import BorysovAPIContainer from "./api/BorysovAPIContainer";
import BorysovRedux from "./reduxTask/BorysovRedux";
const BorysovPage = () => {

    return(
        <div>
          <Borysov />
            <Routes>
                <Route path={"/map"} element={<BorysovContainer />}/>
               <Route path={"/form"} element={<BorysovFormContainer />}/>
               <Route path={"/api"} element={<BorysovAPIContainer />}/>
              <Route path={"/redux"} element={<BorysovRedux />}/>
             </Routes>
        </div>

    )
}

export default BorysovPage