import styles from "@styles/performance/DaySelect.module.css";

interface DaySelectProps {
  currentDay: string;
  setCurrentDay: (day: string) => void;
  setshowModal: (showModal: boolean) => void;
}

export const DaySelect: React.FC<DaySelectProps> = ({
  currentDay,
  setCurrentDay,
  setshowModal,
}) => {
  const handleButtonClick = (day: string) => {
    setCurrentDay(day);
    setshowModal(false);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.modal}>
        <div onClick={() => handleButtonClick("1")} className={currentDay === "1" ? styles.current : ""}>1일차</div>
        <div onClick={() => handleButtonClick("2")} className={currentDay === "2" ? styles.current : ""}>2일차</div>
        <div onClick={() => handleButtonClick("3")} className={currentDay === "3" ? styles.current : ""}>3일차</div>
      </div>
    </div>
  );
};
