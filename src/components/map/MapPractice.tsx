import styles from "@styles/map/Map.module.css";
import { useEffect, useState } from "react";
import { addEventHandle } from "@utils/markerManager";
import classNames from "classnames";
import { PlacesSearchProps } from "@type/map";

export const Map = () => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [currCategory, setCurrCategory] = useState<string>(""); //현재 선택된 카테고리
  const [ps, setPs] = useState<kakao.maps.services.Places | null>(null); // 장소 검색 객체 생성

  const placeOverlay = new window.kakao.maps.CustomOverlay({ zIndex: 1 });
  const contentNode = document.createElement("div"); // 커스텀 오버레이의 컨텐츠 엘리먼트
  const markers: kakao.maps.Marker[] = []; // 마커를 담을 배열

  // 처음 실행했을 때
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.297311, 126.835358), // 지도 중심좌표
      level: 3,
    };

    // 지도 생성 및 객체 리턴
    const kakaoMap = new window.kakao.maps.Map(container, options);
    setMap(kakaoMap);

    // Places 객체 초기화
    const placesService = new window.kakao.maps.services.Places(kakaoMap);
    setPs(placesService);

    // 카테고리 검색 요청
    const searchPlaces = () => {
      console.log("searchPlaces 실행됨, 선택된 카테고리:", currCategory);
      if (!currCategory || !ps) {
        return;
      }

      // 커스텀 오버레이 숨김
      placeOverlay.setMap(null);

      // 지도에 표시되고 있는 마커 제거
      removeMarker();

      ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    };

    // 지도에 idle 이벤트 등록
    if (kakaoMap) {
      window.kakao.maps.event.addListener(kakaoMap, "idle", searchPlaces);
    }
  }, []);

  // 커스텀 오버레이 컨텐츠 노드에 css class 추가
  // contentNode.className = "placeinfo_wrap";

  // 커스텀 오버레이 컨텐츠 노드의 이벤트가 지도 객체에 전달되지 않도록
  // addEventHandle({
  //   target: contentNode,
  //   type: "mousedown",
  //   callback: window.kakao.maps.event.preventMap,
  // });
  // addEventHandle({
  //   target: contentNode,
  //   type: "touchstart",
  //   callback: window.kakao.maps.event.preventMap,
  // });

  // 커스텀 오버레이 컨텐츠를 설정
  // placeOverlay.setContent(contentNode);

  // 장소검색이 완료됐을 때 호출되는 콜백함수
  // const placesSearchCB = ({ data, status, pagination }: PlacesSearchProps) => {
  const placesSearchCB = (
    data: PlacesSearchProps[],
    status: kakao.maps.services.Status,
    pagination: any
  ) => {
    console.log("검색상태: ", status);
    if (status === kakao.maps.services.Status.OK) {
      console.log("검색결과: ", data);
      // 정상적으로 검색이 완료됐으면 지도에 마커를 표출
      console.log(status);
      displayPlaces(data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      // 검색 결과 없음
    } else if (status === kakao.maps.services.Status.ERROR) {
      // error
    }
  };

  // 지도에 마커를 표출하는 함수
  const displayPlaces = (places: any) => {
    // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
    // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
    const order = document
      .getElementById(currCategory)
      ?.getAttribute("data-order");

    const orderValue = order ? parseInt(order) : 0;

    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = addMarker(
        new kakao.maps.LatLng(places[i].y, places[i].x),
        orderValue
      );
      console.log(marker);
    }
  };

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수
  const addMarker = (position: kakao.maps.LatLng, order: number) => {
    if (!map) return;
    console.log("마커 위치: ", position);

    const imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(27, 28), // 마커 이미지의 크기
      imgOptions = {
        spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      },
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker); // 배열에 생성된 마커를 추가합니다

    return marker;
  };

  // 지도 위 표시된 마커 모두 제거
  const removeMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers.length = 0;
  };

  // 카테고리를 클릭했을 때
  const onClickCategory = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    const id = target.id;
    const className = target.className;
    placeOverlay.setMap(null);

    // 마커 선택 여부 스타일링
    if (className === "on") {
      setCurrCategory("");
    } else {
      setCurrCategory(id);
    }
  };

  // 해당 위치로 지도 이동
  const markerMover = () => {
    if (map) {
      const moveLatLon = new kakao.maps.LatLng(37.298231, 126.834307);
      map.panTo(moveLatLon);
    }
  };

  return (
    <>
      <div id="map" className={styles.wrapper}></div>
      <ul id={styles.category}>
        <li
          id="AT4"
          data-order="0"
          className={classNames({
            [styles.on]: currCategory === "AT4",
          })}
          onClick={onClickCategory}
        >
          <span>이벤트</span>
        </li>
        <li
          id="PK6"
          data-order="1"
          className={classNames({
            [styles.on]: currCategory === "PK6",
          })}
          onClick={onClickCategory}
        >
          <span>주점</span>
        </li>
        <li
          id="FD6"
          data-order="2"
          className={classNames({
            [styles.on]: currCategory === "FD6",
          })}
          onClick={onClickCategory}
        >
          <span>먹거리</span>
        </li>
        <li
          id="HP8"
          data-order="3"
          className={classNames({
            [styles.on]: currCategory === "HP8",
          })}
          onClick={onClickCategory}
        >
          <span>의무실</span>
        </li>
        <li
          id="PO3"
          data-order="4"
          className={classNames({
            [styles.on]: currCategory === "PO3",
          })}
          onClick={onClickCategory}
        >
          <span>화장실</span>
        </li>
        <li
          id="CS2"
          data-order="5"
          className={classNames({
            [styles.on]: currCategory === "CS2",
          })}
          onClick={onClickCategory}
        >
          <span>흡연실</span>
        </li>
      </ul>
    </>
  );
};
