import styles from "@styles/MainPage.module.css";

interface ProgramSlideUnitProps {
  programImgURL: string; // 이미지 URL
  programName: string; // 프로그램 이름
}

const ProgramSlideUnit = ({
  programImgURL,
  programName,
}: ProgramSlideUnitProps) => {
  return (
    <div className={styles.programBox}>
      <div
        className={styles.programImg}
        style={{ backgroundImage: `url(${programImgURL})` }}
      ></div>
      <div className={styles.programName}>{programName}</div>
    </div>
  );
};

export default ProgramSlideUnit;
