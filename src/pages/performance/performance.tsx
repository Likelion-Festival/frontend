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
import { useEffect, useRef, useState } from "react";
import { NoPerformanceTomorrow } from "@components/performance/NoPerformanceTomorrow";
import { useMapContext } from "@context/MapContext";

export const PerformancePage = () => {
  const navigate = useNavigate();
  const { showModal } = useAlarm();
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null); // 컨테이너 참조
  const { setIsNavVisible } = useMapContext();

  useEffect(() => {
    setIsNavVisible(true);
  }, []);

  const handleTimeTableClick = () => {
    const today = new Date();
    const dayOfMonth = today.getDate();

    if (today.getFullYear() === 2024 && today.getMonth() === 9) {
      if (dayOfMonth === 1) {
        navigate("timetable/2");
      } else if (dayOfMonth === 2) {
        navigate("timetable/3");
      }
    } else {
      navigate("timetable/0");
    }
  };

  const handleScroll = () => {
    setVisible(false); // 스크롤 시 툴팁 숨기기
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll); // 컨테이너에 스크롤 이벤트 리스너 추가
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll); // 언마운트 시 리스너 제거
      }
    };
  }, []);
  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.column}>
        <div className={styles.header}>
          <span>Today</span>
          <img src={timeTable} alt="" onClick={handleTimeTableClick} />
          <Tooltip
            text="타임테이블 보러가기"
            top={60}
            left={212}
            visible={visible}
            setVisible={setVisible}
          />
        </div>
        {new Date().getMonth() === 9 &&
        (new Date().getDate() === 1 || new Date().getDate() === 2) ? (
          <Slide items={performances} onlyToday={true} />
        ) : (
          <NoPerformanceDay />
        )}

        <div className={styles.guide}>
          <span>공연 관람 Guide 보러가기</span>
          <div onClick={() => navigate("guide")}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.horizon}></div>
      {(new Date().getMonth() === 8 && new Date().getDate() === 30) || (new Date().getMonth() === 9 && new Date().getDate() === 1) ? (
        <div className={styles.column}>
          <div className={styles.header}>
            <span>Soon</span>
          </div>
          <Slide items={performances} onlyToday={false} />
        </div>
      ) : (
        <NoPerformanceTomorrow />
      )}
      {showModal && <Modal />}
    </div>
  );
};
