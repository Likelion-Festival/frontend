import { performances } from "@constant/performance";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// css load
import styles from "@styles/performance/PerformanceDetail.module.css";
// image load
import Back from "@assets/performance/arrow-back.svg";
import Bell from "@assets/performance/bell-pink.svg";
import Vertical from "@assets/performance/vertical.svg";  
import Location from "@assets/performance/location.svg";
import Time from "@assets/performance/time.svg";
import Calendar from "@assets/performance/calendar.svg";
import Music from "@assets/performance/music.svg";

export const PerformanceDetailPage = () => {
  const params = useParams();
  const navigator = useNavigate();

  if (!params.id) {
    navigator('error');
    return <div>Invalid ID</div>;
  }

  const id = parseInt(params.id);
  const item = performances[id];

  if (!item) {
    navigator('error');
    return <div>Performance not found</div>;
  }

  return (
    <div>
      <img src={item.artistImg} alt="" className={styles.coverImg} />
      <div className={styles.gradientImg}>
        <div className={styles.header}>
          <img src={Back} alt="" onClick={() => navigator(-1)}/>
          <span>공연 가수 정보</span>
        </div>
        <div className={styles.mainImgContainer}>
          <img src={item.artistImg} alt="" className={styles.mainImg} />
          <span className={styles.name}>{item.artistName}</span>
          <div className={styles.alarm}>
            <img src={Bell} alt="" style={{ width: "20px", height: "20px" }} />
            <span>알림 받기</span>
          </div>
        </div>
        <div className={styles.grayBox} style={{justifyContent : "space-around"}}>
          <div>
            <div className={styles.iconBox}>
              <img src={Location} alt="" />
              <span>장소</span>
            </div>
            <span className={styles.textWhite}>호수 공원 앞</span>
          </div>
          <img src={Vertical} alt="" />
          <div>
            <div className={styles.iconBox}>
              <img src={Calendar} alt="" />
              <span>날짜</span>
            </div>
            <span className={styles.textWhite}>10/1-2</span>
          </div>
          <img src={Vertical} alt="" />
          <div>
            <div className={styles.iconBox}>
              <img src={Time} alt="" />
              <span>시간</span>
            </div>
            <span className={styles.textWhite}>10:30-11:30</span>
          </div>
        </div>
        <div className={styles.grayBox} style={{flexDirection : "column", gap : "14px"}}>
          <span className={styles.artistIntroTitle}>아티스트 소개</span>
          <span className={styles.artistIntroText}>{item.intro}</span>
        </div>  
        <div>
          <span className={styles.songs}>대표곡</span>
          <div>
            {item.songs.map((song, index) => (
              <div key={index} className={styles.songBox}>
                <div>
                <img src={song.img} alt="" className={styles.songImg}/>
                <div>
                  <span className={styles.songTitle}>{song.title}</span>
                  <span className={styles.songArtist}>{item.artistName}</span>
                </div>
                </div>
                
                <img src={Music} alt="" className={styles.songIcon} onClick={() => {window.open(song.previewUrl)}}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
