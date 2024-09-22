import { eventPositions } from "@constant/map";

// 마커 이미지 생성
export const createMarkerImage = (
  src: string,
  size: kakao.maps.Size,
  options: kakao.maps.MarkerImageOptions
) => {
  const markerImage = new kakao.maps.MarkerImage(src, size, options);
  return markerImage;
};

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
    path: polygonPath, // 그려질 다각형의 좌표 배열입니다
    strokeWeight: 2, // 선의 두께입니다
    strokeColor: "#FF85EE", // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: "solid", // 선의 스타일입니다
    fillColor: "#FF85EE", // 채우기 색깔입니다
    fillOpacity: 0.3, // 채우기 불투명도 입니다
  });

  // 지도에 다각형을 표시합니다
  polygon.setMap(map);
  return polygon;
};

// 이벤트 영역 표시
export const drawEventArea = (map: kakao.maps.Map | null) => {
  const polygons: kakao.maps.Polygon[] = [];
  eventPositions.forEach((position) => {
    const polygon = new kakao.maps.Polygon({
      path: position, // 그려질 다각형의 좌표 배열입니다
      strokeWeight: 2, // 선의 두께입니다
      strokeColor: "#FF85EE", // 선의 색깔입니다
      strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
      fillColor: "#FF85EE", // 채우기 색깔입니다
      fillOpacity: 0.3, // 채우기 불투명도 입니다
    });

    polygon.setMap(map);
    polygons.push(polygon);

    // 지도에 다각형을 표시합니다
  });
  return polygons;
};

// 대운동장 영역 표시
export const drawPlaygroundArea = (map: kakao.maps.Map | null) => {
  const ellipse = new kakao.maps.Ellipse({
    map: map,
    center: new kakao.maps.LatLng(37.294795066690206, 126.83304929497407),
    rx: 50,
    ry: 100,
    strokeWeight: 2,
    strokeColor: "#FF00FF",
    strokeOpacity: 0.8,
    strokeStyle: "dashed",
    fillColor: "#00EEEE",
    fillOpacity: 0.5,
  });

  ellipse.setMap(map);
  return ellipse;
};
