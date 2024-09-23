import { lakeParkInfo, markerInfo } from "@constant/marker";
import { useMapContext } from "@context/MapContext";
import styles from "@styles/map/Content.module.css";
import { MarkerInfoType } from "@type/map";
import { useEffect, useState } from "react";

interface ContentProps {
  markerInfoList?: MarkerInfoType[];
}

export const Content = ({ markerInfoList }: ContentProps) => {
  const { currCategory } = useMapContext();
  // 현재 선택된 카테고리에 해당되는 리스트 필터링
  const categoryList = [...markerInfo, ...lakeParkInfo].filter(
    (marker) => marker.category === currCategory
  );

  const [renderList, setRenderList] = useState<MarkerInfoType[]>(categoryList);

  // 카테고리 리스트 렌더링을 기본으로
  useEffect(() => {
    setRenderList(categoryList);
  }, [currCategory]);

  // 개별 마커 클릭시에만 항목 렌더링
  useEffect(() => {
    if (markerInfoList && markerInfoList.length > 0) {
      setRenderList(markerInfoList);
    }
  }, [markerInfoList]);

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
                  <strong className={styles.time}>{markerInfo?.time}</strong>
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
