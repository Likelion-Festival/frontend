import { performances } from "@constant/performance";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// css load
import styles from "@styles/performance/PerformanceDetail.module.css";
// image load
import Back from "@assets/performance/arrow-back.svg";
import Bell from "@assets/performance/bell-pink.svg";
import BellActive from "@assets/performance/bell-active.svg";
import Vertical from "@assets/performance/vertical.svg";
import Location from "@assets/performance/location.svg";
import Time from "@assets/performance/time.svg";
import Calendar from "@assets/performance/calendar.svg";
import Music from "@assets/performance/music.svg";
import { useAlarm } from "@hooks/useAlarm";
import { Modal } from "@components/performance/Modal";
import { useMapContext } from "@context/MapContext";
import { useEffect } from "react";

export const PerformanceDetailPage = () => {
  const params = useParams();
  const navigator = useNavigate();
  const { alarms, handleToggleAlarm, showModal } = useAlarm();
  const { setIsNavVisible } = useMapContext();

  useEffect(() => {
    setIsNavVisible(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!params.id) {
    navigator("error");
    return <div>Invalid ID</div>;
  }

  const id = parseInt(params.id);
  const item = performances[id];

  if (!item) {
    navigator("error");
    return <div>Performance not found</div>;
  }

  return (
    <div>
      <img src={item.artistImg} alt="" className={styles.coverImg} />
      <div className={styles.gradientImg}>
        <div className={styles.header}>
          <img src={Back} alt="" onClick={() => navigator(-1)} />
          <span>공연 가수 정보</span>
        </div>
        <div className={styles.mainImgContainer}>
          <img src={item.artistImg} alt="" className={styles.mainImg} />
          <span className={styles.name}>{item.artistName}</span>
          <div
            className={styles.alarm}
            style={{ backgroundColor: alarms[id] ? "#FF85EE" : "" }}
            onClick={() => handleToggleAlarm(id, item.topic)}
          >
            {alarms[id] ? (
              <img
                src={BellActive}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <img
                src={Bell}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            )}
            <span style={{ color: alarms[id] ? "#141414" : "#FF85EE" }}>
              {alarms[id] ? "알림" : "알림 받기"}
            </span>
          </div>
        </div>
        <div
          className={styles.grayBox}
          style={{ justifyContent: "center", gap: "30px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.iconBox}>
              <img src={Location} alt="" />
              <span>장소</span>
            </div>
            <span className={styles.textWhite}>대운동장</span>
          </div>
          <img src={Vertical} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.iconBox}>
              <img src={Calendar} alt="" />
              <span>날짜</span>
            </div>
            <span className={styles.textWhite}>{`${
              item.date.getMonth() + 1
            }/${item.date.getDate()}`}</span>
          </div>
          <img src={Vertical} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.iconBox}>
              <img src={Time} alt="" />
              <span>시간</span>
            </div>
            <span className={styles.textWhite}>{`${item.date.getHours()}:${
              item.date.getMinutes() < 10
                ? "0" + item.date.getMinutes()
                : item.date.getMinutes()
            }-${
              item.date.getHours() +
              Math.floor((item.playTime + item.date.getMinutes()) / 60)
            }:${
              item.date.getMinutes() + (item.playTime % 60) === 0 ||
              item.date.getMinutes() + (item.playTime % 60) === 60
                ? "00"
                : item.date.getMinutes() + (item.playTime % 60)
            }`}</span>
          </div>
        </div>
        <div
          className={styles.grayBox}
          style={{ flexDirection: "column", gap: "14px" }}
        >
          <span className={styles.artistIntroTitle}>아티스트 소개</span>
          <span className={styles.artistIntroText}>{item.intro}</span>
        </div>
        <div>
          <span className={styles.songs}>대표곡</span>
          <div>
            {item.songs.map((song, index) => (
              <div key={index} className={styles.songBox}>
                <div>
                  <img src={song.img} alt="" className={styles.songImg} />
                  <div>
                    <span className={styles.songTitle}>{song.title}</span>
                    <span className={styles.songArtist}>{item.artistName}</span>
                  </div>
                </div>

                <img
                  src={Music}
                  alt=""
                  className={styles.songIcon}
                  onClick={() => {
                    window.open(song.previewUrl);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && <Modal />}
    </div>
  );
};
