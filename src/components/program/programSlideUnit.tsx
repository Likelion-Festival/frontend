import styles from "@styles/main/MainPage.module.css";

interface ProgramSlideUnitProps {
  programImgURL: string;
  programName: string;
  onClick?: () => void;
}

const ProgramSlideUnit = ({
  programImgURL,
  programName,
  onClick,
}: ProgramSlideUnitProps) => {
  return (
    <div className={styles.programBox}>
      <div
        className={styles.programImg}
        style={{ backgroundImage: `url(${programImgURL})` }}
        onClick={onClick ? onClick : undefined}
      />
      <div className={styles.programName}>{programName}</div>
    </div>
  );
};

export default ProgramSlideUnit;
