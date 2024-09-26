import { useMapContext } from "@context/MapContext";
import styles from "@styles/map/DaySelectorModal.module.css";
import classNames from "classnames";

interface DaySelectorModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DaySelectorModal = ({ setIsOpen }: DaySelectorModalProps) => {
  const { day, setDay } = useMapContext();

  return (
    <>
      <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      <div className={styles.wrapper}>
        <ul>
          <li
            className={classNames({
              [styles.selected]: day === "전체",
            })}
            onClick={() => {
              setDay("전체");
              setIsOpen(true);
            }}
          >
            전체
          </li>
          <li
            className={classNames({
              [styles.selected]: day === "1일차",
            })}
            onClick={() => {
              setDay("1일차");
            }}
          >
            1일차
          </li>
          <li
            className={classNames({
              [styles.selected]: day === "2일차",
            })}
            onClick={() => {
              setDay("2일차");
            }}
          >
            2일차
          </li>
          <li
            className={classNames({
              [styles.selected]: day === "3일차",
            })}
            onClick={() => {
              setDay("3일차");
            }}
          >
            3일차
          </li>
        </ul>
      </div>
    </>
  );
};
