import { useNavigate } from "react-router-dom";
import goBackImg from "@assets/notice/goBackButton.svg";
import styles from "@styles/notice/noticeList.module.css";
import { NoticeType } from "@type/notice/NoticeType";
import NoticeListUnit from "@components/notice/NoticeListUnit";
import thumbnail_eg from "@assets/notice/thumbnails/thumbnail_eg.svg";

export const NoticeListPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const noticeUnits = [
    // TODO: 수정하기
    {
      noticeType: NoticeType.Booth,
      title: "FACE STICKER BOOTH  -타투스티커...",
      thumbNailImgURL: thumbnail_eg,
      id: "1",
    },
    {
      noticeType: NoticeType.Notice,
      title: "FACE STICKER BOOTH  -타투스티커...",
      thumbNailImgURL: thumbnail_eg,
      id: "1",
    },
    {
      noticeType: NoticeType.Festival,
      title: "FACE STICKER BOOTH  -타투스티커...",
      thumbNailImgURL: thumbnail_eg,
      id: "1",
    },
    {
      noticeType: NoticeType.PerformanceGuide,
      title: "FACE STICKER BOOTH  -타투스티커...",
      thumbNailImgURL: thumbnail_eg,
      id: "1",
    },
    {
      noticeType: NoticeType.Notice,
      title: "FACE STICKER BOOTH  -타투스티커...",
      thumbNailImgURL: thumbnail_eg,
      id: "1",
    },
    {
      noticeType: NoticeType.Festival,
      title: "FACE STICKER BOOTH  -타투스티커...",
      thumbNailImgURL: thumbnail_eg,
      id: "1",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.topMargin} />
      <div className={styles.header}>
        <button className={styles.goBack} onClick={handleGoBack}>
          <img src={goBackImg} alt="goBack" />
        </button>
        <div className={styles.entireTitle}>공지사항</div>
      </div>
      <div className={styles.listBody}>
        {noticeUnits.map((noticeUnit, index) => (
          <NoticeListUnit
            key={index}
            noticeType={noticeUnit.noticeType}
            title={noticeUnit.title}
            thumbNailImgURL={noticeUnit.thumbNailImgURL}
            id={noticeUnit.id}
          />
        ))}
      </div>
    </div>
  );
};
