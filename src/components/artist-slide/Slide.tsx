import styles from "@styles/artist-slide/Slide.module.css";
import { useState } from "react";
// performance type
import { Performance } from "../../types/performance/performance";
// aset load
import Bell from "@assets/performance/bell.svg";
import BellActive from "@assets/performance/bell-active.svg";
import Location from "@assets/performance/location.svg";
import Time from "@assets/performance/time.svg";

interface SlideProp {
  items: Performance[];
}

export const Slide: React.FC<SlideProp> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [touchPos, setTouchPos] = useState({ mouseX: 0, mouseY: 0 });

  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    // 다음 슬라이드로 이동
  };
  const slidePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    // 이전 슬라이드로 이동
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchPos({
      mouseX: e.touches[0].clientX,
      mouseY: e.touches[0].clientY,
    }); // 마우스 포지션 등록
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>, idx : number) => {
    // x - 슬라이드 임계 값 : 30, y - 스크롤 임계 값 : 5
    const distanceX = e.changedTouches[0].clientX - touchPos.mouseX;
    const distanceY = e.changedTouches[0].clientY - touchPos.mouseY;

    if (distanceY > -5 && distanceY < 5) {
      // 위아래 스크롤
      if (distanceX < -30) {
        slideNext(); // 오른쪽 스크롤
      } else if (distanceX > 30) {
        slidePrev(); // 왼쪽 스크롤
      } else {
        // click
        if(activeIndex !== idx){
          // 옆 슬라이드 클릭 시
          setActiveIndex(idx);
        } else {
          // 콘텐츠 이동
        }
      }
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.wrap}
        style={{
          transform: `translateX(-${activeIndex * 244}px)`, 
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              className={styles.item}
              key={index}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(${item.artistImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchEnd={(e) => handleTouchEnd(e, index)}
            >
              <div className={styles.itemHeader}>
                <span className={styles.itemHeaderSinger}>
                  {item.artistName}
                </span>
                <div className={styles.itemHeaderBell}>
                  <img
                    src={Bell}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              </div>
              <div className={styles.itemFooter}>
                <div>
                  <span className={styles.itemFooterPlaytime}>
                    {item.playTime}
                  </span>
                </div>

                <div className={styles.itemFooterTimePlace}>
                  <div>
                    <img src={Time} alt="" />
                    <span>{item.playTime}</span>
                  </div>
                  <div>
                    <img src={Location} alt="" />
                    <span>대운동장</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
