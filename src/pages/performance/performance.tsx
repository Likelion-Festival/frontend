import styles from "@styles/performance/Performance.module.css";
import timeTable from "@assets/performance/time-table.svg";
import arrow from "@assets/performance/arrow.svg";
import { useNavigate } from "react-router-dom";
// artist-slide
import { Slide } from "@components/artist-slide/Slide";
import { performances } from "@constant/performance";

export const PerformancePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{padding : "0px 0px 50px 0px"}}>
      <div className={styles.column}>
        <div className={styles.header}>
          <span>Today</span>

          <img src={timeTable} alt="" />
        </div>
        {
          //slide
          <Slide items={performances} />
        }
        <div className={styles.guide}>
          <span>공연 관람 Guide 보러가기</span>
          <div onClick={() => navigate("guide")}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.horizon}></div>
      <div className={styles.column}>
        <div className={styles.header}>
          <span>Soon</span>
        </div>
        {
          //slide
          <Slide items={performances} />
        }
      </div>
    </div>
  );
};
