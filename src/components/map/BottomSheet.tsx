import { motion } from "framer-motion";
import styles from "@styles/map/BottomSheet.module.css";
import { BOTTOM_SHEET_HEIGHT } from "@constant/bottomSheetOption";
import { BottomSheetHeader } from "./BottomSheetHeader";
import { Content } from "./Content";
import { useBottomSheet } from "@hooks/useBottomSheet";
import { MapContext } from "./Map";
import { lakeParkInfo, markerInfo } from "@constant/marker";

import { useContext } from "react";
import { MarkerInfoType } from "@type/map";

export const Bottomsheet = () => {
  const { sheet, content } = useBottomSheet();
  const value = useContext(MapContext); // 사용자가 클릭한 마커 위치 정보

  const markerList: MarkerInfoType[] = [];

  // 호수공원 이벤트 예외처리
  if (
    lakeParkInfo[0].position.getLat() === value?.getLat() &&
    lakeParkInfo[0].position.getLng() === value?.getLng()
  ) {
    lakeParkInfo.map((v) => markerList.push(v));
  }

  // 사용자 클릭 위치 정보와 일치하는 것 찾아내기
  const info = markerInfo.find((marker) => {
    const newLatLng = marker.position;
    return (
      newLatLng.getLat() === value?.getLat() &&
      newLatLng.getLng() === value?.getLng()
    );
  });

  if (info) markerList.push(info);

  return (
    <>
      <motion.div
        ref={sheet}
        className={styles.wrapper}
        style={{ height: `${BOTTOM_SHEET_HEIGHT}` }}
      >
        <BottomSheetHeader />
        <div className={styles.bottomsheet_wrapper} ref={content}>
          <Content markerInfoList={markerList} />
        </div>
      </motion.div>
    </>
  );
};
