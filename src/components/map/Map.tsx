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
  const [selectedMarker, setSelectedMarker] =
    useState<kakao.maps.Marker | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    day,
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

  const handleMarkerImage = (
    marker: kakao.maps.Marker,
    markerImageSrc: string
  ) => {
    const markerImage = new kakao.maps.MarkerImage(
      markerImageSrc,
      new kakao.maps.Size(50, 60)
    );
    const newMarkerImage = new kakao.maps.MarkerImage(
      markerImageSrc,
      new kakao.maps.Size(60, 72)
    );
    // const prevMarkerImage = new kakao.maps.MarkerImage(
    //   `/marker-img/${selectedMarker.category}-marker.svg`,
    //   imageSize
    // );

    // 기존에 선택된 마커가 없거나 지금 선택된 마커와 다를 때
    if (!selectedMarker || selectedMarker !== marker) {
      console.log("기존 마커: ", selectedMarker, "새로운 마커: ", marker);

      // 기존에 선택된 마커가 있다면
      if (selectedMarker) {
        selectedMarker.setImage(markerImage); // 원래 크기로 되돌리기
      }

      marker.setImage(newMarkerImage); // 현재 선택된 마커 크기 키우기
      setSelectedMarker(marker);
    }
  };

  // 각 카테고리별 마커 생성 및 배열에 추가
  const createMarkersOnMap = (
    category: string,
    markerPosition: kakao.maps.LatLng[],
    imagePath: string
  ) => {
    const newEventMarkers = markerPosition.map((position) => {
      const markerImageSrc = imagePath;
      const markerImage = new kakao.maps.MarkerImage(
        markerImageSrc,
        new kakao.maps.Size(50, 60)
      );

      // 마커 생성
      const marker = new kakao.maps.Marker({
        position: position,
        image: markerImage,
      });

      // 마커 클릭 이벤트 추가
      kakao.maps.event.addListener(marker, "click", () => {
        map?.panTo(position); // 마커 클릭 시 해당 위치로 이동

        // 비교를 위해 lat lng 값만 추출
        const newLatLng = position;
        setCurrMarker(newLatLng);
        setIsCategoryClicked(false);
        setIsNavVisible(true);

        handleMarkerImage(marker, markerImageSrc);
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
      {isOpen && <DaySelectorModal setIsOpen={setIsOpen} />}
      <div id="map" className={styles.map_wrapper}></div>
      {isBottomSheetVisible && <Bottomsheet />}
    </div>
  );
};
