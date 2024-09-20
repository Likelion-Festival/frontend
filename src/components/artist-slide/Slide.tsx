import styles from "@styles/artist-slide/Slide.module.css";
// performance type
import { Performance } from "@type/performance/performance";
// aset load
import Bell from "@assets/performance/bell.svg";
//import BellActive from "@assets/performance/bell-active.svg";
import Location from "@assets/performance/location.svg";
import Time from "@assets/performance/time.svg";
// slider import
import Slider from "react-slick";

import { useNavigate } from "react-router-dom";

interface SlideProp {
  items: Performance[];
  onlyToday: boolean;
}

const sliderSetting = {
  centerMode: true,
  infinite: false,
  slidesToShow: 1,
  arrows: false,
};

export const Slide: React.FC<SlideProp> = ({ items, onlyToday = false }) => {
  const navigate = useNavigate();
  const today = new Date();
  const filteredItems = onlyToday
    ? items.filter((item) => {
        return (
          item.date.getDate() === today.getDate() &&
          item.date.getMonth() === today.getMonth() &&
          item.date.getFullYear() === today.getFullYear()
        );
      })
    : items.filter((item) => item.date.getDate() < today.getDate());

  return (
    <div className={styles.container}>
      <Slider {...sliderSetting}>
        {filteredItems.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.card}
              style={{ backgroundImage: `url(${item.artistImg})` }}
              onClick={() => navigate(`/performance/${index}`)}
            >
              <div
                className={styles.cardImg}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(${item.artistImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className={styles.cardNameBellBox}>
                  <span className={styles.cardName}>{item.artistName}</span>
                  <div className={styles.cardBell}>
                    <img src={Bell} alt="" />
                  </div>
                </div>
                <div className={styles.cardBottomBox}>
                  <div>
                    <span className={styles.cardPlaytime}>
                      {item.playTime % 60 === 0
                        ? `${item.playTime / 60}h`
                        : `${Math.floor(item.playTime / 60)}h ${
                            item.playTime % 60
                          }m`}
                    </span>
                  </div>
                  <div className={styles.cardTimeLocate}>
                    <div>
                      <img src={Time} alt="" />
                      <span>{`${item.date.getHours()}:${
                        item.date.getMinutes() < 10
                          ? `0${item.date.getMinutes()}`
                          : item.date.getMinutes()
                      }~${
                        item.date.getHours() + Math.floor(item.playTime / 60)
                      }:${
                        item.date.getMinutes() + (item.playTime % 60) < 10
                          ? `0${item.date.getMinutes() + (item.playTime % 60)}`
                          : item.date.getMinutes() + (item.playTime % 60)
                      }`}</span>
                    </div>
                    <div>
                      <img src={Location} alt="" />
                      <span>대운동장</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
