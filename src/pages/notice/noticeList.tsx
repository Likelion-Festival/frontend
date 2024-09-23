import { useNavigate } from "react-router-dom";
import goBackImg from "@assets/notice/goBackButton.svg";
import styles from "@styles/notice/noticeList.module.css";
export const NoticeListPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.topMargin} />
      <div className={styles.header}>
        <button className={styles.goBack} onClick={handleGoBack}>
          <img src={goBackImg} alt="goBack" />
        </button>
        <div className={styles.entireTitle}>공지사항</div>
      </div>
      <div className={styles.listBody}></div>
    </div>
  );
};
