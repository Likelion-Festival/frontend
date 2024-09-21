import { Performance } from "@type/performance/performance";
// load artist png
import Day6 from "@assets/performance/artist/day6.jpg";
import Nmixx from "@assets/performance/artist/nmixx.jpg";

export const performances: Performance[] = [
  {
    artistName: "day6",
    artistImg: Day6,
    date: new Date("2024-10-01T17:00:00"),
    playTime: 90,
    intro:
      "JYP엔터테인먼트 소속 실력파 밴드 DAY6 DAY6(데이식스)는 JYP 엔터테인먼트의 아티스트 레이블 Studio J 소속이며 성진(일렉&메인보컬), Young K(베이 스&보컬&랩), 원필(신디&보컬), 도운(드럼) 네 명으로 구 성된 JYP 최초 남성 4인조 밴드다.",
    songs: [
      {
        title: "한페이지가 될 수 있게",
        img: "",
        previewUrl: "",
      },
    ],
  },
  {
    artistName: "NMIXX",
    artistImg: Nmixx,
    date: new Date("2024-10-01T18:30:00"),
    playTime: 60,
    intro:
      "엔믹스 (NMIXX)는 대한민국의 6인조 걸그룹이다. JYP 엔터테인먼트 소속으로 2022년 2월 22일에 데뷔하였다",
    songs: [
      {
        title: "Dice",
        img: "",
        previewUrl: "",
      },
      {
        title: "Dash",
        img: "",
        previewUrl: "",
      },
    ],
  },
  {
    artistName: "NMIXX",
    artistImg: Nmixx,
    date: new Date("2024-10-01T18:30:00"),
    playTime: 60,
    intro:
      "엔믹스 (NMIXX)는 대한민국의 6인조 걸그룹이다. JYP 엔터테인먼트 소속으로 2022년 2월 22일에 데뷔하였다",
    songs: [
      {
        title: "Dice",
        img: "",
        previewUrl: "",
      },
      {
        title: "Dash",
        img: "",
        previewUrl: "",
      },
    ],
  }
];
