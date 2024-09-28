import styles from "@styles/notice/noticeList.module.css";
import { useNavigate } from "react-router-dom";
import { ListData } from "@type/notice/listData";

const NoticeListUnit = ({ subTitle, title, thumbNailImgURL, id }: ListData) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className={styles.unitBox} onClick={onClickHandler}>
      <div className={styles.textBox}>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.titleText}>{title}</div>
      </div>
      <div className={styles.imgBox}>
        <img src={thumbNailImgURL} alt={`${title} image`} />
      </div>
    </div>
  );
};

export default NoticeListUnit;
