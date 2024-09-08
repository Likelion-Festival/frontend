import styles from "../../styles/TabNavigator.module.css";
import { Link } from "react-router-dom";

export const TabNavigator = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={"/"}>홈</Link>
      <Link to={"/map"}>지도</Link>
      <Link to={"/performance"}>공연 정보</Link>
      <Link to={"/bar"}>주점</Link>
    </div>
  );
};
