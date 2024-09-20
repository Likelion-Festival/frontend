import Arrow from "@assets/performance/arrow-back.svg";

//add styles
import styles from "@styles/performance/Timetable.module.css";
import { useNavigate } from "react-router-dom";

export const Timetable = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const today = new Date();
    console.log(today);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={Arrow} alt="" onClick={() => navigate(-1)} />
        <span>타임테이블</span>
      </div>
      <span className={styles.nday}>일차</span>
      <button className={styles.button} onClick={handleButtonClick}>
        현재 진행중인 공연보기
      </button>
      <span className={styles.playground}>대운동장</span>
      <div className={styles.tableCell} style={{marginTop : "14px"}}>
        <span className={styles.tableTime}>14:00</span>
        <div className={styles.tableVertical}></div>
        <div className={styles.tableContent}>
            <span className={styles.tableSinger}>권은비</span>
            <span className={styles.tablePlaytime}>14:00 ~ 14:30</span>
        </div>
        <div className={styles.circleLine}>
            <div className={styles.circleLineCircle}></div>
            <div className={styles.circleLineLine}></div>
        </div>
      </div>
      <div className={styles.tableCell} style={{marginTop : "5px"}}>
        <span className={styles.tableTime}>14:00</span>
        <div className={styles.tableVertical}></div>
        <div className={styles.tableContent}>
            <span className={styles.tableSinger}>권은비</span>
            <span className={styles.tablePlaytime}>14:00 ~ 14:30</span>
        </div>
        <div className={styles.circleLine}>
            <div className={styles.circleLineCircle}></div>
            <div className={styles.circleLineLine}></div>
        </div>
      </div>
      <div className={styles.tableCell} style={{marginTop : "5px"}}>
        <span className={styles.tableTime}>14:00</span>
        <div className={styles.tableVertical}></div>
        <div className={styles.tableContent}>
            <span className={styles.tableSinger}>권은비</span>
            <span className={styles.tablePlaytime}>14:00 ~ 14:30</span>
        </div>
        <div className={styles.circleLine}>
            <div className={styles.circleLineCircle}></div>
            <div className={styles.circleLineLine}></div>
        </div>
      </div>
      <div className={styles.tableCell} style={{marginTop : "5px"}}>
        <span className={styles.tableTime}>14:00</span>
        <div className={styles.tableVertical}></div>
        <div className={styles.tableContent}>
            <span className={styles.tableSinger}>권은비</span>
            <span className={styles.tablePlaytime}>14:00 ~ 14:30</span>
        </div>
        <div className={styles.circleLine}>
            <div className={styles.circleLineCircle}></div>
            <div className={styles.circleLineLine}></div>
        </div>
      </div>
      <div className={styles.tableCell} style={{marginTop : "5px"}}>
        <span className={styles.tableTime}>14:00</span>
        <div className={styles.tableVertical}></div>
        <div className={styles.tableContent}>
            <span className={styles.tableSinger}>권은비</span>
            <span className={styles.tablePlaytime}>14:00 ~ 14:30</span>
        </div>
        <div className={styles.circleLine}>
            <div className={styles.circleLineCircle}></div>
            <div className={styles.circleLineLine}></div>
        </div>
      </div>
      <div className={styles.tableCell} style={{marginTop : "5px"}}>
        <span className={styles.tableTime}>14:00</span>
        <div className={styles.tableVertical}></div>
        <div className={styles.tableContent}>
            <span className={styles.tableSinger}>권은비</span>
            <span className={styles.tablePlaytime}>14:00 ~ 14:30</span>
        </div>
        <div className={styles.circleLine}>
            <div className={styles.circleLineCircle}></div>
            <div className={styles.circleLineLine}></div>
        </div>
      </div>
      <div className={styles.tableCell} style={{marginTop : "5px"}}>
        <span className={styles.tableTime}>14:00</span>
        <div className={styles.tableVertical}></div>
        <div className={styles.tableContent}>
            <span className={styles.tableSinger}>권은비</span>
            <span className={styles.tablePlaytime}>14:00 ~ 14:30</span>
        </div>
        <div className={styles.circleLine}>
            <div className={styles.circleLineCircle}></div>
            <div className={styles.circleLineLine}></div>
        </div>
      </div>
    </div>
  );
};
