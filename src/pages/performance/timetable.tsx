import Arrow from "@assets/performance/arrow-back.svg";
import ArrowDown from "@assets/performance/arrow-down.svg";
import NoPerformance from "@assets/performance/noperformance.svg";
import { DaySelect } from "@components/performance/DaySelect";
import { Toast } from "@components/performance/Toast";
import { daysPerformance } from "@constant/performance";
import { useMapContext } from "@context/MapContext";

// add styles
import styles from "@styles/performance/Timetable.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Timetable = () => {
  const navigate = useNavigate();
  const parmas = useParams();
  const [currentDay, setCurrentDay] = useState("1");
  const [currentArtist, setCurrentArtist] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { setIsNavVisible } = useMapContext();

  useEffect(() => {
    setIsNavVisible(false);
  }, []);

  useEffect(() => {
    if (parmas.day === "2" || parmas.day === "3") setCurrentDay(parmas.day);
  }, [parmas.day]);

  const checkCurrentPerformance = () => {
    if (!(currentDay === "2" || currentDay === "3")) return;

    const todayPerformances =
      daysPerformance[Number(currentDay) - 1].performances;
    const currentPerformance = todayPerformances.find((performance) => {
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
    if (parmas.day === "2" || parmas.day === "3") {
      if (Number(currentArtist) >= 0 && currentArtist !== "") {
        navigate(`/performance/${currentArtist}`);
        return;
      }
    }
    setShowToast(true);
    return;
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

      <div className={styles.ndayBox} onClick={() => setShowModal(true)}>
        <span className={styles.nday}>{currentDay}일차</span>
        <img src={ArrowDown} alt="" />
      </div>

      <button className={styles.button} onClick={handleButtonClick}>
        현재 진행중인 공연보기
      </button>
      {currentDay === "1" ? (
        <div className={styles.noPerformance}>
          <div>오늘은 공연이 없어요.</div>
          <div>
            날짜를 선택하고 예정된 공연 타임테이블을
            <br /> 미리 확인해보세요!
          </div>
          <img src={NoPerformance} alt="" />
        </div>
      ) : (
        <span className={styles.playground}>대운동장</span>
      )}

      {(currentDay === "2" || currentDay === "3") &&
        timeSlots.map((time, index) => {
          const filteredPerformance = daysPerformance[
            Number(currentDay) - 1
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
                  <div
                    className={styles.circleLine}
                    style={{
                      top: `${
                        (((Math.floor(
                          (new Date().getTime() -
                            filteredPerformance.time.getTime()) /
                            1000 /
                            60
                        ) /
                          filteredPerformance.playTime) *
                          filteredPerformance.playTime) /
                          30) *
                        95
                      }px`,
                    }}
                  >
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
      {showModal && (
        <DaySelect
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          setshowModal={setShowModal}
        />
      )}
      {showToast && (
        <Toast
          message="현재 진행중인 공연이 없습니다."
          setToast={setShowToast}
        />
      )}
    </div>
  );
};
