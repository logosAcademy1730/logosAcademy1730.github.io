import { useEffect, useState } from "react";
import { PostsAPI, UsersAPI } from "../../api/api";
import {
  actionsUsers,
  actionsUsersTypes,
  getMyInfo,
  getUsers,
} from "../../redux/actionCreator/actionsUsers";
import { useDispatch, useSelector } from "react-redux";
import {Admin, MyInfo, UserInterface} from "../../common/types";
import { AppStateType } from "../../redux/store";
import styles from "./MentorPage.module.scss";
import {
  addInfoFirebase,
  deleteInfoFirebase,
  editInfoFirebase, login, uploadFileToFB,
} from "../../api/firebaseCalls";
import {useNavigate} from "react-router-dom";
import {RouteConst} from "../../common/RouteConst";
interface Props {
  user: UserInterface;
  index: number;
  getUserName: (s: string) => void;
}
const User = ({ user, index, getUserName }: Props) => (
  <div
    style={{ color: "black" }}
    key={index}
    onClick={() => getUserName(user.name)}
  >
    <p>{user.name}</p>
    <p>{user.phone}</p>
    <p>{user.email}</p>
    <p>{user.address.geo.lat}</p>
    <br />
    <br />
  </div>
);

const MentorPage = () => {
  const [admin , setAdmin] = useState<Admin | null>(null);
  const [loginError, setLoginError] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info: MyInfo[] = useSelector(
    //@ts-ignore
    (state: AppStateType) => state.usersReducer.myInfo
  );
  // @ts-ignore
  const getMyInfoThunk = () => dispatch(getMyInfo());

  useEffect(() => {
    // getUsersThunk("","","");
    getMyInfoThunk();
  }, []);

  useEffect(() => {
    if(admin?.role === "admin"){
      localStorage.setItem("user", JSON.stringify(admin))
      navigate(RouteConst.HRYHORIEV_Nested)
    }
  }, [admin]);

  const formData = {
    user: "`6Zm.rqe39G",
    password: "C2RS47u`c"
  }

  const addData = () => {
    addInfoFirebase({
      name: "Petro",
      position: "student",
    });
  };
  const deleteData = (id: string) => deleteInfoFirebase(id);

  const handleUpload = (e: any) => {
    e.preventDefault();
    const file = e.target[0].files[0]
    if(!file) return;
    uploadFileToFB(file, setImage)
  }
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleUpload}>
        <input type="file"/>
        <button type="submit">Upload image</button>
      </form>
      <button
      onClick={()=> login(formData, setLoginError, setAdmin)}
      >LOGIN</button>
      {loginError !== "" && <h1>{loginError}</h1>}
      {image !== "" && <img src={image} alt="" />}
      {info?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.position}</p>
          <button onClick={() => deleteData(item.id)}>Delete</button>
          <br />
          <br />
          <button
            onClick={() =>
              editInfoFirebase(item.id, {
                name: "Untitled",
                position: " Unknown",
              })
            }
          >
            Edit
          </button>
          <br />
          <br />
        </div>
      ))}
      <button onClick={addData}>ADD</button>
    </div>
  );
};

export default MentorPage;
