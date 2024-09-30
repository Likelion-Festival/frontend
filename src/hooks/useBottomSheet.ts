import React, { useRef, useEffect, SetStateAction } from "react";
import { MIN_Y, MAX_Y } from "@constant/bottomSheetOption";

interface BottomSheetMetrics {
  // 터치 시작 시
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: "none" | "down" | "up";
  };
  isContentAreaTouched: boolean;
}

export const useBottomSheet = (
  isNavVisible: React.Dispatch<SetStateAction<boolean>>
) => {
  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: "none",
    },
    isContentAreaTouched: false,
  });

  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;
      if (!isContentAreaTouched) {
        return true;
      }
      if (sheet.current!.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }
      if (touchMove.movingDirection === "down") {
        return content.current!.scrollTop <= 0;
      }
      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];
      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY === 0) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = "down";
      }
      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = "up";
      }

      if (canUserMoveBottomSheet()) {
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        }

        if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }

        sheet.current!.style.setProperty(
          "transform",
          `translateY(${nextSheetY - MAX_Y}px)`
        );
      } else {
        document.body.style.overflowY = "hidden";
      }
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = "auto"; // 스크롤 설정
      const { touchMove } = metrics.current;

      const currentSheetY = sheet.current!.getBoundingClientRect().y;

      // 최상단 모서리가 올라갈 수 있는 최대치가 아니라면 아래의 로직을 적용
      if (currentSheetY !== MIN_Y) {
        // 아래로 스크롤하는 경우 && content 터치 X이면 바텀 시트가 가장 작은 크기로 축소
        if (
          touchMove.movingDirection === "down" &&
          !metrics.current!.isContentAreaTouched
        ) {
          sheet.current!.style.setProperty("transform", "translateY(0)");
          isNavVisible(true); // 바텀 시트가 내려간 후 네비게이션을 보이게 설정
        }
        // 위로 스크롤 하는 경우 바텀 시트가 최대의 크기
        if (touchMove.movingDirection === "up") {
          sheet.current!.style.setProperty(
            "transform",
            `translateY(${MIN_Y - MAX_Y}px)`
          );
          isNavVisible(false); // 바텀 시트가 올라간 후 네비게이션을 숨김
        }
      }

      // metrics 초기화.
      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: "none",
        },
        isContentAreaTouched: false,
      };
    };

    sheet.current!.addEventListener("touchstart", handleTouchStart);
    sheet.current!.addEventListener("touchmove", handleTouchMove);
    sheet.current!.addEventListener("touchend", handleTouchEnd);
  }, [isNavVisible]); // Add isNavVisible as a dependency

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current!.isContentAreaTouched = true;
    };
    content.current!.addEventListener("touchstart", handleTouchStart);

    return () =>
      content.current?.removeEventListener("touchstart", handleTouchStart);
  }, []);

  return { sheet, content };
};
