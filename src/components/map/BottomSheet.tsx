import { motion } from "framer-motion";
import styles from "@styles/map/BottomSheet.module.css";
import { BOTTOM_SHEET_HEIGHT } from "@constant/bottomSheetOption";
import { BottomSheetHeader } from "./BottomSheetHeader";
import { Content } from "./Content";
import { useBottomSheet } from "@hooks/useBottomSheet";
import { useMapContext } from "@context/MapContext";
import { CategoryDetailFilter } from "./CategoryDetailFilter";
import { getClickMarkerList } from "@utils/markerUtils";

export const Bottomsheet = () => {
  const { sheet, content } = useBottomSheet();
  const { currMarker, currCategory } = useMapContext();

  const clickMarkerList = getClickMarkerList();

  return (
    <>
      <motion.div
        ref={sheet}
        className={styles.wrapper}
        style={{ height: `${BOTTOM_SHEET_HEIGHT}` }}
      >
        <BottomSheetHeader />
        {/* 선택된 마커가 없을 때만 2차 필터링 렌더링 */}
        {currMarker === null && currCategory !== "medical" && (
          <CategoryDetailFilter />
        )}
        <div className={styles.bottomsheet_wrapper} ref={content}>
          <Content clickMarkerList={clickMarkerList} />
        </div>
      </motion.div>
    </>
  );
};
