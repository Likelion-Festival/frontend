import { useNoticeTypeENG, useNoticeTypeKR } from "@hooks/useNoticeTypeText";
import styles from "@styles/notice/noticeList.module.css";
import { NoticeType } from "@type/notice/NoticeType";
import { useNavigate } from "react-router-dom";

interface NoticeListUnitProps {
  noticeType: NoticeType; // 공지 타입 (->NoticeType.tsx)
  title: string;
  thumbNailImgURL: string; // 썸네일 이미지 URL
  id: string;
}

const NoticeListUnit = ({
  noticeType,
  title,
  thumbNailImgURL,
  id,
}: NoticeListUnitProps) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/${useNoticeTypeENG(noticeType)}/${id}`);
  };
  return (
    <div className={styles.unitBox} onClick={onClickHandler}>
      <div className={styles.textBox}>
        <div className={styles.typeText}>{useNoticeTypeKR(noticeType)}</div>
        <div className={styles.titleText}>{title}</div>
      </div>
      <div className={styles.imgBox}>
        <img src={thumbNailImgURL} alt={`${title} image`} />
      </div>
    </div>
  );
};

export default NoticeListUnit;
