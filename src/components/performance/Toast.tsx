import { useEffect } from "react";
import styles from "@styles/performance/Toast.module.css";

interface ToastProps {
  message: string;
  setToast: (value: boolean) => void;
}

export const Toast: React.FC<ToastProps> = ({ message = "", setToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1400);
    return () => clearTimeout(timer);
  });
  return (
    <div className={styles.wrap}>
      <div className={styles.toast}>
        <span>{message}</span>
      </div>
    </div>
  );
};
