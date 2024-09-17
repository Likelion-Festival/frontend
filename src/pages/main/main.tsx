// main.tsx
import useSlider from "../../hooks/useSlider1";
import useSlider2 from "../../hooks/useSlider2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/MainPage.module.css";

export const MainPage = () => {
  const sliderSettings = useSlider(); // 훅 사용
  const sliderSettings2 = useSlider2();
  const rights1: string =
    "한양대학교 ERICA 멋쟁이사자처럼\n@LIKELION ERICA. All Rights Reserved.";
  const rights2: string = "@Design based by 총동아리연합회_UP";
  return (
    <div className={styles.wrapper}>
      <div className={styles.topMargin} />
      <div className={styles.toplogo}>
        <img src="src/assets/main/top-logo.svg" alt="logo" />
      </div>

      <div className={styles.eventSlideContainer}>
        <Slider {...sliderSettings}>
          <div>
            <div className={styles.eventBox}>
              <div className={styles.eventHeader}>
                <div className={styles.eventLiveLogo}>Live</div>
                <div className={styles.eventIndex}>1/10</div>
              </div>
              <div className={styles.eventPhraseBox}>
                <div className={styles.eventName}>가을 축제 사전 이벤트</div>
                <div className={styles.eventPhrase}>
                  하냥이 키링을 받아갈 기회!
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.eventBox}>
              <div className={styles.eventHeader}>
                <div className={styles.eventLiveLogo}>Live</div>
                <div className={styles.eventIndex}>1/10</div>
              </div>
              <div className={styles.eventPhraseBox}>
                <div className={styles.eventName}>가을 축제 사전 이벤트</div>
                <div className={styles.eventPhrase}>
                  하냥이 키링을 받아갈 기회!
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.eventBox}>
              <div className={styles.eventHeader}>
                <div className={styles.eventLiveLogo}>Live</div>
                <div className={styles.eventIndex}>1/10</div>
              </div>
              <div className={styles.eventPhraseBox}>
                <div className={styles.eventName}>가을 축제 사전 이벤트</div>
                <div className={styles.eventPhrase}>
                  하냥이 키링을 받아갈 기회!
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className={styles.programContainer}>
        <div className={styles.programEntireTitle}>축제 프로그램</div>
        <div className={styles.programSlideContainer}>
          <Slider {...sliderSettings2}>
            <div>
              <div className={styles.programBox}>
                <div className={styles.programImg}></div>
                <div className={styles.programName}>클라이밍 콘텐츠</div>
              </div>
            </div>
            <div>
              <div className={styles.programBox}>
                <div className={styles.programImg}></div>
                <div className={styles.programName}>클라이밍 콘텐츠</div>
              </div>
            </div>
            <div>
              <div className={styles.programBox}>
                <div className={styles.programImg}></div>
                <div className={styles.programName}>클라이밍 콘텐츠</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.noticeContainer}>
        <div className={styles.noticeHeader}>
          <div className={styles.noticeEntireTitle}>공지사항</div>
          <div className={styles.noticeMore}>더보기&nbsp;&nbsp;&gt;</div>
        </div>
        <div className={styles.noticeBoxContainer}>
          <div className={styles.noticeBox}>
            <div className={styles.noticeTitle}>음주구역 안내</div>
            <div className={styles.noticeContent}>
              큰 구역 : 호수공원 옆 도로, 잔디공터 작은 구역 : ...
            </div>
          </div>
          <div className={styles.noticeBox}>
            <div className={styles.noticeTitle}>주류 구매</div>
            <div className={styles.noticeContent}>
              큰 구역 : 호수공원 옆 도로, 잔디공터 작은 구역 : ...
            </div>
          </div>
          <div className={styles.noticeBox}>
            <div className={styles.noticeTitle}>공연장 유의사항 안내</div>
            <div className={styles.noticeContent}>
              큰 구역 : 호수공원 옆 도로, 잔디공터 작은 구역 : ...
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactEntireTitle}>문의사항</div>
        <div className={styles.contactBoxContainer}>
          <div className={styles.contactBox}>
            <div className={styles.contactPhraseBox}>
              <div className={styles.contactPhrase1}>
                이번 축제가 더 궁금하다면?
              </div>
              <div className={styles.contactPhrase2}>
                공식 인스타그램 바로가기
              </div>
            </div>
            <div className={styles.contactIcon}>
              <img src="src/assets/main/UP-logo.svg" />
            </div>
          </div>
          <div className={styles.contactBox}>
            <div className={styles.contactPhraseBox}>
              <div className={styles.contactPhrase1}>축제 앱 어떠셨나요?</div>
              <div className={styles.contactPhrase2}>
                멋사에게 후기를 알려주세요!
              </div>
            </div>
            <div className={styles.contactIcon}>
              <img src="src/assets/main/Likelion-logo.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightsContainer}>
        <div className={styles.rights1}>{rights1}</div>
        <div className={styles.rights2}>{rights2}</div>
      </div>
    </div>
  );
};
