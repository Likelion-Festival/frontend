import Arrow from "@assets/performance/arrow-back.svg";
import { daysPerformance } from "@constant/performance";

// add styles
import styles from "@styles/performance/Timetable.module.css";
import { nav } from "framer-motion/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Timetable = () => {
  const navigate = useNavigate();
  const parmas = useParams();
  const [currentArtist, setCurrentArtist] = useState("");
  const checkCurrentPerformance = () => {
    if (!(parmas.day === "1" || parmas.day === "2")) return;

    const todayPerformances =
      daysPerformance[Number(parmas.day) - 1].performances;
    const currentPerformance = todayPerformances.find((performance) => {
      console.log();
      return (
        performance.time <= new Date() &&
        new Date() <
          new Date(
            performance.time.getTime() + performance.playTime * 60 * 1000
          )
      );
    });

    if (currentPerformance) setCurrentArtist(currentPerformance?.index);
    else setCurrentArtist("");
  };
  useEffect(() => {
    checkCurrentPerformance();
  });

  const handleButtonClick = () => {
    // const today = new Date();
    if (parmas.day === "1" || parmas.day === "2") {
      navigate(`/performance/${currentArtist}`);
    }
    else {
      console.log("no performance today");
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    const start = new Date();
    start.setHours(16, 30, 0); // 16:30
    const end = new Date();
    end.setHours(22, 0, 0); // 22:00

    while (start <= end) {
      slots.push(start.toTimeString().slice(0, 5));
      start.setMinutes(start.getMinutes() + 30); // 30분 간격
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={Arrow} alt="" onClick={() => navigate(-1)} />
        <span>타임테이블</span>
      </div>

      <span className={styles.nday}>
        {parmas.day === "1" || parmas.day === "2"
          ? parmas.day + "일차"
          : "오늘은 준비된 공연이 없어요"}
      </span>

      {parmas.day === "1" || parmas.day === "2" ? (
        <button className={styles.button} onClick={handleButtonClick}>
          현재 진행중인 공연보기
        </button>
      ) : (
        ""
      )}
      {parmas.day === "1" || parmas.day === "2" ? (
        <span className={styles.playground}>대운동장</span>
      ) : (
        ""
      )}

      {(parmas.day === "1" || parmas.day === "2") &&
        timeSlots.map((time, index) => {
          const filteredPerformance = daysPerformance[
            Number(parmas.day) - 1
          ].performances.find((performance) => {
            return (
              `${performance.time.getHours()}:${
                performance.time.getMinutes() < 10
                  ? "0" + performance.time.getMinutes()
                  : performance.time.getMinutes()
              }` === time
            );
          });

          return (
            <div
              className={styles.tableCell}
              key={index}
              style={{ marginTop: filteredPerformance ? "14px" : "" }}
            >
              {currentArtist === filteredPerformance?.index ? (
                <div
                  className={styles.onplay}
                  style={{
                    height: `${(filteredPerformance.playTime / 30) * 95}px`,
                  }}
                >
                  {" "}
                  <div className={styles.circleLine} style={{top : `${Math.floor(((new Date().getTime() - filteredPerformance.time.getTime()) / 1000 / 60))/filteredPerformance.playTime * filteredPerformance.playTime / 30 * 95}px`}}>
                    <div className={styles.circleLineCircle}></div>
                    <div className={styles.circleLineLine}></div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <span className={styles.tableTime}>{time}</span>
              <div className={styles.tableVertical}></div>
              <div className={styles.tableContent}>
                <span className={styles.tableSinger}>
                  {filteredPerformance ? filteredPerformance.artistName : ""}
                </span>
                <span className={styles.tablePlaytime}>
                  {filteredPerformance
                    ? `${filteredPerformance.time.getHours()}:${
                        filteredPerformance.time.getMinutes() < 10
                          ? "0" + filteredPerformance.time.getMinutes()
                          : filteredPerformance.time.getMinutes()
                      } ~ ${filteredPerformance.time.getHours() + 1}:${
                        filteredPerformance.time.getMinutes() < 10
                          ? "0" + filteredPerformance.time.getMinutes()
                          : filteredPerformance.time.getMinutes()
                      }`
                    : ""}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};
