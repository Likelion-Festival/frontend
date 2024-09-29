import styles from "@styles/notice/noticeDetail.module.css";
import locationIcon from "@assets/notice/location_icon.svg";
import dateIcon from "@assets/notice/date_icon.svg";
import timeIcon from "@assets/notice/time_icon.svg";

interface InfoBox1Props {
  location: string;
  date: string;
  time: string;
}
export const InfoBox1 = ({ location, date, time }: InfoBox1Props) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.locationBox}>
        <div className={styles.infoIndex}>
          <img src={locationIcon} />
          장소
        </div>
        <div className={styles.infoContents}>{location}</div>
      </div>
      <div className={styles.boxDiv} />
      <div className={styles.dateBox}>
        <div className={styles.infoIndex}>
          <img src={dateIcon} />
          날짜
        </div>
        <div className={styles.infoContents}>{date}</div>
      </div>
      <div className={styles.boxDiv} />
      <div className={styles.timeBox}>
        <div className={styles.infoIndex}>
          <img src={timeIcon} />
          시간
        </div>
        <div className={styles.infoContents}>{time}</div>
      </div>
    </div>
  );
};
