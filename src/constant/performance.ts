import { Performance } from "@type/performance/performance";
// load artist png
// LEYUKA IMG IMPORT
import LEEYUKA from "@assets/performance/artist/leeyuka.jpg";
import WIWM from "@assets/performance/artist/songs/worldiswithoutme.jpg";
import SIMON from "@assets/performance/artist/songs/simon.jpg";
// LUCY IMG IMPORT
import LUCY from "@assets/performance/artist/lucy.jpg";
import FlOWER from "@assets/performance/artist/songs/flowering.jpg";
import HAZE from "@assets/performance/artist/songs/haze.jpg";
// LE SSERAFIM IMG IMPORT
import LESERRAFIM from "@assets/performance/artist/lesserafim.jpg";
import CRAZY from "@assets/performance/artist/songs/crazy.jpg";
import SMART from "@assets/performance/artist/songs/smart.jpeg";
// KimSooYoung IMG IMPORT
import KSY from "@assets/performance/artist/ksy.jpeg";
import BlANK from "@assets/performance/artist/songs/blank.jpg";
import STUMBLE from "@assets/performance/artist/songs/stumble.jpeg";
// Yelo IMG IMPORT
import YELO from "@assets/performance/artist/yelo.jpeg";
import SECRET from "@assets/performance/artist/songs/scret.jpg";
import IGNITE from "@assets/performance/artist/songs/ignite.jpg";
// n.flying IMG IMPORT
import NFlYING from "@assets/performance/artist/nflying.jpg";
import AUTHUMNDREAM from "@assets/performance/artist/songs/authumndream.jpg";
import TURBULENCE from "@assets/performance/artist/songs/turbulence.jpg";
// STAYC IMG IMPORT
import STAYC from "@assets/performance/artist/stayc.jpeg";
import BUBBLE from "@assets/performance/artist/songs/bubble.jpg";
import SOBAD from "@assets/performance/artist/songs/sobad.jpg";

export const performances: Performance[] = [
  {
    artistName: "LEEYUKA",
    artistImg: LEEYUKA,
    date: new Date("2024-10-01T17:00:00"),
    playTime: 60,
    intro:
      "슬픔과 아픔, 설렘과 고통 등 인간이 느끼는 감정을 서정적이며 강렬한 카타르시스로 노래하는, 존재자체가 장르라고 불릴 만큼 독보적인 음색으로 Alternative Rock을 노래하는 여성 싱어송라이터",
    songs: [
      {
        title: "세상은 내가 없어도",
        img: WIWM,
        previewUrl: "https://www.youtube.com/watch?v=O6mHm0WLK8U",
      },
      {
        title: "시몬",
        img: SIMON,
        previewUrl: "https://www.youtube.com/watch?v=bVaSORquu30",
      },
    ],
  },
  {
    artistName: "LUCY",
    artistImg: LUCY,
    date: new Date("2024-10-01T18:00:00"),
    playTime: 60,
    intro:
      "루시는 대한민국의 4인조 인디 록밴드이다. 2019년 JTBC에서 방영된 《슈퍼밴드》에서 결성되었으며, 이 프로그램에서 2위를 하였다. 2020년 5월 8일 데뷔 앨범 《DEAR.》를 발매하였다.",
    songs: [
      {
        title: "개화",
        img: FlOWER,
        previewUrl: "https://www.youtube.com/watch?v=2-P-NIiLiQc",
      },
      {
        title: "아지랑이",
        img: HAZE,
        previewUrl: "https://www.youtube.com/watch?v=3qtrJHLjfEI",
      },
    ],
  },

  {
    artistName: "LE SSERAFIM",
    artistImg: LESERRAFIM,
    date: new Date("2024-10-01T19:00:00"),
    playTime: 60,
    intro:
      "르세라핌은 대한민국의 5인조 다국적 걸 그룹으로, 하이브 산하 레이블인 쏘스뮤직에 소속하고 있다. 그룹명은 I'm fearless라는 영어 문장을 어구전철로 재조합한 것으로서 히브리어로 치천사를 의미하기도 한다",
    songs: [
      {
        title: "Crazy",
        img: CRAZY,
        previewUrl: "https://www.youtube.com/watch?v=n6B5gQXlB-0",
      },
      {
        title: "Smart",
        img: SMART,
        previewUrl: "https://www.youtube.com/watch?v=KNexS61fjus",
      },
    ],
  },

  {
    artistName: "김수영",
    artistImg: KSY,
    date: new Date("2024-10-01T19:00:00"),
    playTime: 60,
    intro:
      "목소리(중저음의 감미로운 음색)와 기타 소리로 만들어낸 음악으로 위로를 주는 아티스트",
    songs: [
      {
        title: "비워내려고 합니다",
        img: BlANK,
        previewUrl: "https://www.youtube.com/watch?v=AmVtOy0cKWg",
      },
      {
        title: "비틀비틀",
        img: STUMBLE,
        previewUrl: "https://www.youtube.com/watch?v=jnWTZOKRHSQ",
      },
    ],
  },

  {
    artistName: "YELO",
    artistImg: YELO,
    date: new Date("2024-10-01T19:00:00"),
    playTime: 60,
    intro:
      "옐로는 대한민국의 가수, 유튜버다. 2018년 싱글 앨범 [Swim In You]로 데뷔했다",
    songs: [
      {
        title: "Secret",
        img: SECRET,
        previewUrl: "https://www.youtube.com/watch?v=AmVtOy0cKWg",
      },
      {
        title: "Ignite",
        img: IGNITE,
        previewUrl: "https://www.youtube.com/watch?v=jnWTZOKRHSQ",
      },
    ],
  },

  {
    artistName: "N.Flying",
    artistImg: NFlYING,
    date: new Date("2024-10-01T19:00:00"),
    playTime: 60,
    intro:
      "옐로는 대한민국의 가수, 유튜버다. 2018년 싱글 앨범 [Swim In You]로 데뷔했다",
    songs: [
      {
        title: "피었습니다",
        img: TURBULENCE,
        previewUrl: "https://www.youtube.com/watch?v=AmVtOy0cKWg",
      },
      {
        title: "Autumn Dream",
        img: AUTHUMNDREAM,
        previewUrl: "https://www.youtube.com/watch?v=jnWTZOKRHSQ",
      },
    ],
  },
  {
    artistName: "STAYC",
    artistImg: STAYC,
    date: new Date("2024-10-01T19:00:00"),
    playTime: 60,
    intro:
      "옐로는 대한민국의 가수, 유튜버다. 2018년 싱글 앨범 [Swim In You]로 데뷔했다",
    songs: [
      {
        title: "SO BAD",
        img: SOBAD,
        previewUrl: "https://www.youtube.com/watch?v=AmVtOy0cKWg",
      },
      {
        title: "Bubble",
        img: BUBBLE,
        previewUrl: "https://www.youtube.com/watch?v=jnWTZOKRHSQ",
      },
    ],
  },
];
