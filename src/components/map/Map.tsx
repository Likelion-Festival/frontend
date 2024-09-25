import { useEffect, useState } from "react";
import {
  barMarkerPositions,
  eventMarkerPositions,
  foodCourtMarkerPositions,
  medicalMarkerPositions,
  smokingMarkerPositions,
} from "@constant/map";
import styles from "@styles/map/Map.module.css";
import spriteImage from "@assets/map/spirte-image-removebg.png";
import { createMarkerImage } from "@utils/mapUtils";
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
    createMarkersOnMap("event", eventMarkerPositions, 68);
    createMarkersOnMap("bar", barMarkerPositions, 0);
    createMarkersOnMap("foodCourt", foodCourtMarkerPositions, 136);
    createMarkersOnMap("medical", medicalMarkerPositions, 204);
    createMarkersOnMap("smoking", smokingMarkerPositions, 272);
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
