import styles from "@styles/notice/noticeDetail.module.css";
import { HeaderWithBack } from "@components/notice/HeaderWithBack";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSlider3 from "@hooks/useSlider3";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import imgExample from "@assets/notice/Booth/booth1.png";
import "@styles/notice/slickDots.css";

export const FestivalPage = () => {
  const { id } = useParams();
  const images = [imgExample, imgExample, imgExample];
  const sliderSettings3 = useSlider3();
  const mainText =
    "2023 한양대학교 ERICA 가을축제 HYRICA : DDING-DONG🔔DDING-DONG, 리카가 도착했습니다!🔔우린 아직 젊기에, 지금 이 순간 있는 그대로타오르는 청춘의 한 페이지가 될 지금즐기자, HYRICA!";
  return (
    <div className={styles.wrapper}>
      <HeaderWithBack />
      <div className={styles.slideContainer}>
        <Slider {...sliderSettings3}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageBox}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.textBody}>
        <div className={styles.pageTypeText}>축제 소개</div>
        <div className={styles.mainTitle}>캐릭터 소개 -리카 편-</div>
        <div className={styles.mainText}>{mainText}</div>
        <div>{id}</div>
      </div>
    </div>
  );
};
