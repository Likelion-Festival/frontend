import { useEffect, useState } from "react";
import {
  barMarkerPositions,
  eventMarkerPositions,
  foodCourtMarkerPositions,
  medicalMarkerPositions,
} from "@constant/map";
import styles from "@styles/map/Map.module.css";
import spriteImage from "@assets/map/spirte-image-removebg.png";
import classNames from "classnames";
import {
  createMarkerImage,
  drawBarArea,
  drawEventArea,
  drawFoodCourtArea,
  drawPlaygroundArea,
  setMarkersOnMap,
} from "@utils/mapUtils";

interface MarkersType {
  eventMarkers: kakao.maps.Marker[];
  barMarkers: kakao.maps.Marker[];
  foodCourtMarkers: kakao.maps.Marker[];
  medicalMarkers: kakao.maps.Marker[];
  smokingMarkers: kakao.maps.Marker[];
}

export const Map = () => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [currMarker, setCurrMarker] = useState<string>("");
  const [markers, setMarkers] = useState<MarkersType>({
    eventMarkers: [],
    barMarkers: [],
    foodCourtMarkers: [],
    medicalMarkers: [],
    smokingMarkers: [],
  });
  const [eventArea, setEventArea] = useState<kakao.maps.Polygon[] | null>(null);
  const [barArea, setBarArea] = useState<kakao.maps.Polygon | null>(null);
  const [foodCourtArea, setFoodCourtArea] = useState<kakao.maps.Polygon | null>(
    null
  );

  const [playGroundArea, setPlayGroundArea] =
    useState<kakao.maps.Ellipse | null>(null);

  // 초기 세팅
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.297311, 126.835358), // 지도 중심좌표
      level: 3,
    };

    // 지도 생성 및 객체 리턴
    const kakaoMap = new window.kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  const markerImageSrc = spriteImage;

  // 각 카테고리별 마커 생성 및 배열에 추가
  const createMarkersOnMap = (
    category: string,
    markerPosition: kakao.maps.LatLng[],
    spriteImagePosition: number
  ) => {
    const newEventMarkers = markerPosition.map((position) => {
      const imageSize = new kakao.maps.Size(50, 57);
      const imageOptions = {
        spriteOrigin: new kakao.maps.Point(9, spriteImagePosition),
        spriteSize: new kakao.maps.Size(69, 329),
      };
      const markerImage = createMarkerImage(
        markerImageSrc,
        imageSize,
        imageOptions
      );

      // 마커 생성
      const marker = new kakao.maps.Marker({
        position: position,
        image: markerImage,
      });

      // 마커 클릭 이벤트 추가
      kakao.maps.event.addListener(marker, "click", () => {
        map?.panTo(position); // 마커 클릭 시 해당 위치로 이동
      });

      return marker;
    });

    if (category === "event") {
      setMarkers((prev) => ({
        ...prev,
        eventMarkers: newEventMarkers,
      }));
    } else if (category === "bar") {
      setMarkers((prev) => ({
        ...prev,
        barMarkers: newEventMarkers,
      }));
    } else if (category === "foodCourt") {
      setMarkers((prev) => ({
        ...prev,
        foodCourtMarkers: newEventMarkers,
      }));
    } else if (category === "medical") {
      setMarkers((prev) => ({
        ...prev,
        medicalMarkers: newEventMarkers,
      }));
    }
  };

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

  // 카테고리별 마커 생성
  useEffect(() => {
    createMarkersOnMap("event", eventMarkerPositions, 68);
    createMarkersOnMap("bar", barMarkerPositions, 0);
    createMarkersOnMap("foodCourt", foodCourtMarkerPositions, 136);
    createMarkersOnMap("medical", medicalMarkerPositions, 204);
  }, [map]);

  return (
    <div className={styles.wrapper}>
      <div id="map" className={styles.map_wrapper}></div>
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
