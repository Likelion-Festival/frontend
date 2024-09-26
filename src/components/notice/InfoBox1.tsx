import styles from "@styles/notice/noticeDetail.module.css";
interface InfoBox1Props {
  location: string;
  date: string;
  time: string;
}
export const InfoBox1 = ({ location, date, time }: InfoBox1Props) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.locationBox}>
        <div className={styles.infoIndex}>장소</div>
        <div className={styles.infoContents}>{location}</div>
      </div>
      <div className={styles.boxDiv} />
      <div className={styles.dateBox}>
        <div className={styles.infoIndex}>날짜</div>
        <div className={styles.infoContents}>{date}</div>
      </div>
      <div className={styles.boxDiv} />
      <div className={styles.timeBox}>
        <div className={styles.infoIndex}>시간</div>
        <div className={styles.infoContents}>{time}</div>
      </div>
    </div>
  );
};
