import { dayPerformance, Performance } from "@type/performance/performance";
// load artist png
// LEYUKA IMG IMPORT
import LEEYUKA from "@assets/performance/artist/leeyuka.jpg";
import WIWM from "@assets/performance/artist/songs/worldiswithoutme.jpg";
import SIMON from "@assets/performance/artist/songs/simon.jpg";
import UNUSUAL from "@assets/performance/artist/songs/unusual.jpg";
// LUCY IMG IMPORT
import LUCY from "@assets/performance/artist/lucy.jpg";
import FlOWER from "@assets/performance/artist/songs/flowering.jpg";
import UNBELEVABLE from "@assets/performance/artist/songs/unbelievable.jpg";
import HERO from "@assets/performance/artist/songs/hero.jpg";
// LE SSERAFIM IMG IMPORT
import LESERRAFIM from "@assets/performance/artist/lesserafim.jpeg";
import CRAZY from "@assets/performance/artist/songs/crazy.jpg";
import EASY from "@assets/performance/artist/songs/easy.jpeg";
import PERFECTNIGHT from "@assets/performance/artist/songs/perfectnight.jpeg";
// KimSooYoung IMG IMPORT
import KSY from "@assets/performance/artist/ksy.jpeg";
import BlANK from "@assets/performance/artist/songs/blank.jpg";
import LOVE from "@assets/performance/artist/songs/love.jpg";
import SAD from "@assets/performance/artist/songs/sad.jpg";
// Yelo IMG IMPORT
import YELO from "@assets/performance/artist/yelo.webp";
import MYYELLOW from "@assets/performance/artist/songs/myyellow.jpeg";
import BADTHING from "@assets/performance/artist/songs/badthing.jpg";
import ASMR from "@assets/performance/artist/songs/asmr.jpg";
// n.flying IMG IMPORT
import NFlYING from "@assets/performance/artist/nflying.jpg";
import INTOYOU from "@assets/performance/artist/songs/intoyou.jpg";
import ROOFTOP from "@assets/performance/artist/songs/rooftop.jpg";
import MAN from "@assets/performance/artist/songs/manonthemoon.webp";
// STAYC IMG IMPORT
import STAYC from "@assets/performance/artist/stayc.jpeg";
import BUBBLE from "@assets/performance/artist/songs/bubble.jpg";
import TEDDY from "@assets/performance/artist/songs/teddybear.png";
import CHEEKY from "@assets/performance/artist/songs/cheeky.jpg";

export const performances: Performance[] = [
  {
    topic: "lesserafim",
    artistName: "LE SSERAFIM",
    artistImg: LESERRAFIM,
    date: new Date("2024-10-01T19:00:00"),
    playTime: 60,
    intro:
      "르세라핌은 하이브와 쏘스뮤직이 협력해 론칭한 첫 걸그룹으로 김채원, 사쿠라, 허윤진, 카즈하, 홍은채 다국적 멤버 5인으로 구성되어있다. 르세라핌의 곡은 세상의 시선에 흔들리지 않고 두려움 없이 앞으로 나아가겠다는 자기 확신과 강한 의지를 보인다. ",
    songs: [
      {
        title: "CRAZY",
        img: CRAZY,
        previewUrl: "https://www.youtube.com/watch?v=n6B5gQXlB-0",
      },

      {
        title: "Perfect Night",
        img: PERFECTNIGHT,
        previewUrl: "https://www.youtube.com/watch?v=hLvWy2b857I",
      },
      {
        title: "EASY",
        img: EASY,
        previewUrl: "https://www.youtube.com/watch?v=bNKXxwOQYB8",
      },
    ],
  },
  {
    topic: "kimsooyoung",
    artistName: "김수영",
    artistImg: KSY,
    date: new Date("2024-10-01T20:00:00"),
    playTime: 30,
    intro:
      "중저음의 매력적인 톤으로 유니크한 음색을 지닌 대체불가한 톤 의 소유자로, 어쿠스틱에 잘 어울리는 담백하면서 무심한듯 담담한 스타일의 여성 싱어송라이터이다.",
    songs: [
      {
        title: "슬픔을 참는 세 가지 방법",
        img: SAD,
        previewUrl: "https://www.youtube.com/watch?v=a09Bku8-oUs",
      },
      {
        title: "사랑하자",
        img: LOVE,
        previewUrl: "https://www.youtube.com/watch?v=_7LIjg8iRcc",
      },
      {
        title: "비워내려고 합니다",
        img: BlANK,
        previewUrl: "https://www.youtube.com/watch?v=AmVtOy0cKWg",
      },
    ],
  },
  {
    topic: "leeyuka",
    artistName: "LEEYUKA",
    artistImg: LEEYUKA,
    date: new Date("2024-10-01T20:30:00"),
    playTime: 30,
    intro:
      "슬픔과 아픔, 설렘과 고통 등 인간이 느끼는 감정을 서정적이며 강렬한 카타르시스로 노래하는, 존재자체가 장르라고 불릴 만큼 독보적인 음색으로 Alternative Rock을 노래하는 여성 싱어송라이터이다.",
    songs: [
      {
        title: "Unusual",
        img: UNUSUAL,
        previewUrl: "https://www.youtube.com/watch?v=qenl8H8kcPE",
      },
      {
        title: "시몬",
        img: SIMON,
        previewUrl: "https://www.youtube.com/watch?v=bVaSORquu30",
      },
      {
        title: "세상은 내가 없어도",
        img: WIWM,
        previewUrl: "https://www.youtube.com/watch?v=O6mHm0WLK8U",
      },
    ],
  },
  {
    topic: "lucy",
    artistName: "LUCY",
    artistImg: LUCY,
    date: new Date("2024-10-01T21:00:00"),
    playTime: 30,
    intro:
      "미스틱스토리에서 선보이는 첫 밴드이자 4인조 밴드. 2019년 밴드 오디션 프로그램 LTBC 슈퍼밴드에서 처음 결성되어 준우승을 차지하였다.폭넓은 다양한 장르의 음악들을 선보이며 활동하고 있는데, 중성적인 느낌의 팀명처럼 편견 없는 음악을 하고 싶다며 장르를 정의하지 않고 LUCY 자체가 장르가 됐으면 한다는 포부를 밝혔다.",
    songs: [
      {
        title: "개화 (Flowering)",
        img: FlOWER,
        previewUrl: "https://www.youtube.com/watch?v=2-P-NIiLiQc",
      },
      {
        title: "아니 근데 진짜",
        img: UNBELEVABLE,
        previewUrl: "https://www.youtube.com/watch?v=3qtrJHLjfEI",
      },
      {
        title: "히어로",
        img: HERO,
        previewUrl: "https://www.youtube.com/watch?v=V-eHkQ_YABo",
      },
    ],
  },

  {
    topic: "yelo",
    artistName: "YELO",
    artistImg: YELO,
    date: new Date("2024-10-02T20:00:00"),
    playTime: 30,
    intro:
      "매력적인 음색을 바탕으로 한 탄탄한 가창력의 감성보컬로 사랑 받는 인디/발라드 싱어송라이터 YELO  본인이 운영하는 유튜브에서 무려 11만이 넘는 구독자를 보유하며 유튜브에서 특히 사랑 받는 아티스트이다.",
    songs: [
      {
        title: "My Yellow",
        img: MYYELLOW,
        previewUrl: "https://www.youtube.com/watch?v=aoB498-COQk",
      },
      {
        title: "Bad Thing",
        img: BADTHING,
        previewUrl: "https://www.youtube.com/watch?v=btuXTjTsIyw",
      },
      {
        title: "ASMR",
        img: ASMR,
        previewUrl: "https://www.youtube.com/watch?v=ge-coKvWvOs",
      },
    ],
  },
  {
    topic: "stayc",
    artistName: "STAYC",
    artistImg: STAYC,
    date: new Date("2024-10-02T20:30:00"),
    playTime: 30,
    intro:
      "High Up Entertainment에서 데뷔한 STAYC(스테이씨)는  star To A Young Cultur라는 뜻을 담고있고, 수민, 시은, 아이사, 세은, 윤, 재이 6명 전원 한국 멤버로 이루어져있다.",
    songs: [
      {
        title: "Teddy Bear",
        img: TEDDY,
        previewUrl: "https://www.youtube.com/watch?v=SxHmoifp0oQ",
      },
      {
        title: "Bubble",
        img: BUBBLE,
        previewUrl: "https://www.youtube.com/watch?v=3-ptVHZZdBg",
      },
      {
        title: "Cheeky Icy Thang",
        img: CHEEKY,
        previewUrl: "https://www.youtube.com/watch?v=s-UXxaQdUew",
      },
    ],
  },
  {
    topic: "nflying",
    artistName: "N.Flying",
    artistImg: NFlYING,
    date: new Date("2024-10-02T21:00:00"),
    playTime: 30,
    intro:
      "엔플라잉 (N.Flying)은 FNC 엔터테인먼트 소속 이승협, 유회승, 차훈, 김재현, 서동성으로 구성된 5인조 보이그룹 이다. 2015년 데뷔 앨범 ‘기가 막혀’로 가요계에 첫 발을 내디딘 엔플라잉은 기존의 밴드 음악과 랩의 조화로 하이 브리드 밴드, 혹 뉴 트렌드 밴드라고 불린다. ",
    songs: [
      {
        title: "네가 내 마음에 자리 잡았다",
        img: INTOYOU,
        previewUrl: "https://www.youtube.com/watch?v=JbpdRXARLtI",
      },
      {
        title: "MAN on the Moon",
        img: MAN,
        previewUrl: "https://www.youtube.com/watch?v=xbmwj0Ld0ew",
      },
      {
        title: "옥탑방 (Rooftop)",
        img: ROOFTOP,
        previewUrl: "https://www.youtube.com/watch?v=VpaUh_BGqE0",
      },
    ],
  },
];

export const daysPerformance: dayPerformance[] = [
  {
    day: "1",
    performances: [],
  },

  {
    day: "2",
    performances: [
      {
        artistName: "RHOOTERS(루터스)",
        time: new Date("2024-10-01T17:00:00"),
        playTime: 60,
        index: "-1",
      },
      {
        artistName: "실용 음악과 학생 특별 공연",
        time: new Date("2024-10-01T18:00:00"),
        playTime: 60,
        index: "-1",
      },
      {
        artistName: "LE SSERAFIM",
        time: new Date("2024-10-01T19:00:00"),
        playTime: 60,
        index: "0",
      },
      {
        artistName: "김수영",
        time: new Date("2024-10-01T20:00:00"),
        playTime: 30,
        index: "1",
      },
      {
        artistName: "LEEYUKA",
        time: new Date("2024-10-01T20:30:00"),
        playTime: 30,
        index: "2",
      },
      {
        artistName: "LUCY",
        time: new Date("2024-10-02T21:00:00"),
        playTime: 30,
        index: "3",
      },
    ],
  },
  {
    day: "3",
    performances: [
      {
        artistName: "끼페스티벌",
        time: new Date("2024-10-02T18:00:00"),
        playTime: 120,
        index: "-1",
      },
      {
        artistName: "YELO",
        time: new Date("2024-10-02T20:00:00"),
        playTime: 30,
        index: "4",
      },
      {
        artistName: "STAYC",
        time: new Date("2024-10-02T20:30:00"),
        playTime: 30,
        index: "5",
      },
      {
        artistName: "N.Flying",
        time: new Date("2024-10-02T21:00:00"),
        playTime: 30,
        index: "6",
      },
    ],
  },
];
