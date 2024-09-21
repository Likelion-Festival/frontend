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

  // 마커 생성
  const createMarker = (
    position: kakao.maps.LatLng,
    image: kakao.maps.MarkerImage
  ) => {
    const marker = new kakao.maps.Marker({
      position: position,
      image: image,
    });

    return marker;
  };

  // 각 카테고리 마커 생성 및 배열에 추가
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
      return createMarker(position, markerImage);
    });
    console.log(`${markerPosition} : `, newEventMarkers);

    category === "event"
      ? setMarkers((prev) => ({
          ...prev,
          eventMarkers: newEventMarkers,
        }))
      : category === "bar"
      ? setMarkers((prev) => ({
          ...prev,
          barMarkers: newEventMarkers,
        }))
      : setMarkers((prev) => ({
          ...prev,
          foodCourtMarkers: newEventMarkers,
        }));
  };

  // 지도에 마커 표시 여부 결정
  const setMarkersOnMap = (
    markers: kakao.maps.Marker[],
    map: kakao.maps.Map | null
  ) => {
    markers.forEach((marker) => marker.setMap(map));
  };

  // 마커 선택 시 스타일링
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

      //   case "foodMenu":
      //     setMarker("food");
      //     setFoodMarkers(map);
      //     break;
      //   case "medicalMenu":
      //     setMarker("medical");
      //     setMedicalMarkers(map);
      //     break;
      //   case "toiletMenu":
      //     setMarker("toilet");
      //     setToiletMarkers(map);
      //     break;
      //   case "smokingMenu":
      //     setMarker("smoking");
      //     setSmokingMarkers(map);
      //     break;
    }
    // console.log(id);
  };

  // 카테고리별 마커 생성
  useEffect(() => {
    createMarkersOnMap("event", eventPositions, 68);
    createMarkersOnMap("bar", barPositions, 0);
    createMarkersOnMap("foodCourt", foodCourtPositions, 136);
  }, [map]);

  return (
    <>
      <div id="map" className={styles.wrapper}></div>
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
    </>
  );
};
