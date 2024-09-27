import {
  foodCourtInfo,
  lakeParkInfo,
  eventInfo,
  picnicInfo,
  promotionInfo,
  fleaMarketInfo,
} from "@constant/marker";
import { useMapContext } from "@context/MapContext";
import styles from "@styles/map/Content.module.css";
import { clickMarkerListType, MarkerInfoType } from "@type/map";
import { useEffect, useState } from "react";

export const Content = ({ clickMarkerList }: clickMarkerListType) => {
  const { day, currCategory, isCategoryClicked, subCategory } = useMapContext();

  // 현재 선택된 카테고리에 해당되는 리스트 필터링
  const categoryList = [
    ...eventInfo,
    ...promotionInfo,
    ...picnicInfo,
    ...fleaMarketInfo,
    ...foodCourtInfo,
    ...lakeParkInfo,
  ].filter((marker) => {
    if (!subCategory) {
      // 2차 필터링 없을 때
      return marker.day.includes(day) && marker.category === currCategory;
    } else {
      // 2차 필터링 있을 때
      return (
        marker.day.includes(day) &&
        marker.category === currCategory &&
        marker.subCategory === subCategory
      );
    }
  });

  const [renderList, setRenderList] = useState<MarkerInfoType[]>(categoryList);

  // 카테고리 리스트 렌더링을 기본으로
  useEffect(() => {
    // if (isCategoryClicked || ) {
    setRenderList(categoryList);
    // }
  }, [day, currCategory, isCategoryClicked, subCategory]);

  // 개별 마커 클릭시에만 그 항목 렌더링
  useEffect(() => {
    if (!isCategoryClicked && clickMarkerList && clickMarkerList.length > 0) {
      setRenderList(clickMarkerList);
    }
  }, [clickMarkerList, isCategoryClicked]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.marker_list}>
        {renderList.map((markerInfo) => {
          return (
            <li className={styles.content} key={markerInfo.id}>
              <div className={styles.content_info}>
                <div className={styles.title}>
                  <h3>{markerInfo?.name}</h3>
                  <span>{markerInfo?.index}</span>
                </div>
                <div className={styles.detail}>
                  <strong className={styles.time}>
                    {day === "전체" && currCategory === "food"
                      ? markerInfo?.total || markerInfo.time
                      : (day === "2일차" || day === "3일차") &&
                        currCategory === "food"
                      ? "10월 1~2일 11:00~23:30"
                      : markerInfo?.time}
                  </strong>
                  <strong className={styles.location}>
                    {markerInfo?.location}
                  </strong>
                </div>
              </div>
              <div className={styles.image}>
                <img src={markerInfo?.imagePath} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
