import styles from "@styles/notice/noticeDetail.module.css";
import { HeaderWithBack } from "@components/notice/HeaderWithBack";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSlider3 from "@hooks/useSlider3";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import imgExample from "@assets/notice/Booth/booth1.png";
import { InfoBox1 } from "@components/notice/InfoBox1";
import "@styles/notice/slickDots.css";

export const BoothPage = () => {
  const { id } = useParams();
  const images = [imgExample, imgExample, imgExample];
  const sliderSettings3 = useSlider3();
  const mainText =
    "2023 한양대학교 ERICA 가을축제 HYRICA : DDING-DONG\n\n🔔DDING-DONG, FACE STICKER BOOTH가 도착했습니다!🔔\n\n우린 아직 젊기에, 지금 이 순간 있는 그대로 타오르는 청춘의 한 페이지가 될 지금 즐기자, HYRICA!\n\n플리마켓에서 즐길 수 있는 타투 스티커!가을 축제의 마스코트 에리와 리카를 만날 수 있는 타투 스티커를 준비했습니다!다양한 도안 중 원하는 타투 스티커를 하고 즐겁게 축제를 즐겨보아요!\n\n🔔운영 일정\n9월 25일(월) ~ 9월 26일(화) 10:30 ~ 16:30\n\n🔔운영 장소\n플리마켓존 본부\n\n자세한 내용은 카드뉴스를 참고해주세요💛";
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
        <div className={styles.pageTypeText}>부스 소개</div>
        <div className={styles.mainTitle}>
          FACE STICKER BOOTH -타투스티커 편-
        </div>
        <div className={styles.infoBox}>
          <InfoBox1 location="호수공원 앞" date="10/1-2" time="10:30-16:30" />
        </div>
        <div className={styles.mainText}>{mainText}</div>
        <div>{id}</div>
      </div>
    </div>
  );
};
