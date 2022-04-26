import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main/MainPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import MentorPage from "./pages/mentor/MentorPage";
import Header from "./components/header/Header";
import { RouteConst } from "./common/RouteConst";
import NotFoundPage from "./pages/404/NotFoundPage";
import Spivakov from "./pages/spivakov/Spivakov";

import Info from "./pages/Info/Info";
import VolodymyrHryhoriev from "./pages/VolodymyrHryhoriev/VolodymyrHryhoriev";
import MarianaBatig from "./pages/MarianaBatig/MarianaBatig";
import { useEffect } from "react";
import PrivateRoute from "./components/HOC/PrivateRoute";

const App = () => {
  const path = useLocation().pathname;
  useEffect(() => {
    // localStorage.setItem("user", JSON.stringify({ role: "user" }));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const showNavbar = () => {
    switch (path) {
      case RouteConst.MENTOR:
      case RouteConst.INFO:
      case RouteConst.HRYHORIEV:
      case RouteConst.MARIANA:
      case RouteConst.SPIVAKOV:
        return false;
      default:
        return true;
    }
  };

  return (
    <div className="App">
      {showNavbar() && <Header />}
      <Routes>
          <Route path={RouteConst.MAIN} element={<MainPage />}/>
          <Route path={RouteConst.MENTOR_Nested} element={<MentorPage />}/>
          <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />}/>
          <Route path={RouteConst.SPIVAKOV_Nested} element={<Spivakov />}/>
          <Route path="*" element={<Navigate to={RouteConst.NOT_FOUND_PAGE}/>}/>
        <Route path={RouteConst.MAIN} element={<MainPage />} />

        {/*<Route element={<PrivateRoute isAllowed={user?.role === "admin"}/>}>*/}
        {/*  <Route path={RouteConst.MENTOR_Nested} element={<MentorPage />} />*/}
        {/*</Route>*/}

        <Route
          element={
            <PrivateRoute isAllowed={user?.role === "admin"}>
              <Route path={RouteConst.MENTOR_Nested} element={<MentorPage />} />
            </PrivateRoute>
          }
        />
        {/*<Route element={<PrivateRoute isAllowed={user?.role} />}>*/}
        {/*  <Route path={RouteConst.HRYHORIEV} element={<VolodymyrHryhoriev />} />*/}
        {/*</Route>*/}


        <Route path={RouteConst.HRYHORIEV} element={<VolodymyrHryhoriev />} />

        <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />
        <Route path={RouteConst.INFO} element={<Info />} />
        <Route path="*" element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />} />
        <Route path={RouteConst.MARIANA} element={<MarianaBatig />} />
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
