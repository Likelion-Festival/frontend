import styles from "@styles/performance/Performance.module.css";
import timeTable from "@assets/performance/time-table.svg";
import arrow from "@assets/performance/arrow.svg";
import { useNavigate } from "react-router-dom";
import { Slide } from "@components/artist-slide/Slide";
import { performances } from "@constant/performance";
import { Tooltip } from "@components/performance/Tooltip";
import { NoPerformanceDay } from "@components/performance/NoPerformanceDay";
import { useAlarm } from "@hooks/useAlarm";
import { Modal } from "@components/performance/Modal";

export const PerformancePage = () => {
  const navigate = useNavigate();
  const {showModal} = useAlarm();

  const handleTimeTableClick = () => {
    const today = new Date();
    const dayOfMonth = today.getDate();

    if (today.getFullYear() === 2024 && today.getMonth() === 9) {
      if (dayOfMonth === 1) {
        navigate("timetable/1");
      } else if (dayOfMonth === 2) {
        navigate("timetable/2");
      }
    } else {
      navigate("timetable/0");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.header}>
          <span>Today</span>
          <img src={timeTable} alt="" onClick={() => handleTimeTableClick()} />
          <Tooltip text="타임테이블 보러가기" top={60} left={212} />
        </div>
        {new Date().getMonth() === 9 &&
        (new Date().getDate() === 1 || new Date().getDate() === 2) ? (
          <Slide items={performances} onlyToday={true} />
        ) : (
          <NoPerformanceDay/>
        )}
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
        <Slide items={performances} onlyToday={false} />
      </div>
      {  showModal && <Modal />}
    </div>
  );
};
