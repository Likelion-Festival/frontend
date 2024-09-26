import styles from "@styles/notice/noticeDetail.module.css";
import goBackImg from "@assets/notice/goBackButton.svg";
import { useNavigate } from "react-router-dom";

export const HeaderWithBack = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className={styles.topMargin} />
      <div className={styles.header}>
        <button className={styles.goBack} onClick={handleGoBack}>
          <img src={goBackImg} alt="goBack" />
        </button>
      </div>
    </div>
  );
};
