import { useMapContext } from "@context/MapContext";
import styles from "@styles/map/CategoryDetailFilter.module.css";
import classNames from "classnames";

export const CategoryDetailFilter = () => {
  const { day, currCategory, subCategory, setSubCategory } = useMapContext();

  const clickSubCategory = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const innerText = target.innerText;

    if (innerText === subCategory) setSubCategory("");
    else setSubCategory(innerText);
  };
  const renderCategoryItems = () => {
    switch (currCategory) {
      case "bar":
        return (
          <>
            <li
              className={classNames({
                [styles.selected]: subCategory === "동아리",
              })}
              onClick={clickSubCategory}
            >
              동아리
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "과기대",
              })}
              onClick={clickSubCategory}
            >
              과기대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "공대",
              })}
              onClick={clickSubCategory}
            >
              공대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "소융대",
              })}
              onClick={clickSubCategory}
            >
              소융대
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "언정대",
              })}
              onClick={clickSubCategory}
            >
              언정대
            </li>

            <li
              className={classNames({
                [styles.selected]: subCategory === "약학대",
              })}
              onClick={clickSubCategory}
            >
              약학대
            </li>
          </>
        );
      case "event":
        return (
          <>
            {day !== "1일차" && (
              <li
                className={classNames({
                  [styles.selected]: subCategory === "호수공원",
                })}
                onClick={clickSubCategory}
              >
                호수공원
              </li>
            )}
            <li
              className={classNames({
                [styles.selected]: subCategory === "프로모션",
              })}
              onClick={clickSubCategory}
            >
              프로모션
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "잔디공원",
              })}
              onClick={clickSubCategory}
            >
              잔디공원
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "네컷사진",
              })}
              onClick={clickSubCategory}
            >
              네컷사진
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "플리마켓",
              })}
              onClick={clickSubCategory}
            >
              플리마켓
            </li>
          </>
        );
      case "food":
        return (
          <>
            <li
              className={classNames({
                [styles.selected]: subCategory === "한식",
              })}
              onClick={clickSubCategory}
            >
              한식
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "일식",
              })}
              onClick={clickSubCategory}
            >
              일식
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "양식",
              })}
              onClick={clickSubCategory}
            >
              양식
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "아시안",
              })}
              onClick={clickSubCategory}
            >
              아시안
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "음료",
              })}
              onClick={clickSubCategory}
            >
              음료
            </li>
            <li
              className={classNames({
                [styles.selected]: subCategory === "디저트",
              })}
              onClick={clickSubCategory}
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
