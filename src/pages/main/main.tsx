import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSlider from "@hooks/useSlider1";
import useSlider2 from "@hooks/useSlider2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@styles/main/MainPage.module.css";
import EventSlideUnit from "@components/event/EventSlideUnit";
import ProgramSlideUnit from "@components/program/programSlideUnit";
import FallingLogo from "@assets/main/top-logo.png";
import UpLogo from "@assets/main/UP-logo.png";
import LikelionLogo from "@assets/main/Likelion-logo.png";
import RightVector from "@assets/main/right-vector.svg";
import { useMapContext } from "@context/MapContext";
import useInstagramOpen from "@hooks/useLinkToInsta";
import LaptopIcon from "@assets/main/laptop-icon.png";
import InstagramIcon from "@assets/main/instagram-icon.png";
import allJsonData from "@constant/detailData.json";

export const MainPage = () => {
  const navigate = useNavigate();
  const { setIsNavVisible } = useMapContext();
  const MoveNotice = () => {
    navigate(`/notice-list`);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = useSlider();
  const sliderSettings2 = useSlider2();
  const openInstagramOfUp = useInstagramOpen("hanyang_erica_club_association");
  const openInstagramOfLikelion = useInstagramOpen("likelion_erica");
  const openGoogleForm = () => {
    window.open("https://forms.gle/HjsQi1yt8S9sG7Z19", "_blank");
  };
  const rights1: string =
    "한양대학교 ERICA 멋쟁이사자처럼\n@LIKELION ERICA. All Rights Reserved.";
  const rights2: string = "@Design based by 총동아리연합회_UP";
  const eventIdOrderList = [
    "2",
    "3",
    "5",
    "8",
    "9",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];
  const sortedEventListData = eventIdOrderList
    .map((id) => allJsonData.find((item) => item.id === id))
    .filter((item) => item !== undefined);
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

  useEffect(() => {
    setIsNavVisible(true);
  }, []);

  const moveToDevelopers = () => {
    navigate(`/developers`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topMargin} />
      <div className={styles.toplogo}>
        <img src={FallingLogo} alt="logo" />
      </div>

      <div className={styles.eventSlideContainer}>
        {/* TODO:로딩 구현하기 */}
        <Slider
          {...sliderSettings}
          afterChange={(current: number) => setCurrentSlide(current)}
        >
          {sortedEventListData.map((event, index) => (
            <div
              key={index}
              className={`${styles.eventSlide} ${
                currentSlide === index
                  ? styles.activeSlide
                  : styles.inactiveSlide
              }`}
            >
              <EventSlideUnit
                imgURL={event.images[0]}
                indexText={`${index + 1}/${sortedEventListData.length}`}
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
            <div>
              더보기
              <img
                className={styles.rightVector}
                src={RightVector}
                alt="오른쪽 벡터"
              />
            </div>
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
          <div className={styles.contactBox} onClick={openInstagramOfUp}>
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
          <div className={styles.contactBox} onClick={openGoogleForm}>
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

      {/* 개발자 소개 및 인스타그램 페이지 연결 */}
      <div className={styles.moreInfo}>
        <div className={styles.introDev} onClick={moveToDevelopers}>
          {" "}
          {/* 개발자 소개 페이지로! */}
          <img src={LaptopIcon} className={styles.introDevIcon1} />
          Developers
        </div>
        |
        <div className={styles.introDev} onClick={openInstagramOfLikelion}>
          {" "}
          {/* 멋사 인스타그램으로! */}
          <img src={InstagramIcon} className={styles.introDevIcon2} />
          Instagram
        </div>
      </div>
    </div>
  );
};
