import styles from "@styles/notice/noticeDetail.module.css";
import { HeaderWithBack } from "@components/notice/HeaderWithBack";
import { useDataById } from "@hooks/useDataById";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSlider3 from "@hooks/useSlider3";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import "@styles/notice/slickDots.css";
import { InfoBox1 } from "@components/notice/InfoBox1";
import { InfoBox2 } from "@components/notice/InfoBox2";

export const DetailPage = () => {
  const { id } = useParams();
  const pageData = useDataById(id);
  const sliderSettings3 = useSlider3();
  if (!pageData) {
    return <div>데이터를 찾을 수 없습니다.</div>; // TODO: 나중에 에러페이지로 바꾸기
  }
  return (
    <div className={styles.wrapper}>
      <HeaderWithBack />
      <div className={styles.slideContainer}>
        <Slider {...sliderSettings3}>
          {pageData?.images.map((image, index) => (
            <div key={index} className={styles.imageBox}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.textBody}>
        <div className={styles.subTitle}>{pageData.subTitle}</div>
        <div className={styles.mainTitle}>{pageData.mainTitle}</div>
        {pageData.pageType === 1 && (
          <div className={styles.infoBox}>
            <InfoBox1
              location={pageData.location || "정보 없음"}
              date={pageData.date || "정보 없음"}
              time={pageData.time || "정보 없음"}
            />
          </div>
        )}
        {pageData.pageType === 2 && (
          <div className={styles.infoBox}>
            <InfoBox2
              index1={pageData.index1 || "정보 없음"}
              index2={pageData.index2 || "정보 없음"}
              phrase1={pageData.phrase1 || "정보 없음"}
              phrase2={pageData.phrase2 || "정보 없음"}
            />
          </div>
        )}
        <div className={styles.mainText}>{pageData.mainText}</div>
      </div>
    </div>
  );
};
