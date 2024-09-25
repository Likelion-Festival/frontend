import React, { useEffect, useRef, useState } from "react";
import styles from "@styles/performance/Tooltip.module.css";

interface TooltipProps {
  text: string;
  top: number;
  left: number;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, top, left }) => {
  const [visible, setVisible] = useState(true); // 툴팁 가시성 상태
  const tooltipRef = useRef<HTMLDivElement>(null); // 툴팁 참조

  const handleClickOutside = (event: MouseEvent) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
      setVisible(false); // 외부 클릭 시 툴팁 숨기기
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // 마우스 클릭 이벤트 리스너 추가
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  if (!visible) return null; // 툴팁이 보이지 않게 설정

  return (
    <div
      ref={tooltipRef} // 참조 추가
      className={`${styles.ballon}`} // 애니메이션 클래스 추가
      style={{ top: `${top}px`, left: `${left}px` }} // 툴팁 위치 설정
    >
      {text}
    </div>
  );
};
