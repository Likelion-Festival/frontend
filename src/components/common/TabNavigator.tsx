import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "../../styles/TabNavigator.module.css";
import homeUnactiveIcon from "../../assets/nav/home-btn-unactive.svg";
import homeActiveIcon from "../../assets/nav/home-btn-active.svg";
import mapUnactiveIcon from "../../assets/nav/map-btn-unactive.svg";
import mapActiveIcon from "../../assets/nav/map-btn-active.svg";
import performanceUnactiveIcon from "../../assets/nav/performance-btn-unactive.svg";
import performanceActiveIcon from "../../assets/nav/performance-btn-active.svg";
import barUnactiveIcon from "../../assets/nav/bar-btn-unactive.svg";
import barActiveIcon from "../../assets/nav/bar-btn-active.svg";

export const TabNavigator = () => {
  const [navStatus, setNavStatus] = useState<number>(1);

  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.link} onClick={() => setNavStatus(1)}>
        <img
          src={navStatus === 1 ? homeActiveIcon : homeUnactiveIcon}
          alt="home-icon"
        />
        <strong
          className={classNames(
            styles.text,
            navStatus === 1 ? styles.active : styles.unactive
          )}
        >
          홈
        </strong>
      </Link>
      <Link to={"/map"} className={styles.link} onClick={() => setNavStatus(2)}>
        <img
          src={navStatus === 2 ? mapActiveIcon : mapUnactiveIcon}
          alt="map-icon"
        />
        <strong
          className={classNames(
            styles.text,
            navStatus === 2 ? styles.active : styles.unactive
          )}
        >
          지도
        </strong>
      </Link>
      <Link
        to={"/performance"}
        className={styles.link}
        onClick={() => setNavStatus(3)}
      >
        <img
          src={
            navStatus === 3 ? performanceActiveIcon : performanceUnactiveIcon
          }
          alt="performance-icon"
        />
        <strong
          className={classNames(
            styles.text,
            navStatus === 3 ? styles.active : styles.unactive
          )}
        >
          공연 정보
        </strong>
      </Link>
      <Link to={"/bar"} className={styles.link} onClick={() => setNavStatus(4)}>
        <img
          src={navStatus === 4 ? barActiveIcon : barUnactiveIcon}
          alt="bar-icon"
        />
        <strong
          className={classNames(
            styles.text,
            navStatus === 4 ? styles.active : styles.unactive
          )}
        >
          주점
        </strong>
      </Link>
    </div>
  );
};
