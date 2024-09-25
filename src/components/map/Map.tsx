import { useEffect, useState } from "react";
import {
  barMarkerPositions,
  eventMarkerPositions,
  foodCourtMarkerPositions,
  medicalMarkerPositions,
  smokingMarkerPositions,
} from "@constant/map";
import styles from "@styles/map/Map.module.css";
import { MapFilter } from "./MapFilter";
import { MarkersType } from "@type/map";
import { DaySelectorModal } from "./DaySelectorModal";
import { Bottomsheet } from "./BottomSheet";
import { useMapContext } from "@context/MapContext";

export const Map = () => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [markers, setMarkers] = useState<MarkersType>({
    eventMarkers: [],
    barMarkers: [],
    foodCourtMarkers: [],
    medicalMarkers: [],
    smokingMarkers: [],
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [day, setDay] = useState<string>("1일차");

  const {
    setCurrMarker,
    setIsCategoryClicked,
    setCurrCategory,
    isBottomSheetVisible,
    setIsNavVisible,
  } = useMapContext();

  // 초기 세팅
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(
        37.29644017218779,
        126.83516599926162
      ), // 지도 중심좌표
      level: 3,
    };

    // 지도 생성 및 객체 리턴
    const kakaoMap = new window.kakao.maps.Map(container, options);
    setMap(kakaoMap);

    setIsCategoryClicked(false);
    setCurrCategory("");
  }, []);

  // 각 카테고리별 마커 생성 및 배열에 추가
  const createMarkersOnMap = (
    category: string,
    markerPosition: kakao.maps.LatLng[],
    imagePath: string
  ) => {
    const newEventMarkers = markerPosition.map((position) => {
      const imageSize = new kakao.maps.Size(50, 60);
      const markerImageSrc = imagePath;
      const markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize);

      // 마커 생성
      const marker = new kakao.maps.Marker({
        position: position,
        image: markerImage,
      });

      console.log(marker);
      // 마커 클릭 이벤트 추가
      kakao.maps.event.addListener(marker, "click", () => {
        map?.panTo(position); // 마커 클릭 시 해당 위치로 이동

        // 비교를 위해 lat lng 값만 추출
        const newLatLng = position;
        setCurrMarker(newLatLng);
        setIsCategoryClicked(false);
        setIsNavVisible(true);
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
    } else if (category === "smoking") {
      setMarkers((prev) => ({
        ...prev,
        smokingMarkers: newEventMarkers,
      }));
    }
  };

  // 카테고리별 마커 생성
  useEffect(() => {
    createMarkersOnMap(
      "event",
      eventMarkerPositions,
      "/marker-img/event-marker.svg"
    );
    createMarkersOnMap("bar", barMarkerPositions, "/marker-img/bar-marker.svg");
    createMarkersOnMap(
      "foodCourt",
      foodCourtMarkerPositions,
      "/marker-img/food-marker.svg"
    );
    createMarkersOnMap(
      "medical",
      medicalMarkerPositions,
      "/marker-img/medical-marker.svg"
    );
    createMarkersOnMap(
      "smoking",
      smokingMarkerPositions,
      "/marker-img/smoking-marker.svg"
    );
  }, [map]);

  return (
    <div className={styles.wrapper}>
      <MapFilter map={map} markers={markers} day={day} setIsOpen={setIsOpen} />
      {isOpen && (
        <DaySelectorModal setDay={setDay} onClose={() => setIsOpen(false)} />
      )}
      <div id="map" className={styles.map_wrapper}></div>
      {isBottomSheetVisible && <Bottomsheet />}
    </div>
  );
};
