import { motion } from "framer-motion";
import styles from "@styles/map/BottomSheet.module.css";
import { BOTTOM_SHEET_HEIGHT } from "@constant/bottomSheetOption";
import { BottomSheetHeader } from "./BottomSheetHeader";
import { Content } from "./Content";
import { useBottomSheet } from "@hooks/useBottomSheet";
import { MapContext } from "./Map";
import { markerInfo } from "@constant/marker";

import { useContext } from "react";
import { MarkerInfoType } from "@type/map";

export const Bottomsheet = () => {
  const { sheet, content } = useBottomSheet();
  const value = useContext(MapContext);

  const markerList: MarkerInfoType[] = [];

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
