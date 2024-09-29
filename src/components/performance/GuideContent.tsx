import styles from "@styles/performance/GuideContent.module.css";
import ground from "@assets/performance/ground.webp";
import innerLayout from "@assets/performance/innerlayout.webp";
import { useEffect, useState } from "react";

export const GuideTime = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = ground;
    img.onload = () => {
      setloading(false);
    };
  });
  return (
    <div className={`${styles.wrapper} ${styles.column}`} style={{marginTop : "15px"}}>
      <div className={`${styles.column} ${styles.content}`}>
        <span className={styles.spanHeader}>입장시간</span>
        <span className={styles.spanContent500}>
          16시 40분부터 입장가능합니다.
        </span>
      </div>
      <div className={`${styles.column} ${styles.content}`}>
        <span className={styles.spanHeader}>장소</span>
        <div className={styles.column} style={{ gap: "5px" }}>
          <span className={styles.spanContent500}>대운동장</span>
          {loading ? (
            <div
              className={styles.skeleton}
              style={{ width: "325px", height: "253px" }}
            ></div>
          ) : (
            <img src={ground} alt="" style={{ borderRadius: "5px" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export const GuideEntrance = () => {
  return (
    <div className={`${styles.wrapper} ${styles.column}`} style={{marginTop : "15px"}}>
      <div className={`${styles.column} ${styles.content}`}>
        <span className={styles.spanHeader}>입장안내</span>
        <span className={styles.spanContent400}>
          · ERICA-Zone은 한양대학교 ERICA인 (재학생, 휴학생, 교직원) 대상으로
          제공되는 자리입니다.
        </span>
        <span className={styles.spanContent400}>
          · ERICA-Zone 입장 시 학생증(모바일 학생증 포함), 신분(법적 효력이
          가능한 온라인 신분증 포함) 모두 실물로 필요합니다.
          <br />
          원활한 입장을 위해 학생증과 신분증을 미리 준비해주시길 바랍니다.
        </span>
        <span className={styles.spanContent400}>
          · ERICA-Zone은 한양대학교 ERICA인 (재학생, 휴학생, 교직원) 대상으로
          제공되는 자리입니다.
        </span>
        <span className={styles.spanContent400}>
          · ERICA-Zone 입장 시 학생증(모바일 학생증 포함), 신분(법적 효력이
          가능한 온라인 신분증 포함) 모두 실물로 필요합니다.
          <br />
          원활한 입장을 위해 학생증과 신분증을 미리 준비해주시길 바랍니다.
        </span>
      </div>
    </div>
  );
};

export const GuideLayout = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = ground;
    img.onload = () => {
      setloading(false);
    };
  });
  return (
    <div className={`${styles.wrapper} ${styles.column}`} style={{marginTop : "15px"}}>
      <div className={`${styles.column} ${styles.content}`}>
        <span className={styles.spanHeader}>내부배치도</span>
        <div className={styles.column} style={{ gap: "5px" }}>
          <span className={styles.spanContent400}>
            입장 시 입구를 지나며 안내요원의 안내를 받아
            <br />
            이동해주세요!
          </span>
          {loading ? (
            <div
              className={styles.skeleton}
              style={{ width: "325px", height: "323px" }}
            ></div>
          ) : (
            <img
              src={innerLayout}
              alt=""
              style={{ marginTop: "5px", borderRadius: "5px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
