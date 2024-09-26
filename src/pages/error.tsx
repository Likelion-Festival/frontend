import errorImg from "@assets/error.png";
import styles from "@styles/Error.module.css";

export const ErrorPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={errorImg} alt="에러 이미지" />
        <strong>정보를 불러오지 못했어요</strong>
        <button onClick={() => window.location.reload()}>새로고침 하기</button>
      </div>
    </>
  );
};
