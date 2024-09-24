import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSlider from "@hooks/useSlider1";
import useSlider2 from "@hooks/useSlider2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@styles/MainPage.module.css";
import EventSlideUnit from "@components/event/EventSlideUnit";
import ProgramSlideUnit from "@components/program/ProgramSlideUnit";
import FallingLogo from "@assets/main/top-logo.svg";
import UpLogo from "@assets/main/UP-logo.svg";
import LikelionLogo from "@assets/main/Likelion-logo.svg";

export const MainPage = () => {
  const navigate = useNavigate();
  const MoveNotice = () => {
    navigate(`/notice`);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = useSlider();
  const sliderSettings2 = useSlider2();
  const rights1: string =
    "한양대학교 ERICA 멋쟁이사자처럼\n@LIKELION ERICA. All Rights Reserved.";
  const rights2: string = "@Design based by 총동아리연합회_UP";
  const events = [
    // TODO: 수정하기
    {
      imgURL: "",
      isOnLive: true,
      mainTitle: "가을 축제 사전 이벤트",
      subTitle: "하냥이 키링을 받아갈 기회!",
    },
    {
      imgURL: "",
      isOnLive: false,
      mainTitle: "겨울 축제 준비 중",
      subTitle: "따뜻한 겨울을 위한 축제!",
    },
    {
      imgURL: "",
      isOnLive: true,
      mainTitle: "봄 축제 미리보기",
      subTitle: "봄바람을 맞이하며 즐기는 축제!",
    },
  ];
  const programs = [
    // TODO: 서버에서 받아오거나 미리 세팅
    {
      programImgURL: "", // 이미지 URL
      programName: "클라이밍 콘텐츠",
    },
    {
      programImgURL: "",
      programName: "푸드 트럭",
    },
    {
      programImgURL: "",
      programName: "공연 무대",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.topMargin} />
      <div className={styles.toplogo}>
        <img src={FallingLogo} alt="logo" />
      </div>

      <div className={styles.eventSlideContainer}>
        <Slider
          {...sliderSettings}
          afterChange={(current: number) => setCurrentSlide(current)}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={`${styles.eventSlide} ${
                currentSlide === index
                  ? styles.activeSlide
                  : styles.inactiveSlide
              }`}
            >
              <EventSlideUnit
                imgURL={event.imgURL}
                isOnLive={event.isOnLive}
                indexText={`${index + 1}/${events.length}`}
                mainTitle={event.mainTitle}
                subTitle={event.subTitle}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.programContainer}>
        <div className={styles.programEntireTitle}>축제 프로그램</div>
        <div className={styles.programSlideContainer}>
          <Slider {...sliderSettings2}>
            {programs.map((program, index) => (
              <ProgramSlideUnit
                key={index}
                programImgURL={program.programImgURL}
                programName={program.programName}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.noticeContainer}>
        <div className={styles.noticeHeader}>
          <div className={styles.noticeEntireTitle}>공지사항</div>
          <button className={styles.noticeMore} onClick={MoveNotice}>
            더보기&nbsp;&nbsp;&gt;
          </button>
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
              <img src={UpLogo} />
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
              <img src={LikelionLogo} />
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
