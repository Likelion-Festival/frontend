import { useEffect, useRef, useState } from "react";
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
import { getClickMarkerList } from "@utils/markerUtils";

export const Map = () => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [markers, setMarkers] = useState<MarkersType>({
    eventMarkers: [],
    barMarkers: [],
    foodCourtMarkers: [],
    medicalMarkers: [],
    smokingMarkers: [],
  });
  // const [selectedMarker, setSelectedMarker] =
  //   useState<kakao.maps.Marker | null>(null);
  const selectedMarkerRef = useRef<kakao.maps.Marker | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    day,
    setCurrMarker,
    isCategoryClicked,
    setIsCategoryClicked,
    setCurrCategory,
    setSubCategory,
    isBottomSheetVisible,
    setIsBottomSheetVisible,
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
    setIsBottomSheetVisible(false);
    setCurrCategory("");
    setSubCategory("");
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

    // (지금 선택된 마커와 다른)기존에 선택된 마커가 있다면
    if (selectedMarkerRef.current) {
      selectedMarkerRef.current.setImage(markerImage); // 원래 크기로 되돌리기
    }

    marker.setImage(newMarkerImage); // 현재 선택된 마커 크기 키우기
    selectedMarkerRef.current = marker;
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
        setSubCategory("");
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

  useEffect(() => {
    // 카테고리 클릭 시 모든 마커 초기화
    if (isCategoryClicked) {
      // 선택된 마커가 있다면 기존 카테고리의 마커들을 초기화
      if (selectedMarkerRef.current) {
        const resetMarkerImage = (
          markersArray: kakao.maps.Marker[],
          imagePath: string
        ) => {
          const markerImage = new kakao.maps.MarkerImage(
            imagePath,
            new kakao.maps.Size(50, 60)
          );
          markersArray.forEach((marker) => {
            marker.setImage(markerImage); // 모든 마커의 이미지를 초기화
          });
        };

        // 각각의 마커 배열 초기화
        resetMarkerImage(markers.eventMarkers, "/marker-img/event-marker.svg");
        resetMarkerImage(markers.barMarkers, "/marker-img/bar-marker.svg");
        resetMarkerImage(
          markers.foodCourtMarkers,
          "/marker-img/food-marker.svg"
        );
        resetMarkerImage(
          markers.medicalMarkers,
          "/marker-img/medical-marker.svg"
        );
        resetMarkerImage(
          markers.smokingMarkers,
          "/marker-img/smoking-marker.svg"
        );
      }
    }
  }, [isCategoryClicked]);

  // 클릭한 마커 리스트(들) 가져오기
  const clickMarkerList = getClickMarkerList();

  return (
    <div className={styles.wrapper}>
      <MapFilter map={map} markers={markers} day={day} setIsOpen={setIsOpen} />
      {isOpen && <DaySelectorModal setIsOpen={setIsOpen} />}
      <div id="map" className={styles.map_wrapper}></div>
      {isBottomSheetVisible && (
        <Bottomsheet clickMarkerList={clickMarkerList} />
      )}
    </div>
  );
};
