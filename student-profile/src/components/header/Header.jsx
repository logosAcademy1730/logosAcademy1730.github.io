import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={RouteConst.MAIN}>Home</Link>
      <Link className={styles.link} to={RouteConst.MENTOR}>Mentor</Link>
        <Link className={styles.link} to={RouteConst.INFO}>Info</Link>
        <Link className={styles.link} to={RouteConst.HRYHORIEV}>Hryhoriev</Link>
        <Link className={styles.link} to={RouteConst.INFO}>Info</Link>

      <Link className={styles.link} to={RouteConst.MARIANA}>Mariana</Link>
    </div>
  );
};

export default Header;
