import { eventPositions, foodCourtPositions } from "@constant/map";

// 지도에 마커 표시 여부 결정
export const setMarkersOnMap = (
  markers: kakao.maps.Marker[],
  map: kakao.maps.Map | null
) => {
  markers.forEach((marker) => marker.setMap(map));
};

// 주점 영역 표시
export const drawBarArea = (map: kakao.maps.Map | null) => {
  const polygonPath = [
    new kakao.maps.LatLng(37.295956977687304, 126.83434937451506),
    new kakao.maps.LatLng(37.29541458589114, 126.83469455051171),
    new kakao.maps.LatLng(37.296094913685565, 126.83634816007697),
    new kakao.maps.LatLng(37.29660804620768, 126.8360171543758),
  ];

  const polygon = new kakao.maps.Polygon({
    path: polygonPath, // 다각형 좌표 배열
    strokeWeight: 2,
    strokeColor: "#FF85EE",
    strokeOpacity: 1,
    strokeStyle: "solid",
    fillColor: "#FF85EE",
    fillOpacity: 0.3,
  });

  // 지도에 다각형을 표시
  polygon.setMap(map);
  return polygon;
};

// 먹거리 영역 표시
export const drawFoodCourtArea = (map: kakao.maps.Map | null) => {
  const polygons: kakao.maps.Polygon[] = [];
  foodCourtPositions.forEach((position) => {
    const polygon = new kakao.maps.Polygon({
      path: position, // 다각형 좌표 배열
      strokeWeight: 2,
      strokeColor: "#FF85EE",
      strokeOpacity: 1,
      strokeStyle: "solid",
      fillColor: "#FF85EE",
      fillOpacity: 0.3,
    });

    polygons.push(polygon);
    // 지도에 다각형을 표시
    polygon.setMap(map);
  });
  return polygons;
};

// 이벤트 영역 표시
export const drawEventArea = (map: kakao.maps.Map | null) => {
  const polygons: kakao.maps.Polygon[] = [];
  eventPositions.forEach((position) => {
    const polygon = new kakao.maps.Polygon({
      path: position,
      strokeWeight: 2,
      strokeColor: "#FF85EE",
      strokeOpacity: 1,
      strokeStyle: "solid",
      fillColor: "#FF85EE",
      fillOpacity: 0.3,
    });

    polygons.push(polygon);
    // 지도에 다각형을 표시
    polygon.setMap(map);
  });
  return polygons;
};
