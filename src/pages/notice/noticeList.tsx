import { useNavigate } from "react-router-dom";
import goBackImg from "@assets/notice/goBackButton.svg";
import styles from "@styles/notice/noticeList.module.css";
import NoticeListUnit from "@components/notice/NoticeListUnit";
import allJsonData from "@constant/detailData.json";
import { useEffect } from "react";
import { useMapContext } from "@context/MapContext";

export const NoticeListPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const idOrderList = [
    "12",
    "11",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "14",
    "15",
    "13",
  ];

  const { setIsNavVisible } = useMapContext();

  useEffect(() => {
    setIsNavVisible(false);
  }, []);

  const sortedListData = idOrderList
    .map((id) => allJsonData.find((item) => item.id === id)) // id에 맞는 데이터를 JSON에서 찾음
    .filter((item) => item !== undefined); // undefined인 경우 제외
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
        {sortedListData.length > 0 ? (
          sortedListData.map((noticeUnit) => (
            <NoticeListUnit
              key={noticeUnit.id}
              subTitle={noticeUnit.subTitle}
              title={noticeUnit.mainTitle}
              thumbNailImgURL={noticeUnit.images[0]}
              id={noticeUnit.id}
            />
          ))
        ) : (
          <div>로딩 중...</div>
        )}
      </div>
    </div>
  );
};
