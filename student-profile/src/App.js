import logo from "./logo.svg";
import "./App.css";
import "rsuite/dist/rsuite.min.css";
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
import BorysovPage from "./pages/Info/BorysovPage";
import VolodymyrHryhoriev from "./pages/VolodymyrHryhoriev/VolodymyrHryhoriev";
import MarianaBatigPage from "./pages/MarianaBatig/MarianaBatigPage";
import { useEffect } from "react";
import PrivateRoute from "./components/HOC/PrivateRoute";
import AndrewArkhypchuk from "./pages/AndrewArkhypchuk/AndrewArkhypchuk";
import MariiaLipinska from "./pages/MariiaLipinska/MariiaLipinska";
import LipinskaPage from "./pages/MariiaLipinska/LipinskaPage";
import MarianaBatig from "./pages/MarianaBatig/MarianaBatig";
// import LipinskaPage from "./pages/MariiaLipinska/LipinskaPage";


const App = () => {
  const path = useLocation().pathname;

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify({ role: "admin" }));
  // }, []);

  // const user = JSON.parse(localStorage.getItem("user"));
  const user = { role: "admin" };
  // console.log(user);
  const showNavbar = () => {
    switch (path) {
      case RouteConst.MENTOR:
      case RouteConst.HRYHORIEV:
      case RouteConst.MARIANA:
      case RouteConst.ANDREW:
      case RouteConst.MARIIA:
        return false;
      default:
        return true;
    }
  };

  return (
    <div className="App">
      {showNavbar() && <Header />}
      <Routes>
        <Route path={RouteConst.MAIN} element={<MainPage />} />

        <Route element={<PrivateRoute isAllowed={user?.role === "admin"}/>}>
          <Route path={RouteConst.MENTOR_Nested} element={<MentorPage />} />
        </Route>

        {/*<Route*/}
        {/*  element={*/}
        {/*    <PrivateRoute isAllowed={user?.role === "admin"}>*/}
        {/*      <Route path={RouteConst.MENTOR_Nested} element={<MentorPage />} />*/}
        {/*    </PrivateRoute>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route element={<PrivateRoute isAllowed={user?.role} />}>*/}
        {/*  <Route path={RouteConst.HRYHORIEV} element={<VolodymyrHryhoriev />} />*/}
        {/*</Route>*/}


        <Route path={RouteConst.HRYHORIEV} element={<VolodymyrHryhoriev />} />
        <Route path={RouteConst.ANDREW} element={<AndrewArkhypchuk />} />
        <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />} />
        <Route path={RouteConst.MARIANA_Nested} element={<MarianaBatigPage />} />
        <Route path={RouteConst.BORYSOV_Nested} element={<BorysovPage />} />
        <Route path={RouteConst.MARIANA} element={<MarianaBatig/>} />
        <Route path={RouteConst.MARIIA} element={<MariiaLipinska/>} />
        <Route path={RouteConst.MARIIA_Nested} element={<LipinskaPage/>} />

        <Route path="*" element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />} />
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
