import { motion } from "framer-motion";
import styles from "@styles/map/BottomSheet.module.css";
import { BOTTOM_SHEET_HEIGHT } from "@constant/bottomSheetOption";
import { BottomSheetHeader } from "./BottomSheetHeader";
import { Content } from "./Content";
import { useBottomSheet } from "@hooks/useBottomSheet";

export const Bottomsheet = () => {
  const { sheet, content } = useBottomSheet();

  return (
    <motion.div
      ref={sheet}
      className={styles.wrapper}
      style={{ height: `${BOTTOM_SHEET_HEIGHT}` }}
    >
      <BottomSheetHeader />
      <div className={styles.bottomsheet_wrapper} ref={content}>
        <Content />
      </div>
    </motion.div>
  );
};
