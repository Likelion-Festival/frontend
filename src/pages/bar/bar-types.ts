//주점 사진들
import SW from '@assets/bar/소융.png';
import MAHA from '@assets/bar/마하.png';
import MATH from '@assets/bar/수학.png';
import AD from '@assets/bar/광홍.png';
import HERC from '@assets/bar/헐크.png';
import MEDIA from '@assets/bar/정사미.png';
import HYENA from '@assets/bar/전자.png';
import MEDI from '@assets/bar/약대.png';


  //메뉴 데이터
  export interface MenuItem {
    name: string;//이름
    price: number;//가격
  }
    //주점 정보들 - 주점 이름, 대표자(과이름), 메뉴설명, 이미지, 메뉴들
  export interface Store {
    name: string;
    representative: string;
    description: string;
    imageUrl: string;
    menu: MenuItem[];
  }
  
  // 주점 데이터 목록 - 임시
  export const stores: Store[] = [
    {
      name: '주막',
      representative: '소프트웨어융합대학 학생회',
      description: '김치전, 감자전, 어묵탕, 우삼겹숙주볶음, 된장술밥, 해장라면',
      imageUrl: SW,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    },
    {
      name: '스트릿보드파이터',
      representative: '중앙동아리 MAHA',
      description: '훈제마늘통삽겹, 대패왕창비빔면, 떡볶이세트, 토리로코스, 해물라면',
      imageUrl:MAHA,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    },
    {
      name: '눈떠보니 수데사더라...(feat. 응용수학과)',
      representative: '응용수학과 학생회',
      description: '오돌뼈, 무뼈닭발, 오리구이',
      imageUrl: MATH,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    },
    {
      name: '웃음꼬치피었습니다 (feat.투다리)',
      representative: '광고홍보학과 학술제 COMMAH',
      description: '김치우동, 닭산적, 매운닭살꼬치, 먹태, 포도칵테일, 레몬칵테일, 파인애플샤베트, 모둠소세지',
      imageUrl: AD,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    },
    {
      name: 'TTEMU 업고 뛰어',
      representative: '중앙동아리 HERC',
      description: '홍합탕, 대패삼겹살구이, 마른안주, 火닭 단백질',
      imageUrl: HERC,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    },
    {
      name: '여정이네',
      representative: '정보사회미디어학과 학생회 [여정]',
      description: '연어회, 해물 부추전, 골뱅이 무침&소면, 순두부 라면, 콘치즈',
      imageUrl: MEDIA,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    },
    {
      name: '오징어게임',
      representative: '전자공학과 학회 하이에나(HY-ENA)',
      description: '핫한 불막창, 콘치즈 볶음밥, 두부 김치',
      imageUrl: HYENA,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    },
    {
      name: '약주는할머니맥주',
      representative: '약학대학 학생회',
      description: '우삼겹숙주볶음, 오리훈제부추볶음, 치킨가라아게, 어묵탕, 치즈김치볶음밥',
      imageUrl: MEDI,
      menu: [
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
        { name: '닭전', price: 5000 },
        { name: '유부우동', price: 6000 },
      ],
    }
  ];
  
  