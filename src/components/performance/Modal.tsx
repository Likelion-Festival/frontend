import { useAlarm } from "@hooks/useAlarm";
import styles from "@styles/performance/Modal.module.css";

export const Modal = () => {
  const { closeModal } = useAlarm();
  return (
    <div className={styles.wrap}>
      <div className={styles.modal}>
        <div className={styles.modalText}>
          <span>알림을 허용을 꼭 해주세요!</span>
          <div>
            허용을 눌러주시면 공연이 시작되기
            <br /> 5분전에 알림을 받으실 수 있습니다.
          </div>
        </div>
        <div className={styles.modalButton} onClick={() => closeModal()}>
          <span>확인</span>
        </div>
      </div>
    </div>
  );
};
