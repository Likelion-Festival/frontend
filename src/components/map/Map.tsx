import { useEffect, useState } from "react";
import {
  barPositions,
  eventPositions,
  foodCourtPositions,
} from "@constant/map";
import styles from "@styles/map/Map.module.css";
import spriteImage from "@assets/map/spirte-image-removebg.png";
import classNames from "classnames";

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

  // 마커 이미지 생성
  const createMarkerImage = (
    src: string,
    size: kakao.maps.Size,
    options: kakao.maps.MarkerImageOptions
  ) => {
    const markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;
  };

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
    } else {
      setMarkers((prev) => ({
        ...prev,
        foodCourtMarkers: newEventMarkers,
      }));
    }
  };

  // 지도에 마커 표시 여부 결정
  const setMarkersOnMap = (
    markers: kakao.maps.Marker[],
    map: kakao.maps.Map | null
  ) => {
    markers.forEach((marker) => marker.setMap(map));
  };

  // 마커 선택 시 이벤트
  const changeMarker = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    const id = target.id;

    setMarkersOnMap(markers.eventMarkers, null);
    setMarkersOnMap(markers.barMarkers, null);
    setMarkersOnMap(markers.foodCourtMarkers, null);

    switch (id) {
      case "eventMenu":
        setCurrMarker("event");
        setMarkersOnMap(markers.eventMarkers, map);
        break;
      case "barMenu":
        setCurrMarker("bar");
        setMarkersOnMap(markers.barMarkers, map);
        break;
      case "foodMenu":
        setCurrMarker("food");
        setMarkersOnMap(markers.foodCourtMarkers, map);
        break;
      case "medicalMenu":
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
    createMarkersOnMap("event", eventPositions, 68);
    createMarkersOnMap("bar", barPositions, 0);
    createMarkersOnMap("foodCourt", foodCourtPositions, 136);

    // [
    //   ...markers.eventMarkers,
    //   ...markers.barMarkers,
    //   ...markers.foodCourtMarkers,
    // ].forEach((marker) => {
    //   kakao.maps.event.addListener(
    //     marker,
    //     "click",
    //     (mouseEvent: kakao.maps.event.MouseEvent) => {
    //       console.log(mouseEvent.latLng);
    //       console.log("클릭");
    //     }
    //   );
    // });
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
