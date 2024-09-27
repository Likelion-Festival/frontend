import styles from "@styles/performance/NoPerformanceDay.module.css";
import App from "@assets/performance/performance-app.svg";
import FoodTruck from "@assets/performance/performance-food.svg";
import Bar from "@assets/performance/performance-bar.svg";
import { useNavigate } from "react-router-dom";

export const NoPerformanceDay = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <div className={styles.textbox}>
        <span>오늘은 공연이 없어요.</span>
        <span>다른 이벤트들은 어때요?</span>
      </div>
      <div className={styles.btnbox}>
        <div className={styles.btn} onClick={() => navigate('/notice-list')}>
          <div className={styles.btnText}>
            앱 200% <br />
            즐기는 법
          </div>
          <div className={styles.btnImg}>
            <img src={App} alt="" />
          </div>
        </div>
        <div className={styles.btn} onClick={() => navigate('/detail/1')}>
          <div className={styles.btnText}>
            푸드트럭 <br />
            즐기는법
          </div>
          <div className={styles.btnImg}>
            <img src={FoodTruck} alt="" />
          </div>
        </div>
        <div className={styles.btn} onClick={() => navigate('timetable/2')}>
          <div className={styles.btnText}>
            내일 공연 <br />
            미리보기
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.btn} onClick={() => navigate('/bar')}>
          <div className={styles.btnText}>
            주점 메뉴
            <br /> 엿보기
          </div>
          <div className={styles.btnImg}>
            <img src={Bar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
