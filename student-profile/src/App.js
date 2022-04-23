import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main/MainPage";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import MentorPage from "./pages/mentor/MentorPage";
import Header from "./components/header/Header";
import { RouteConst } from "./common/RouteConst";
import NotFoundPage from "./pages/404/NotFoundPage";
import Spivakov from "./pages/spivakov/Spivakov";


const App = () => {
    const path = useLocation().pathname;
    const showNavbar = () => {
       return path === RouteConst.MAIN || path.includes(RouteConst.MENTOR)
    }

  return (
    <div className="App">
      {/*<p>Mariia Lipinska</p>*/}
        {showNavbar() && <Header />}
      <Routes>
          <Route path={RouteConst.MAIN} element={<MainPage />}/>
          <Route path={RouteConst.MENTOR_Nested} element={<MentorPage />}/>
          <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />}/>
          <Route path={RouteConst.SPIVAKOV} element={<Spivakov />}/>
          <Route path="*" element={<Navigate to={RouteConst.NOT_FOUND_PAGE}/>}/>
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
