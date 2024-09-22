import { useState } from "react";
import styles from "@styles/map/MapFilter.module.css";
import classNames from "classnames";
import {
  drawBarArea,
  drawEventArea,
  drawFoodCourtArea,
  drawPlaygroundArea,
  setMarkersOnMap,
} from "@utils/mapUtils";
import { MarkersType } from "@type/map";
import dropDownBtn from "@assets/map/dropdown-btn.svg";

interface MapFilterProps {
  map: kakao.maps.Map | null;
  markers: MarkersType;
  day: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MapFilter = ({ map, markers, day, setIsOpen }: MapFilterProps) => {
  const [currMarker, setCurrMarker] = useState<string>("");
  const [eventArea, setEventArea] = useState<kakao.maps.Polygon[] | null>(null);
  const [barArea, setBarArea] = useState<kakao.maps.Polygon | null>(null);
  const [foodCourtArea, setFoodCourtArea] = useState<kakao.maps.Polygon | null>(
    null
  );

  const [playGroundArea, setPlayGroundArea] =
    useState<kakao.maps.Ellipse | null>(null);

  // 마커 선택 시 이벤트
  const changeMarker = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    const id = target.id;

    // 마커 초기화
    setMarkersOnMap(markers.eventMarkers, null);
    setMarkersOnMap(markers.barMarkers, null);
    setMarkersOnMap(markers.foodCourtMarkers, null);
    setMarkersOnMap(markers.medicalMarkers, null);

    // 이벤트 영역 초기화
    if (eventArea) {
      eventArea?.forEach((event) => event.setMap(null)); // 이전 다각형 제거
      setEventArea(null); // 상태 초기화
    }

    // 주점 영역 초기화
    if (barArea) {
      barArea.setMap(null); // 이전 다각형 제거
      setBarArea(null); // 상태 초기화
    }

    // 먹거리 영역 초기화
    if (foodCourtArea) {
      foodCourtArea.setMap(null); // 이전 다각형 제거
      setFoodCourtArea(null); // 상태 초기화
    }

    // 대운동장 영역 초기화
    if (playGroundArea) {
      playGroundArea.setMap(null); // 이전 다각형 제거
      setPlayGroundArea(null); // 상태 초기화
    }

    switch (id) {
      case "eventMenu":
        map?.panTo(
          new kakao.maps.LatLng(37.29649099387646, 126.83445816802536)
        ); // 해당 위치로 화면 트래킹
        setCurrMarker("event"); // 선택 카테고리 표시
        setMarkersOnMap(markers.eventMarkers, map); // 지도에 마커 표시
        const newEventArea = drawEventArea(map); // 영역 그리기
        setEventArea(newEventArea); // 상태 설정

        const newEllipse = drawPlaygroundArea(map);
        setPlayGroundArea(newEllipse);
        break;
      case "barMenu":
        map?.panTo(
          new kakao.maps.LatLng(37.29607777698318, 126.83536134155077)
        );
        setCurrMarker("bar");
        setMarkersOnMap(markers.barMarkers, map);
        const newBarArea = drawBarArea(map);
        setBarArea(newBarArea);
        break;
      case "foodMenu":
        map?.panTo(
          new kakao.maps.LatLng(37.296341663836365, 126.83398762250677)
        );
        setCurrMarker("food");
        setMarkersOnMap(markers.foodCourtMarkers, map);
        const newFoodCourtArea = drawFoodCourtArea(map);
        setBarArea(newFoodCourtArea);
        break;
      case "medicalMenu":
        map?.panTo(
          new kakao.maps.LatLng(37.29812402209422, 126.83438691733076)
        );

        setCurrMarker("medical");
        setMarkersOnMap(markers.medicalMarkers, map);
        break;
      case "toiletMenu":
        setCurrMarker("toilet");
        break;
      case "smokingMenu":
        setCurrMarker("smoking");
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.day} onClick={() => setIsOpen(true)}>
        <span>{day}</span>
        <img src={dropDownBtn} alt="dropdown-btn" />
      </button>
      <form>
        <input type="text" placeholder="부스, 주점, 키워드를 검색해보세요" />
      </form>
      <ul id={styles.category}>
        <li
          id="eventMenu"
          className={classNames({
            [styles.selected]: currMarker === "event",
          })}
          onClick={changeMarker}
        >
          <span>이벤트</span>
        </li>
        <li
          id="barMenu"
          className={classNames({
            [styles.selected]: currMarker === "bar",
          })}
          onClick={changeMarker}
        >
          <span>주점</span>
        </li>
        <li
          id="foodMenu"
          className={classNames({
            [styles.selected]: currMarker === "food",
          })}
          onClick={changeMarker}
        >
          <span>먹거리</span>
        </li>
        <li
          id="medicalMenu"
          className={classNames({
            [styles.selected]: currMarker === "medical",
          })}
          onClick={changeMarker}
        >
          <span>의무실</span>
        </li>
        <li
          id="toiletMenu"
          className={classNames({
            [styles.selected]: currMarker === "toilet",
          })}
          onClick={changeMarker}
        >
          <span>화장실</span>
        </li>
        <li
          id="smokingMenu"
          className={classNames({
            [styles.selected]: currMarker === "smoking",
          })}
          onClick={changeMarker}
        >
          <span>흡연실</span>
        </li>
      </ul>
    </div>
  );
};
