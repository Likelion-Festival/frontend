import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "@styles/TabNavigator.module.css";
import homeUnactiveIcon from "@assets/nav/home-btn-unactive.svg";
import homeActiveIcon from "@assets/nav/home-btn-active.svg";
import mapUnactiveIcon from "@assets/nav/map-btn-unactive.svg";
import mapActiveIcon from "@assets/nav/map-btn-active.svg";
import performanceUnactiveIcon from "@assets/nav/performance-btn-unactive.svg";
import performanceActiveIcon from "@assets/nav/performance-btn-active.svg";
import barUnactiveIcon from "@assets/nav/bar-btn-unactive.svg";
import barActiveIcon from "@assets/nav/bar-btn-active.svg";

export const TabNavigator = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.link}>
        <img
          src={path === "/" ? homeActiveIcon : homeUnactiveIcon}
          alt="home-icon"
        />
        <strong
          className={classNames(
            styles.text,
            path === "/" ? styles.active : styles.unactive
          )}
        >
          홈
        </strong>
      </Link>
      <Link to={"/map"} className={styles.link}>
        <img
          src={path === "/map" ? mapActiveIcon : mapUnactiveIcon}
          alt="map-icon"
        />
        <strong
          className={classNames(
            styles.text,
            path === "/map" ? styles.active : styles.unactive
          )}
        >
          지도
        </strong>
      </Link>
      <Link to={"/performance"} className={styles.link}>
        <img
          src={
            path === "/performance"
              ? performanceActiveIcon
              : performanceUnactiveIcon
          }
          alt="performance-icon"
        />
        <strong
          className={classNames(
            styles.text,
            path === "/performance" ? styles.active : styles.unactive
          )}
        >
          공연 정보
        </strong>
      </Link>
      <Link to={"/bar"} className={styles.link}>
        <img
          src={path === "/bar" ? barActiveIcon : barUnactiveIcon}
          alt="bar-icon"
        />
        <strong
          className={classNames(
            styles.text,
            path === "/bar" ? styles.active : styles.unactive
          )}
        >
          주점
        </strong>
      </Link>
    </div>
  );
};
