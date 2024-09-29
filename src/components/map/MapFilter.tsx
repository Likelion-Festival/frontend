import { useEffect, useState } from "react";
import styles from "@styles/map/MapFilter.module.css";
import classNames from "classnames";
import {
  drawBarArea,
  drawEventArea,
  drawFoodCourtArea,
  setMarkersOnMap,
} from "@utils/mapUtils";
import { MarkersType } from "@type/map";
import dropDownBtn from "@assets/map/dropdown-btn.svg";
import { useMapContext } from "@context/MapContext";
import arrowBackIcon from "@assets/map/arrow_back_icon.svg";

interface MapFilterProps {
  map: kakao.maps.Map | null;
  markers: MarkersType;
  day: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInputFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MapFilter = ({
  map,
  markers,
  day,
  setIsOpen,
  setIsInputFocus,
}: MapFilterProps) => {
  const [eventArea, setEventArea] = useState<kakao.maps.Polygon[] | null>(null);
  const [barArea, setBarArea] = useState<kakao.maps.Polygon | null>(null);
  const [foodCourtArea, setFoodCourtArea] = useState<
    kakao.maps.Polygon[] | null
  >(null);

  const {
    setCurrMarker,
    currCategory,
    setCurrCategory,
    setSubCategory,
    isCategoryClicked,
    setIsCategoryClicked,
    setIsNavVisible,
    setIsBottomSheetVisible,
  } = useMapContext();

  useEffect(() => {
    console.log(barArea);
  }, [currCategory]);

  // 카테고리 선택 시 이벤트
  const changeMarker = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    const id = target.id;

    setIsCategoryClicked(true);
    setSubCategory("");

    // 현재 선택된 마커 초기화
    setCurrMarker(null);

    // 이벤트 영역 초기화
    if (eventArea) {
      eventArea.forEach((event) => event.setMap(null)); // 이전 다각형 제거
      setEventArea(null); // 상태 초기화
    }

    // 주점 영역 초기화
    if (barArea) {
      barArea.setMap(null); // 이전 다각형 제거
      setBarArea(null); // 상태 초기화
    }

    // 먹거리 영역 초기화
    if (foodCourtArea) {
      foodCourtArea?.forEach((foodCourt) => foodCourt.setMap(null));
      setFoodCourtArea(null);
    }

    // 마커 초기화
    setMarkersOnMap(markers.eventMarkers, null);
    setMarkersOnMap(markers.barMarkers, null);
    setMarkersOnMap(markers.foodCourtMarkers, null);
    setMarkersOnMap(markers.medicalMarkers, null);
    setMarkersOnMap(markers.smokingMarkers, null);
    setMarkersOnMap(markers.toiletMarkers, null);

    switch (id) {
      case "eventMenu":
        setIsNavVisible(false);
        setIsBottomSheetVisible(true);
        map?.panTo(
          new kakao.maps.LatLng(37.29611717143787, 126.83453511611461)
        ); // 해당 위치로 화면 트래킹
        setCurrCategory("event"); // 선택 카테고리 표시

        setMarkersOnMap(markers.eventMarkers, map); // 지도에 마커 표시
        const newEventArea = drawEventArea(map); // 영역 그리기
        setEventArea(newEventArea); // 상태 설정

        break;

      case "barMenu":
        setIsNavVisible(false);
        setIsBottomSheetVisible(true);
        map?.panTo(
          new kakao.maps.LatLng(37.29607777698318, 126.83536134155077)
        );
        setCurrCategory("bar");
        setMarkersOnMap(markers.barMarkers, map);
        const newBarArea = drawBarArea(map);
        setBarArea(newBarArea);
        break;

      case "foodMenu":
        setIsNavVisible(false);
        setIsBottomSheetVisible(true);
        map?.panTo(
          new kakao.maps.LatLng(37.296341663836365, 126.83398762250677)
        );
        setCurrCategory("food");
        setMarkersOnMap(markers.foodCourtMarkers, map);

        const newFoodCourtArea = drawFoodCourtArea(map);
        setFoodCourtArea(newFoodCourtArea);
        break;

      case "medicalMenu":
        setIsNavVisible(false);
        setIsBottomSheetVisible(true);
        map?.panTo(
          new kakao.maps.LatLng(37.29812402209422, 126.83438691733076)
        );

        setCurrCategory("medical");
        setMarkersOnMap(markers.medicalMarkers, map);
        break;

      case "toiletMenu":
        setCurrCategory("toilet");
        setIsCategoryClicked(false); // 카테고리 헤더 없어지지 않게
        setIsBottomSheetVisible(false);
        setIsNavVisible(true);

        setMarkersOnMap(markers.toiletMarkers, map);
        map?.panTo(
          new kakao.maps.LatLng(37.295565768777244, 126.83488031121028)
        );

        break;

      case "smokingMenu":
        setCurrCategory("smoking");
        setIsCategoryClicked(false); // 카테고리 헤더 없어지지 않게
        setIsBottomSheetVisible(false);
        setIsNavVisible(true);
        setMarkersOnMap(markers.smokingMarkers, map);
        break;
    }
  };

  return (
    <>
      {isCategoryClicked ? (
        <div className={styles.wrapper}>
          <img
            src={arrowBackIcon}
            alt="back-arrow"
            onClick={() => {
              setIsCategoryClicked(false);
              setIsNavVisible(true);
            }}
          />
          <h2>
            {currCategory === "event"
              ? "이벤트"
              : currCategory === "bar"
              ? "주점"
              : currCategory === "food"
              ? "먹거리"
              : "의무실"}
          </h2>
        </div>
      ) : (
        <div className={styles.filter_wrapper}>
          <button className={styles.day} onClick={() => setIsOpen(true)}>
            <span>{day}</span>
            <img src={dropDownBtn} alt="dropdown-btn" />
          </button>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="부스, 주점, 키워드를 검색해보세요"
              onFocus={() => setIsInputFocus(true)}
            />
            <button type="submit" />
          </form>

          <ul id={styles.category}>
            <li
              id="eventMenu"
              className={classNames({
                [styles.selected]: currCategory === "event",
              })}
              onClick={changeMarker}
            >
              <span>이벤트</span>
            </li>
            <li
              id="barMenu"
              className={classNames({
                [styles.selected]: currCategory === "bar",
              })}
              onClick={changeMarker}
            >
              <span>주점</span>
            </li>
            <li
              id="foodMenu"
              className={classNames({
                [styles.selected]: currCategory === "food",
              })}
              onClick={changeMarker}
            >
              <span>먹거리</span>
            </li>
            <li
              id="medicalMenu"
              className={classNames({
                [styles.selected]: currCategory === "medical",
              })}
              onClick={changeMarker}
            >
              <span>의무실</span>
            </li>
            <li
              id="toiletMenu"
              className={classNames({
                [styles.selected]: currCategory === "toilet",
              })}
              onClick={changeMarker}
            >
              <span>화장실</span>
            </li>
            <li
              id="smokingMenu"
              className={classNames({
                [styles.selected]: currCategory === "smoking",
              })}
              onClick={changeMarker}
            >
              <span>흡연실</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
