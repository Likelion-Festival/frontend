import styles from "@styles/artist-slide/Slide.module.css";
// performance type
import { Performance } from "@type/performance/performance";
// slider import
import Slider from "react-slick";
import { CardLoader } from "./CardLoader";

interface SlideProp {
  items: Performance[];
  onlyToday: boolean;
}

const sliderSetting = {
  centerMode: true,
  infinite: false,
  slidesToShow: 1,
  arrows: false,
};

export const Slide: React.FC<SlideProp> = ({ items, onlyToday = false }) => {
  const today = new Date();
  const filteredItems = onlyToday
    ? items.filter((item) => {
        return (
          item.date.getDate() === today.getDate() &&
          item.date.getMonth() === today.getMonth() &&
          item.date.getFullYear() === today.getFullYear()
        );
      })
    : items.filter((item) => item.date.getDate() < today.getDate());
  return (
    <div className={styles.container}>
      <Slider {...sliderSetting}>
        {filteredItems.map((item, index) => {
          return (
            <CardLoader item={item} index={index} key={index} />
          );
        })}
      </Slider>
    </div>
  );
};
