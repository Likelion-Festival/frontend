// import { useNavigate } from "react-router-dom";
import goBackImg from "@assets/notice/goBackButton.svg";
import styles from "@styles/notice/noticeList.module.css";
export const NoticeListPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.goBack}>
          <img src={goBackImg} alt="goBack" />
        </button>
        <div className={styles.entireTitle}>공지사항</div>
      </div>
      <div className={styles.listBody}></div>
    </div>
  );
};
