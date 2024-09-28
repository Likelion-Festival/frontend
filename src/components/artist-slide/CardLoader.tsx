import { useState, useEffect } from "react";
import { Performance } from "@type/performance/performance";
import styles from "@styles/artist-slide/Slide.module.css";
import Bell from "@assets/performance/bell.svg";
import BellActive from "@assets/performance/bell-active.svg";
import Location from "@assets/performance/location.svg";
import Time from "@assets/performance/time.svg";
import { useNavigate } from "react-router-dom";
import { useAlarm } from "@hooks/useAlarm";

interface CardLoaderProp {
  item: Performance;
  index: number;
}

export const CardLoader: React.FC<CardLoaderProp> = ({ item, index }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { alarms, handleToggleAlarm } = useAlarm();

  useEffect(() => {
    const img = new Image();
    img.src = item.artistImg;
    img.onload = () => {
      setLoading(false);
    };
  }, [item.artistImg]);

  if (loading) {
    return <div className={styles.skeleton}></div>;
  } else {
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
            <div
              className={styles.cardBell}
              style={{
                backgroundColor: alarms[index]
                  ? "#FF85EE"
                  : "rgba(255, 255, 255, 0.5)",
              }}
              onClick={(event) => {
                event.stopPropagation();
                handleToggleAlarm(index, item.topic);
              }}
            >
              {alarms[index] ? (
                <img src={BellActive} alt="" />
              ) : (
                <img src={Bell} alt="" />
              )}
            </div>
          </div>
          <div className={styles.cardBottomBox}>
            <div>
              <span className={styles.cardPlaytime}>
                {item.playTime % 60 === 0
                  ? `${item.playTime / 60}h`
                  : `${
                      Math.floor(item.playTime / 60) === 0
                        ? ""
                        : Math.floor(item.playTime / 60) + "h"
                    } ${item.playTime % 60}m`}
              </span>
            </div>
            <div className={styles.cardTimeLocate}>
              <div>
                <img src={Time} alt="" />
                <span>{`${item.date.getHours()}:${
                  item.date.getMinutes() < 10
                    ? "0" + item.date.getMinutes()
                    : item.date.getMinutes()
                }~${
                  item.date.getHours() +
                  Math.floor((item.playTime + item.date.getMinutes()) / 60)
                }:${
                  item.date.getMinutes() + (item.playTime % 60) === 0 ||
                  item.date.getMinutes() + (item.playTime % 60) === 60
                    ? "00"
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
  }
};
