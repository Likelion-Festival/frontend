import Pantasia from "@assets/bar/SW.png";
import styles from "@styles/performance/NoPerformanceTomorrow.module.css";

export const NoPerformanceTomorrow = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        모든 공연이 끝났어요 <br />
        마지막 남은 행사들도 즐겨주세요!
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(${Pantasia})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={styles.img}
      >
        <span>판타지아 보러가기</span>
      </div>
    </div>
  );
};
