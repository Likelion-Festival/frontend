import { useMapContext } from "@context/MapContext";
import styles from "@styles/map/CategoryDetailFilter.module.css";
import classNames from "classnames";
import { useState } from "react";

export const CategoryDetailFilter = () => {
  const { currCategory } = useMapContext();
  const [detailCategory, setDetailCategory] = useState<number>(0);

  const renderCategoryItems = () => {
    switch (currCategory) {
      case "bar":
        return (
          <>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 1,
              })}
              onClick={() => setDetailCategory(1)}
            >
              공대
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 2,
              })}
              onClick={() => setDetailCategory(2)}
            >
              소융대
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 3,
              })}
              onClick={() => setDetailCategory(3)}
            >
              약학대
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 4,
              })}
              onClick={() => setDetailCategory(4)}
            >
              과기대
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 5,
              })}
              onClick={() => setDetailCategory(5)}
            >
              국문대
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 6,
              })}
              onClick={() => setDetailCategory(6)}
            >
              언정대
            </li>
          </>
        );
      case "event":
        return (
          <>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 7,
              })}
              onClick={() => setDetailCategory(7)}
            >
              호수공원
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 8,
              })}
              onClick={() => setDetailCategory(8)}
            >
              프로모션
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 9,
              })}
              onClick={() => setDetailCategory(9)}
            >
              잔디공원
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 10,
              })}
              onClick={() => setDetailCategory(10)}
            >
              네컷사진
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 11,
              })}
              onClick={() => setDetailCategory(11)}
            >
              기타 이벤트
            </li>
          </>
        );
      case "food":
        return (
          <>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 12,
              })}
              onClick={() => setDetailCategory(12)}
            >
              한식
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 13,
              })}
              onClick={() => setDetailCategory(13)}
            >
              일식
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 14,
              })}
              onClick={() => setDetailCategory(14)}
            >
              양식
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 15,
              })}
              onClick={() => setDetailCategory(15)}
            >
              아시안
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 16,
              })}
              onClick={() => setDetailCategory(16)}
            >
              음료
            </li>
            <li
              className={classNames({
                [styles.selected]: detailCategory === 17,
              })}
              onClick={() => setDetailCategory(17)}
            >
              디저트
            </li>
          </>
        );
      default:
        return null;
    }
  };

  return <ul className={styles.category}>{renderCategoryItems()}</ul>;
};
