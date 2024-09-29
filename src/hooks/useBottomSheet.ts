// import { useRef, useEffect } from "react";
// import { MIN_Y, MAX_Y } from "@constant/bottomSheetOption";

// interface BottomSheetMetrics {
//   // 터치 시작 시
//   touchStart: {
//     sheetY: number; // 바텀시트의 최상단 모서리의 높이 Y값
//     touchY: number; // 내가 터치한 곳의 Y값
//   };
//   // 터치하고 움직일 때
//   touchMove: {
//     prevTouchY?: number; // 움직이는 동안의 Y값
//     movingDirection: "none" | "down" | "up"; // 움직이는 방향
//   };
//   isContentAreaTouched: boolean; // 컨텐츠 영역을 터치 하고 있는지
// }

// export const useBottomSheet = () => {
//   const sheet = useRef<HTMLDivElement>(null);

//   const content = useRef<HTMLDivElement>(null);

//   const metrics = useRef<BottomSheetMetrics>({
//     touchStart: {
//       sheetY: 0,
//       touchY: 0,
//     },
//     touchMove: {
//       prevTouchY: 0,
//       movingDirection: "none",
//     },
//     isContentAreaTouched: false,
//   });

//   useEffect(() => {
//     //  바텀시트가 움직일 수 있는지 체크
//     const canUserMoveBottomSheet = () => {
//       const { touchMove, isContentAreaTouched } = metrics.current;

//       // 바텀시트에서 컨텐츠 영역이 아닌 부분을 터치하면 바텀시트를 움직인다
//       if (!isContentAreaTouched) {
//         return true;
//       }
//       // 바텀 시트가 최대로 올라와 있는 상태가 아니라면 바텀 시트를 움직일 수 있다
//       if (sheet.current!.getBoundingClientRect().y !== MIN_Y) {
//         return true;
//       }
//       // 터치한 상태에서 손가락을 아래로 움직였는데(아래로 스크롤) 더 이상 컨텐츠 내용을 올릴것이 없다면
//       // 바텀 시트를 움직인다
//       if (touchMove.movingDirection === "down") {
//         return content.current!.scrollTop <= 0;
//       }
//       return false;
//     };

//     // 터치 시작 시 호출
//     const handleTouchStart = (e: TouchEvent) => {
//       const { touchStart } = metrics.current;

//       // 바텀시트의 최상단 모서리의 높이 Y값 대입
//       touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
//       // 내가 터치한 곳의 Y값 대입
//       touchStart.touchY = e.touches[0].clientY;
//     };

//     // 터치를 유지한 채 움직일 때 (드래그 시) 호출
//     const handleTouchMove = (e: TouchEvent) => {
//       const { touchStart, touchMove } = metrics.current;
//       const currentTouch = e.touches[0];

//       // 드래그 방향 정하기
//       // prevTouchY의 값이 없다면 터치를 처음 시작했을 때의 y축 값을 대입
//       if (touchMove.prevTouchY === undefined) {
//         touchMove.prevTouchY = touchStart.touchY;
//       }

//       // 맨 처음 앱 시작하고 시작시
//       if (touchMove.prevTouchY === 0) {
//         touchMove.prevTouchY = touchStart.touchY;
//       }

//       // 드래그 한 현재의 Y 값이 이전 터치보다 밑에 있다면
//       if (touchMove.prevTouchY < currentTouch.clientY) {
//         touchMove.movingDirection = "down";
//       }

//       // 드래그 한 현재의 Y 값이 이전 터치보다 위에 있다면
//       if (touchMove.prevTouchY > currentTouch.clientY) {
//         touchMove.movingDirection = "up";
//       }

//       // 바텀시트 움직이기
//       if (canUserMoveBottomSheet()) {
//         e.preventDefault();

//         // 드래그 된 현재 위치Y 에서 처음 터치할때의 Y값을 빼준 만큼 이동
//         const touchOffset = currentTouch.clientY - touchStart.touchY;
//         // 이동 후의 바텀 시트의 최상단 높이 (이동 후 Y좌표)
//         let nextSheetY = touchStart.sheetY + touchOffset;

//         if (nextSheetY <= MIN_Y) {
//           nextSheetY = MIN_Y;
//         }

//         if (nextSheetY >= MAX_Y) {
//           nextSheetY = MAX_Y;
//         }

//         sheet.current!.style.setProperty(
//           "transform",
//           `translateY(${nextSheetY - MAX_Y}px)`
//         ); //바닥 만큼 빼기
//       } else {
//         // 컨텐츠를 스크롤하는 동안에는 body가 스크롤 되는 것 방지
//         document.body.style.overflowY = "hidden";
//       }
//     };

//     // 드래그 끝났을 때
//     const handleTouchEnd = () => {
//       document.body.style.overflowY = "auto"; // 스크롤 설정
//       const { touchMove } = metrics.current;

//       // 드래그가 끝난 후 바텀시트의 최상단 모서리 Y값
//       const currentSheetY = sheet.current!.getBoundingClientRect().y;

//       // 최상단 모서리가 올라갈 수 있는 최대치가 아니라면 아래의 로직을 적용
//       if (currentSheetY !== MIN_Y) {
//         // 아래로 스크롤하는 경우 바텀 시트가 가장 작은 크기로 축소
//         if (touchMove.movingDirection === "down") {
//           sheet.current!.style.setProperty("transform", "translateY(0)");
//         }
//         // 위로 스크롤 하는 경우 바텀 시트가 최대의 크기
//         if (touchMove.movingDirection === "up") {
//           sheet.current!.style.setProperty(
//             "transform",
//             `translateY(${MIN_Y - MAX_Y}px)`
//           );
//         }
//       }

//       // metrics 초기화.
//       metrics.current = {
//         touchStart: {
//           sheetY: 0,
//           touchY: 0,
//         },
//         touchMove: {
//           prevTouchY: 0,
//           movingDirection: "none",
//         },
//         isContentAreaTouched: false,
//       };
//     };

//     sheet.current!.addEventListener("touchstart", handleTouchStart);
//     sheet.current!.addEventListener("touchmove", handleTouchMove);
//     sheet.current!.addEventListener("touchend", handleTouchEnd);
//   }, []);

//   useEffect(() => {
//     // 컨텐츠 영역 터치 시에 true값 대입
//     const handleTouchStart = () => {
//       metrics.current!.isContentAreaTouched = true;
//     };
//     content.current!.addEventListener("touchstart", handleTouchStart);
//   }, []);

//   return { sheet, content };
// };

// useBottomSheet.ts
import { useRef, useEffect } from "react";
import { MIN_Y, MAX_Y } from "@constant/bottomSheetOption";

interface BottomSheetMetrics {
  // 터치 시작 시
  touchStart: {
    sheetY: number; // 바텀시트의 최상단 모서리의 높이 Y값
    touchY: number; // 내가 터치한 곳의 Y값
  };
  // 터치하고 움직일 때
  touchMove: {
    prevTouchY?: number; // 움직이는 동안의 Y값
    movingDirection: "none" | "down" | "up"; // 움직이는 방향
  };
  isContentAreaTouched: boolean; // 컨텐츠 영역을 터치 하고 있는지
}

export const useBottomSheet = () => {
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
    //  바텀시트가 움직일 수 있는지 체크
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;

      // 바텀시트에서 컨텐츠 영역이 아닌 부분을 터치하면 바텀시트를 움직인다
      if (!isContentAreaTouched) {
        return true;
      }
      // 바텀 시트가 최대로 올라와 있는 상태가 아니라면 바텀 시트를 움직일 수 있다
      if (sheet.current!.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }
      // 컨텐츠가 최대로 스크롤 되지 않았으면 바텀시트를 움직일 수 없다.
      if (touchMove.movingDirection === "down") {
        return content.current!.scrollTop <= 0;
      }
      return false;
    };

    // 터치 시작 시 호출
    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart } = metrics.current;

      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    // 터치를 유지한 채 움직일 때 (드래그 시) 호출
    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY === 0) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      // 드래그 방향 설정
      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = "down";
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = "up";
      }

      if (canUserMoveBottomSheet()) {
        e.preventDefault(); // 기본 스크롤 차단

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
        // 컨텐츠 스크롤 가능
        document.body.style.overflowY = "hidden";
      }
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = "auto";
      const { touchMove } = metrics.current;

      const currentSheetY = sheet.current!.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === "down") {
          sheet.current!.style.setProperty("transform", "translateY(0)");
        }
        if (touchMove.movingDirection === "up") {
          sheet.current!.style.setProperty(
            "transform",
            `translateY(${MIN_Y - MAX_Y}px)`
          );
        }
      }

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
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current!.isContentAreaTouched = true;
    };
    content.current!.addEventListener("touchstart", handleTouchStart);
  }, []);

  return { sheet, content };
};
