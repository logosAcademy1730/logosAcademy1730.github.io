import VolodymyrHryhoriev from "./VolodymyrHryhoriev";
import UserListHW from "./userlist/UserListHW";
import { Routes, Route } from "react-router-dom";
import HryhorievForm from "./form/HryhorievForm";

const VolodymyrHryhorievPage = () => {
    return (
        <div>
    <VolodymyrHryhoriev />
            <Routes>
                <Route path={"/userList"} element={<UserListHW />}/>
                <Route path={"/form"} element={<HryhorievForm />}/>
            </Routes>

</div>
    );
}

export default VolodymyrHryhorievPage;