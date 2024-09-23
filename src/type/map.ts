export interface MarkersType {
  eventMarkers: kakao.maps.Marker[];
  barMarkers: kakao.maps.Marker[];
  foodCourtMarkers: kakao.maps.Marker[];
  medicalMarkers: kakao.maps.Marker[];
  smokingMarkers: kakao.maps.Marker[];
}

export interface MarkerInfoType {
  id: number;
  name: string;
  category: string;
  time: string;
  location: string;
  position: kakao.maps.LatLng;
  imagePath: string;
}
