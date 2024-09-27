export interface MarkersType {
  eventMarkers: kakao.maps.Marker[];
  barMarkers: kakao.maps.Marker[];
  foodCourtMarkers: kakao.maps.Marker[];
  medicalMarkers: kakao.maps.Marker[];
  smokingMarkers: kakao.maps.Marker[];
}

export interface MarkerInfoType {
  id: number;
  day: string[];
  category: string;
  subCategory: string;
  name: string;
  index: string;
  time: string;
  total?: string;
  location: string;
  position: kakao.maps.LatLng;
  imagePath: string;
}

export interface clickMarkerListType {
  clickMarkerList?: MarkerInfoType[];
}
