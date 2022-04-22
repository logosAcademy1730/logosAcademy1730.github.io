import styles from "./NotFoundPage.module.css";
import {Routes, Route } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1> OOpps page not found</h1>
    </div>
  );
};

export default NotFoundPage;
