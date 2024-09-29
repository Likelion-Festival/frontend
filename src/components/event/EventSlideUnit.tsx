// Event.tsx
import styles from "@styles/main/MainPage.module.css";

interface EventProps {
  imgURL: string;
  indexText: string;
  mainTitle: string;
  subTitle: string | undefined;
  onClick?: () => void;
}

const EventSlideUnit = ({
  imgURL,
  indexText,
  mainTitle,
  subTitle,
  onClick,
}: EventProps) => {
  return (
    <div
      className={styles.eventBox}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0.8) 100%), url(${imgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick ? onClick : undefined}
    >
      <div className={styles.eventHeader}>
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
