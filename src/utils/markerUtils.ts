import {
  foodCourtInfo,
  lakeParkInfo,
  eventInfo,
  picnicInfo,
  promotionInfo,
  fleaMarketInfo,
} from "@constant/marker";
import { MarkerInfoType } from "@type/map";
import { useMapContext } from "@context/MapContext";

export const getClickMarkerList = () => {
  // 사용자가 클릭한 마커 위치 정보
  const { day, currMarker } = useMapContext();

  // 사용자가 클릭한 마커 정보 담는 배열
  const clickMarkerList: MarkerInfoType[] = [];

  // 호수공원 마커 클릭 시
  if (
    lakeParkInfo[0].position.getLat() === currMarker?.getLat() &&
    lakeParkInfo[0].position.getLng() === currMarker?.getLng()
  ) {
    // 해당 day에 진행하는 이벤트 필터링
    const filterdMarkers = lakeParkInfo.filter((v) => v.day.includes(day));
    filterdMarkers.map((v) => clickMarkerList.push(v));
  } else if (
    // 피크닉 마커 클릭 시
    picnicInfo[0].position.getLat() === currMarker?.getLat() &&
    picnicInfo[0].position.getLng() === currMarker?.getLng()
  ) {
    picnicInfo.map((v) => clickMarkerList.push(v));
  } else if (
    // 프로모션 마커 클릭 시
    promotionInfo[0].position.getLat() === currMarker?.getLat() &&
    promotionInfo[0].position.getLng() === currMarker?.getLng()
  ) {
    promotionInfo.map((v) => clickMarkerList.push(v));
  } else if (
    // 플리마켓 마커 클릭 시
    fleaMarketInfo[0].position.getLat() === currMarker?.getLat() &&
    fleaMarketInfo[0].position.getLng() === currMarker?.getLng()
  ) {
    fleaMarketInfo.map((v) => clickMarkerList.push(v));
  } else if (
    // 먹거리 마커 클릭 시
    foodCourtInfo[0].position.getLat() === currMarker?.getLat() &&
    foodCourtInfo[0].position.getLng() === currMarker?.getLng()
  ) {
    foodCourtInfo.map((v) => clickMarkerList.push(v));
  }

  // 사용자 클릭 위치 정보와 일치하는 마커 1개 찾아내기
  const info = eventInfo.find((marker) => {
    const newLatLng = marker.position;
    return (
      marker.day.includes(day) &&
      newLatLng.getLat() === currMarker?.getLat() &&
      newLatLng.getLng() === currMarker?.getLng()
    );
  });
  if (info) clickMarkerList.push(info);

  return clickMarkerList;
};
