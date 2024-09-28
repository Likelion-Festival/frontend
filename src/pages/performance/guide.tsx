import styles from "@styles/performance/Guide.module.css";
import arrowBack from "@assets/performance/arrow-back.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  GuideEntrance,
  GuideLayout,
  GuideTime,
} from "@components/performance/GuideContent";
import { useMapContext } from "@context/MapContext";

export const GuidePage = () => {
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const { setIsNavVisible } = useMapContext();

  useEffect(() => {
    setIsNavVisible(false);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={arrowBack} alt="" onClick={() => navigate(-1)} />
        <span>공연안내</span>
      </div>
      <ul className={styles.nav}>
        <li
          className={index === 0 ? styles.selected : ""}
          onClick={() => setIndex(0)}
        >
          공연시간
        </li>
        <li
          className={index === 1 ? styles.selected : ""}
          onClick={() => setIndex(1)}
        >
          입장안내
        </li>
        <li
          className={index === 2 ? styles.selected : ""}
          onClick={() => setIndex(2)}
        >
          배치도
        </li>
      </ul>
      {index === 0 && <GuideTime />}
      {index === 1 && <GuideEntrance />}
      {index === 2 && <GuideLayout />}
    </div>
  );
};
