// Event.tsx
import styles from "../../styles/MainPage.module.css";

interface EventProps {
  imgURL: string;
  isOnLive: boolean;
  indexText: string;
  mainTitle: string;
  subTitle: string;
}

const EventSlideUnit = ({
  imgURL,
  isOnLive,
  indexText,
  mainTitle,
  subTitle,
}: EventProps) => {
  return (
    <div
      className={styles.eventBox}
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className={styles.eventHeader}>
        {isOnLive ? <div className={styles.eventLiveLogo}>Live</div> : null}
        <div className={styles.eventIndex}>{indexText}</div>
      </div>
      <div className={styles.eventTitleBox}>
        <div className={styles.eventMainTitle}>{mainTitle}</div>
        <div className={styles.eventSubTitle}>{subTitle}</div>
      </div>
    </div>
  );
};

export default EventSlideUnit;
