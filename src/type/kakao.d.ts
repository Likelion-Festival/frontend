declare namespace kakao.maps {
  class LatLng {
    constructor(lat: number, lng: number);
    getLat(): number;
    getLng(): number;
  }
  class LatLngBounds {
    constructor(southWest: LatLng, northEast: LatLng);
  }

  class Polygon {
    constructor(options: PolygonOptions);
    setMap(map: Map | null): void;
  }

  class Rectangle {
    constructor(options: RectangleOptions);
    setMap(map: Map | null): void;
  }

  class Ellipse {
    constructor(options: EllipseOptions);
    setMap(map: Map | null): void;
    setCenter(center: LatLng): void;
    setRadius(rx: number, ry: number): void;
  }

  class Map {
    constructor(
      container: HTMLElement,
      options: { center: LatLng; level: number }
    );
    panTo(latlng: LatLng): void;
  }

  interface MarkerImageOptions {
    spriteSize?: Size;
    spriteOrigin?: Point;
    offset?: Point;
  }
}

declare namespace kakao.maps.event {
  interface MouseEvent {
    latLng: kakao.maps.LatLng;
  }
}

// Kakao Maps 서비스 상태 정의
declare namespace kakao {
  namespace maps {
    namespace event {
      function addListener(
        target: any,
        eventType: string,
        callback: Function
      ): void;
    }
    class Size {
      constructor(width: number, height: number);
    }
    class Point {
      constructor(x: number, y: number);
    }
    class LatLng {
      constructor(lat: number, lng: number);
    }
    class MarkerImage {
      constructor(src: string, size: Size, options?: any);
    }
    class Marker {
      constructor(options: { position: LatLng; image: MarkerImage });
      setMap(map: any): void;
      setImage(markerImage: MarkerImage): void;
      getPosition(): LatLng;
    }

    class LatLng {
      constructor(lat: number, lng: number);
    }
    namespace services {
      class Places {
        constructor(map: kakao.maps.Map);
        categorySearch(
          category: string,
          callback: (data: any) => void,
          options?: any
        ): void;
      }
      enum Status {
        OK = 0,
        ZERO_RESULT = 1,
        ERROR = 2,
      }
    }
  }
}
