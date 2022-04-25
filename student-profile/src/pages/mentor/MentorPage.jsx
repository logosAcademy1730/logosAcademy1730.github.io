import styles from "./MentorPage.module.scss";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect } from "react";

const MentorPage = () => {
  const { userId } = useParams();
  console.log(userId);
  console.log(styles);
  return (
    <div className={styles.container}>
      <h1> MentorPage</h1>
      <Routes>
        <Route path={"/ex"} element={<h1>ex</h1>} />
        <Route path={"/exx"} element={<h1>exx</h1>} />
        <Route path={"/exxx"} element={<h1>exxx</h1>} />
        <Route path={"/exxxx"} element={<h1>exxxx</h1>} />
      </Routes>
      <h1> MentorPage</h1>
      <h1> MentorPage</h1>
      <h1> MentorPage</h1>
    </div>
  );
};

export default MentorPage;
