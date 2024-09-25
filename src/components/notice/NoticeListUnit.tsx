import styles from "@styles/notice/noticeList.module.css";

interface NoticeListUnitProps {
  noticeType: string; // 공지 타입 (->NoticeType.tsx)
  title: string;
  thumbNailImgURL: string; // 썸네일 이미지 URL
}

const NoticeListUnit = ({
  noticeType,
  title,
  thumbNailImgURL,
}: NoticeListUnitProps) => {
  return (
    <div className={styles.unitBox}>
      <div className={styles.textBox}>
        <div className={styles.typeText}>{noticeType}</div>
        <div className={styles.titleText}>{title}</div>
      </div>
      <div className={styles.imgBox}>
        <img src={thumbNailImgURL} alt={`${title} image`} />
      </div>
    </div>
  );
};

export default NoticeListUnit;
