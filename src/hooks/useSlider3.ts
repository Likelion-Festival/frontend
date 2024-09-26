import { useMemo } from "react";

const useSlider3 = () => {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dotsClass: "dots_custom",
    }),
    []
  );

  return settings;
};

export default useSlider3;
