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
  const MoveDetailPageWithID = (id: string) => {
    if (id && !isDragging) {
      // 드래그 중일 때는 onClick 방지
      navigate(`detail/${id}`);
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태 관리
  // const sliderSettings = useSlider();
  // const sliderSettings2 = useSlider2();
  const sliderSettings = {
    ...useSlider(),
    beforeChange: () => setIsDragging(true), // 슬라이드 이동 전에 드래그 상태 설정
    afterChange: (current: number) => {
      setIsDragging(false); // 슬라이드 이동 후 드래그 상태 해제
      setCurrentSlide(current); // 현재 슬라이드 업데이트
    },
  };
  const sliderSettings2 = {
    ...useSlider2(),
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };
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
  const programIdOrderList = ["103", "102", "101", "104", "105", "106"];
  const noticeIdOrderList = ["4", "7", "10"];
  const sortedEventListData = eventIdOrderList
    .map((id) => allJsonData.find((item) => item.id === id))
    .filter((item) => item !== undefined);
  const sortedProgramListData = programIdOrderList
    .map((id) => allJsonData.find((item) => item.id === id))
    .filter((item) => item !== undefined);
  const sortedNoticeListData = noticeIdOrderList
    .map((id) => allJsonData.find((item) => item.id === id))
    .filter((item) => item !== undefined);

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
        <Slider {...sliderSettings}>
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
                onClick={() => MoveDetailPageWithID(event.id)}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.programContainer}>
        <div className={styles.programEntireTitle}>축제 프로그램</div>
        <div className={styles.programSlideContainer}>
          <Slider {...sliderSettings2}>
            {sortedProgramListData.map((program, index) => (
              <ProgramSlideUnit
                key={index}
                programImgURL={`/program-thumbnails/${program.id}.png`}
                programName={program.mainTitle}
                onClick={() => MoveDetailPageWithID(program.id)}
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
          {sortedNoticeListData.map((notice, index) => (
            <div
              key={index}
              className={styles.noticeBox}
              onClick={() => MoveDetailPageWithID(notice.id)}
            >
              <div className={styles.noticeTitle}>{notice.mainTitle}</div>
              <div className={styles.noticeContent}>
                평행세계의 경계를 지키는 Fall:ing Keeper 를 소개합니다!
              </div>
            </div>
          ))}
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
