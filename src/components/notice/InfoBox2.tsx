import styles from "@styles/notice/noticeDetail.module.css";
interface InfoBox2Props {
  index1: string;
  index2: string;
  phrase1: string;
  phrase2: string;
}
export const InfoBox2 = ({
  index1,
  index2,
  phrase1,
  phrase2,
}: InfoBox2Props) => {
  return (
    <div className={styles.boxWrapper2}>
      <div className={styles.leftBox}>
        <div className={styles.index1}>{index1}</div>
        <div className={styles.horizDiv1} />
        <div className={styles.index2}>{index2}</div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.phrase1}>{phrase1}</div>
        <div className={styles.horizDiv2} />
        <div className={styles.phrase2Box}>
          <div className={styles.phrase2}>{phrase2}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
