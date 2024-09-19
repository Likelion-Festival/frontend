import { useMemo } from "react";

const useSlider2 = () => {
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false,
    }),
    []
  );

  return settings;
};

export default useSlider2;
