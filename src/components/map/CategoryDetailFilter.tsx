import { useMapContext } from "@context/MapContext";
import styles from "@styles/map/CategoryDetailFilter.module.css";
import classNames from "classnames";

export const CategoryDetailFilter = () => {
  const { currCategory, subCategory, setSubCategory } = useMapContext();

  const renderCategoryItems = () => {
    switch (currCategory) {
      case "bar":
        return (
          <>
            <li
              className={classNames({
                [styles.selected]: subCategory === 1,
              })}
              onClick={() => setSubCategory(1)}
            >
              공대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 2,
              })}
              onClick={() => setSubCategory(2)}
            >
              소융대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 3,
              })}
              onClick={() => setSubCategory(3)}
            >
              약학대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 4,
              })}
              onClick={() => setSubCategory(4)}
            >
              과기대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 5,
              })}
              onClick={() => setSubCategory(5)}
            >
              국문대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 6,
              })}
              onClick={() => setSubCategory(6)}
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
                [styles.selected]: subCategory === 7,
              })}
              onClick={() => setSubCategory(7)}
            >
              호수공원
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 8,
              })}
              onClick={() => setSubCategory(8)}
            >
              프로모션
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 9,
              })}
              onClick={() => setSubCategory(9)}
            >
              잔디공원
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 10,
              })}
              onClick={() => setSubCategory(10)}
            >
              네컷사진
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 11,
              })}
              onClick={() => setSubCategory(11)}
            >
              기타
            </li>
          </>
        );
      case "food":
        return (
          <>
            <li
              className={classNames({
                [styles.selected]: subCategory === 12,
              })}
              onClick={() => setSubCategory(12)}
            >
              한식
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 13,
              })}
              onClick={() => setSubCategory(13)}
            >
              일식
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 14,
              })}
              onClick={() => setSubCategory(14)}
            >
              양식
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 15,
              })}
              onClick={() => setSubCategory(15)}
            >
              아시안
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 16,
              })}
              onClick={() => setSubCategory(16)}
            >
              음료
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === 17,
              })}
              onClick={() => setSubCategory(17)}
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
