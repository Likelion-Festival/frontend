import styles from "@styles/map/Map.module.css";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.297311, 126.835358),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" className={styles.wrapper}></div>;
};
