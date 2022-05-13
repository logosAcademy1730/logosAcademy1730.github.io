import React from "react";
import AndrewArkhypchuk from "./AndrewArkhypchuk";
import {Route, Routes} from "react-router-dom";
import AndrewForm from "./MyForm/AndrewForm";


const AndrewContainer = () => {
    return (
        <div>
        <AndrewArkhypchuk />
    <Routes>
        <Route path={"/form"} element={<AndrewForm />}/>
    </Routes>
</div>
    )
}
export default AndrewContainer;
