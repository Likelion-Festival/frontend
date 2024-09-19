import { useEffect, useState } from "react";
import { barPositions, eventPositions } from "@constant/map";
import styles from "@styles/map/Map.module.css";
import spriteImage from "@assets/map/spirte-image-removebg.png";
import classNames from "classnames";

export const Map = () => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [marker, setMarker] = useState<string>("");

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
  const eventMarkers: kakao.maps.Marker[] = [];
  const barMarkers: kakao.maps.Marker[] = [];
  const foodCourtMarkers: kakao.maps.Marker[] = [];
  const medicalMarkers: kakao.maps.Marker[] = [];
  const somkingMarkers: kakao.maps.Marker[] = [];

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

  // 이벤트존 마커 생성 및 배열에 추가
  const createEventMarkers = () => {
    for (let i = 0; i < eventPositions.length; i++) {
      const imageSize = new kakao.maps.Size(50, 57),
        imageOptions = {
          spriteOrigin: new kakao.maps.Point(9, 68),
          spriteSize: new kakao.maps.Size(69, 329),
        };

      // 마커이미지와 마커 생성
      const markerImage = createMarkerImage(
          markerImageSrc,
          imageSize,
          imageOptions
        ),
        marker = createMarker(eventPositions[i], markerImage);

      // 생성된 마커를 커피숍 마커 배열에 추가
      eventMarkers.push(marker);
    }
  };
  const setEventMarkers = (map: kakao.maps.Map | null) => {
    for (let i = 0; i < eventMarkers.length; i++) {
      eventMarkers[i].setMap(map);
    }
  };

  // 주점 마커 생성 및 배열에 추가
  const createBarMarkers = () => {
    for (let i = 0; i < barPositions.length; i++) {
      const imageSize = new kakao.maps.Size(50, 57),
        imageOptions = {
          spriteOrigin: new kakao.maps.Point(9, 0),
          spriteSize: new kakao.maps.Size(69, 329),
        };

      // 마커이미지와 마커 생성
      const markerImage = createMarkerImage(
          markerImageSrc,
          imageSize,
          imageOptions
        ),
        marker = createMarker(barPositions[i], markerImage);

      // 생성된 마커를 커피숍 마커 배열에 추가
      barMarkers.push(marker);
    }
  };
  const setBarMarkers = (map: kakao.maps.Map | null) => {
    for (let i = 0; i < barMarkers.length; i++) {
      barMarkers[i].setMap(map);
    }
  };

  // 마커 선택 시 스타일링
  const changeMarker = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    const id = target.id;

    setEventMarkers(null);
    setBarMarkers(null);
    // setFoodMarkers(null);
    // setMedicalMarkers(null);
    // setToiletMarkers(null);
    // setSmokingMarkers(null);

    console.log(eventMarkers);
    switch (id) {
      case "eventMenu":
        setMarker("event");
        setEventMarkers(map);
        break;
      case "barMenu":
        setMarker("bar");
        setBarMarkers(map);
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
  createEventMarkers();
  createBarMarkers();

  return (
    <>
      <div id="map" className={styles.wrapper}></div>
      <ul id={styles.category}>
        <li
          id="eventMenu"
          className={classNames({
            [styles.selected]: marker === "event",
          })}
          onClick={changeMarker}
        >
          <span>이벤트</span>
        </li>
        <li
          id="barMenu"
          className={classNames({
            [styles.selected]: marker === "bar",
          })}
          onClick={changeMarker}
        >
          <span>주점</span>
        </li>
        <li
          id="foodMenu"
          className={classNames({
            [styles.selected]: marker === "food",
          })}
          onClick={changeMarker}
        >
          <span>먹거리</span>
        </li>
        <li
          id="medicalMenu"
          className={classNames({
            [styles.selected]: marker === "medical",
          })}
          onClick={changeMarker}
        >
          <span>의무실</span>
        </li>
        <li
          id="toiletMenu"
          className={classNames({
            [styles.selected]: marker === "toilet",
          })}
          onClick={changeMarker}
        >
          <span>화장실</span>
        </li>
        <li
          id="smokingMenu"
          className={classNames({
            [styles.selected]: marker === "smoking",
          })}
          onClick={changeMarker}
        >
          <span>흡연실</span>
        </li>
      </ul>
    </>
  );
};
