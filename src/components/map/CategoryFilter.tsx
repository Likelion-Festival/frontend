import styles from "@styles/map/CategoryFilter.module.css";
import { useState } from "react";

export const CategoryFilter = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.category_list}>
        <li>
          <span>이벤트</span>
        </li>
        <li>
          <span>주점</span>
        </li>
        <li>
          <span>먹거리</span>
        </li>
        <li>
          <span>의무실</span>
        </li>
        <li>
          <span>화장실</span>
        </li>
        <li>
          <span>흡연실</span>
        </li>
      </ul>
    </div>
  );
};
