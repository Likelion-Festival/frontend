//주점 사진들
import SW from "@assets/bar/소융.png";
import MAHA from "@assets/bar/마하.png";
import MATH from "@assets/bar/수학.png";
import AD from "@assets/bar/광홍.png";
import HERC from "@assets/bar/헐크.png";
import MEDIA from "@assets/bar/정사미.png";
import HYENA from "@assets/bar/전자.png";
import MEDI from "@assets/bar/약대.png";

//메뉴 데이터
export interface MenuItem {
  name: string; //이름
  price: string; //가격
}

export interface Cartegorys {
  Main: string;
  Second: string;
  Third: string;
}

//주점 정보들 - 주점 이름, 대표자(과이름), 메뉴설명, 이미지, 메뉴들
export interface Store {
  name: string;
  position: kakao.maps.LatLng;
  category: string;
  representative: string;
  description: string;
  imageUrl: string;
  mainMenu: MenuItem[];
  secondMenu: MenuItem[];
  thirdMenu: MenuItem[];
  time: string;
  location: string;

  classification: Cartegorys[];
}

// 주점 데이터 목록 - 임시
export const stores: Store[] = [
  //소융
  {
    name: "주막",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 1번째 부스",
    position: new kakao.maps.LatLng(37.29591021735943, 126.83473857926585),
    representative: "소프트웨어융합대학 학생회",
    description: "김치전, 감자전, 어묵탕, 우삼겹숙주볶음, 된장술밥, 해장라면",
    imageUrl: SW,
    classification: [{ Main: "주요차림", Second: "옆갈래차림", Third: "음료" }],
    mainMenu: [
      { name: "김치지지미", price: "10,000" },
      { name: "감자지지미", price: "10,000" },
      { name: "어묵이 우당탕탕", price: "13,000" },
      { name: "당가네 우삼겹 숙주볶음", price: "15,000" },
      { name: "우리 할매 된장술밥", price: "13,000" },
      { name: "신해장라면", price: "5,000" },
    ],
    secondMenu: [
      { name: "간계밥", price: "3,000" },
      { name: "주막밥 (셀프 주먹밥)", price: "4,000" },
      { name: "고봉밥", price: "6,000" },
      { name: "파송송 달걀후라이", price: "1,000" },
      { name: "(ㄱ수박)화채", price: "8,000" },
      { name: "살얼음 야구르트", price: "5,000" },
    ],
    thirdMenu: [
      { name: "생수", price: "1,000" },
      { name: "시커먼탄산단물", price: "2,000" },
      { name: "허멀건탄산단물", price: "2,000" },
      { name: "식혜", price: "2,000" },
    ],
  },

  //마하
  {
    name: "스트릿보드파이터",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 1번째 부스",
    position: new kakao.maps.LatLng(37.29573017593732, 126.83485739526147),
    representative: "중앙동아리 MAHA",
    description:
      "훈제마늘통삽겹, 대패왕창비빔면, 떡볶이세트, 토리로코스, 해물라면",
    imageUrl: MAHA,
    classification: [
      { Main: "주요차림", Second: "사이드 메뉴", Third: "세트" },
    ],
    mainMenu: [
      { name: "**테이블 차지 (1인당)", price: "1,000" },

      { name: "훈제마늘통삼겹츄베릅", price: "16,000" },
      { name: "대패왕창비빔면", price: "14,000" },
      { name: "와우S.E.X.Y.떡볶이 세트", price: "14,000" },
      { name: "도리도리도리로코스", price: "12,000" },
      { name: "ㄷㄷ해물폭탄해물라면", price: "8,000" },
    ],
    secondMenu: [
      { name: "버터갈릭감자튀김", price: "7000" },
      { name: "쭉쭉모짜치즈스틱", price: "6,500" },
      { name: "바삭나쵸&치즈소스", price: "3,500" },
    ],
    thirdMenu: [
      { name: "세미셀프 칵테일 (토닉워터+과일시럽)", price: "6,000" },
      { name: "토닉워터", price: "4,000" },
      { name: "물은 영어로 셀프", price: "1,500" },
    ],
  },

  //응용수학과
  {
    name: "눈떠보니 수데사더라...(feat. 응용수학과)",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 1번째 부스",
    position: new kakao.maps.LatLng(37.295960395397465, 126.83518396363299),
    representative: "응용수학과 학생회",
    description: "오돌뼈, 무뼈닭발, 오리구이",
    imageUrl: MATH,
    classification: [
      { Main: "메인 메뉴", Second: "사이드 메뉴", Third: "특가 세트" },
    ],
    mainMenu: [
      { name: "무뼈닭발", price: "24,000" },
      { name: "오돌뼈", price: "24,000" },
      { name: "오리구이", price: "26,000" },
    ],
    secondMenu: [
      { name: "왕만둣국", price: "10,000" },
      { name: "계란달달토스트", price: "8,000" },
      { name: "참치마요컵밥", price: "6,500" },
      { name: "계란밥", price: "4,500" },
      { name: "생수", price: "1,000" },
      { name: "음료수(콜라, 제로콜라, 사이다, 쿨피스", price: "2,000" },
    ],
    thirdMenu: [
      { name: "A set 닭발+참치마요주먹밥+계란찜", price: "33,000" },
      { name: "B set 오돌뼈+참치마요주먹밥+계란찜", price: "33,000" },
      { name: "C set 닭발+오돌뼈+오리구이", price: "70,000" },
    ],
  },

  //광홍과
  {
    name: "웃음꼬치피었습니다 (feat.투다리)",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 1번째 부스",
    position: new kakao.maps.LatLng(37.296118586121786, 126.8355501650792),
    representative: "광고홍보학과 학술제 COMMAH",
    description:
      "김치우동, 닭산적, 매운닭살꼬치, 먹태, 포도칵테일, 레몬칵테일, 파인애플샤베트, 모둠소세지",
    imageUrl: AD,
    classification: [{ Main: "MENU", Second: "SET", Third: "" }],
    mainMenu: [
      { name: "매운 닭살 꼬치 (5EA)", price: "9,000" },
      { name: "닭산적 꼬치 (5EA)", price: "9,000" },
      { name: "먹태 (1컵)", price: "8,000" },
      { name: "김치우동", price: "11,000" },
      { name: "모둠소세지", price: "16,000" },
      { name: "파인애플 샤베트", price: "8,000" },
      { name: "진미채튀김", price: "10,000" },
      { name: "레몬 칵테일", price: "3,000" },
      { name: "포토칵테일", price: "3,000" },
    ],
    secondMenu: [
      { name: "SET 1 김치우동+닭산적 or 매운닭살꼬치", price: "19,000" },
      { name: "SET 2 김치우동+모둠소시지", price: "26,000" },
      {
        name: "SET 3 먹태 1/2컵+김치우동+닭산적 or 매운닭살꼬치",
        price: "27,000",
      },
    ],
    thirdMenu: [],
  },

  //헐크
  {
    name: "TTEMU 업고 뛰어",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 2번째 부스",
    position: new kakao.maps.LatLng(37.29581569543178, 126.83480081675584),
    representative: "중앙동아리 HERC",
    description: "홍합탕, 대패삼겹살구이, 마른안주, 火닭 단백질",
    imageUrl: HERC,
    classification: [{ Main: "Main Menu", Second: "Side Menu", Third: "" }],
    mainMenu: [
      { name: "대패 산겹살 (산처럼 쌓아줌)", price: "15,000" },
      { name: "회장의 손맛 홍합탕", price: "14,900" },
      { name: "마른 안주 (오징어, 쥐포, 마카로니)", price: "9,900" },
      { name: "火닭 단백질 (팽이버섯, 닭가슴살)", price: "8,900" },
    ],
    secondMenu: [
      { name: "대야정", price: "11,900" },
      { name: "소아정", price: "6,900" },
      { name: "복(소)사", price: "4,900" },
      { name: "떼무 입마른안주 (꾸어칩, 마카로니)", price: "3,500" },
      { name: "탄산음료 (콜라, 사이다, 펩시제로)", price: "1,900" },
      { name: "물 500ml", price: "900" },
      { name: "떼무 요아정 (얼린 요구르트)", price: "500" },
    ],
    thirdMenu: [],
  },

  //정사미
  {
    name: "여정이네",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 2번째 부스",
    position: new kakao.maps.LatLng(37.295883870356576, 126.83522924387606),
    representative: "정보사회미디어학과 학생회 [여정]",
    description: "연어회, 해물 부추전, 골뱅이 무침&소면, 순두부 라면, 콘치즈",
    imageUrl: MEDIA,
    classification: [{ Main: "메뉴", Second: "음료", Third: "" }],
    mainMenu: [
      { name: "연어회", price: "17,000" },
      { name: "해물 부추전", price: "12,000" },
      { name: "골뱅이 무침&소면", price: "14,000" },
      { name: "순두부 라면", price: "7,000" },
      { name: "콘치즈", price: "5,000" },
    ],
    secondMenu: [
      { name: "하이볼 (피치피치 / 모히또 민트 / 블루큐라소)", price: "4,000" },
      { name: "콜라・사이다", price: "3,000" },
      { name: "물 (2L)", price: "2,000" },
    ],
    thirdMenu: [],
  },

  //전자
  {
    name: "오징어게임",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 1번째 부스",
    position: new kakao.maps.LatLng(37.296054925380574, 126.83512736565798),
    representative: "전자공학과 학회 하이에나(HY-ENA)",
    description: "핫한 불막창, 콘치즈 볶음밥, 두부 김치",
    imageUrl: HYENA,
    classification: [
      { Main: "메인 메뉴", Second: "사이드 메뉴", Third: "간식 & 음료" },
    ],
    mainMenu: [
      { name: "핫한 불막창", price: "20,000" },
      { name: "콘치즈 보끔밥", price: "20,000" },
      { name: "두부 김치", price: "15,000" },
    ],
    secondMenu: [
      { name: "순두부 열라면", price: "10,000" },
      { name: "닭꼬치", price: "10,000" },
      { name: "요아정", price: "7,000" },
      { name: "백종원 계란후라이 X5", price: "7,000" },
    ],
    thirdMenu: [
      { name: "음료", price: "2,000" },
      { name: "옛날 과자", price: "1,000" },
      { name: "생수(물)", price: "2,000" },
    ],
  },

  //약학대
  {
    name: "약주는할머니맥주",
    category: "bar",
    time: "17:00~22:00",
    location: "학술정보관 주차장, 1번째 부스",
    position: new kakao.maps.LatLng(37.29604656611, 126.83559543524264),
    representative: "약학대학 학생회",
    description:
      "우삼겹숙주볶음, 오리훈제부추볶음, 치킨가라아게, 어묵탕, 치즈김치볶음밥",
    imageUrl: MEDI,
    classification: [
      { Main: "메인 메뉴", Second: "사이드 메뉴", Third: "음료" },
    ],
    mainMenu: [
      { name: "우삼겹숙주볶음", price: "18,000" },
      { name: "오리훈제부추볶음", price: "18,000" },
      { name: "치킨가라아게", price: "18,000" },
      { name: "어묵탕", price: "13,000" },
      { name: "치즈김치볶음밥", price: "9,000" },
    ],
    secondMenu: [
      { name: "아이스황도", price: "7,000" },
      { name: "콘마요나초", price: "5,000" },
      { name: "라면", price: "4,000" },
      { name: "소떡소떡(2개)", price: "7,000" },
      { name: "소떡소떡(3개)", price: "9,000" },
    ],
    thirdMenu: [
      { name: "제로콜라", price: "3,500" },
      { name: "사이다", price: "3,500" },
      { name: "생수 500ml", price: "1,000" },
    ],
  },
];
