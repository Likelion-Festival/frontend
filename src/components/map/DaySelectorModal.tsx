import styles from "@styles/map/DaySelectorModal.module.css";

interface DaySelectorModalProps {
  setDay: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

export const DaySelectorModal = ({
  setDay,
  onClose,
}: DaySelectorModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.wrapper}>
        <ul>
          <li onClick={() => setDay("1일차")}>1일차</li>
          <li onClick={() => setDay("2일차")}>2일차</li>
          <li onClick={() => setDay("3일차")}>3일차</li>
        </ul>
      </div>
    </div>
  );
};
