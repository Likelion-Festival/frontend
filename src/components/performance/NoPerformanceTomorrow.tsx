import Pantasia from "@assets/performance/pantasia.webp";
import styles from "@styles/performance/NoPerformanceTomorrow.module.css";
import { useNavigate } from "react-router-dom";

export const NoPerformanceTomorrow = () => {
  const navigate = useNavigate();
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
        onClick={() => navigate('/detail/105')}
      >
        <span>판타지아 보러가기</span>
      </div>
    </div>
  );
};
