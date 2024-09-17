import { useMemo } from "react";

const useSlider = () => {
  const settings = useMemo(
    () => ({
      centerMode: true,
      centerPadding: "40px",
      slidesToShow: 1,
      arrows: false,
    }),
    []
  );

  return settings;
};

export default useSlider;
