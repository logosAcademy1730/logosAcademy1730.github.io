import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main/MainPage";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import MentorPage from "./pages/mentor/MentorPage";
import Header from "./components/header/Header";
import { RouteConst } from "./common/RouteConst";
import NotFoundPage from "./pages/404/NotFoundPage";
import VolodymyrHryhoriev from "./pages/VolodymyrHryhoriev/VolodymyrHryhoriev";

import MarianaBatig from "./pages/MarianaBatig/MarianaBatig";

const App = () => {
    const path = useLocation().pathname;
    const showNavbar = () => {
       return path === RouteConst.MAIN || path.includes(RouteConst.MENTOR) || path.includes(RouteConst.HRYHORIEV)
       return path === RouteConst.MAIN || path.includes(RouteConst.MENTOR) || path.includes(RouteConst.MARIANA)


    }

  return (
    <div className="App">
      {/*<p>Mariia Lipinska</p>*/}
        {showNavbar() && <Header />}
      <Routes>
          <Route path={RouteConst.MAIN} element={<MainPage />}/>
          <Route path={RouteConst.MENTOR_Nested} element={<MentorPage />}/>
          <Route path={RouteConst.HRYHORIEV} element={<VolodymyrHryhoriev />}/>
          <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />}/>

          <Route path={RouteConst.MARIANA} element={<MarianaBatig />}/>
      </Routes>


    </div>
  );
};

const AppContainer = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppContainer;
