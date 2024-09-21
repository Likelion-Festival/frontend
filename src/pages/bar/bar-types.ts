// 주점 데이터 넣기
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
      name: '무간판',
      representative: '언론정보대학 학생회',
      description: '닭전, 유부우동&닭고치, 통영 산지직송',
      imageUrl:'/주점1.png',
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
      name: '교통은 쥐뿔도 있지만',
      representative: '교통물류공학과 학생회',
      description: '불담쌈, 제육볶음, 오리훈제',
      imageUrl:'',
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
      name: '토목갱~스껄',
      representative: '건설환경공학과 학생회',
      description: '김치전, 마늘보쌈, 삼겹버섯구이',
      imageUrl:'',
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
      name: '산-자카야',
      representative: '산업경영공학과 학생회',
      description: '볶음우동, 대패삼겹속주먹밥',
      imageUrl:'',
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
      name: '연어분! 참치마새우',
      representative: '해양융합공학과 학생회',
      description: '연어회, 참치회, 새우라면',
      imageUrl:'',
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
      name: '(주)우아한재화들 배달의 민족',
      representative: '재료화학공학과 학생회',
      description: '마장동에서 갓 잡아온 육회, 을지로',
      imageUrl:'',
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
      name: '(주)우아한재화들 배달의 민족',
      representative: '재료화학공학과 학생회',
      description: '마장동에서 갓 잡아온 육회, 을지로',
      imageUrl:'',
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
      name: '(주)우아한재화들 배달의 민족',
      representative: '재료화학공학과 학생회',
      description: '마장동에서 갓 잡아온 육회, 을지로',
      imageUrl:'',
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
  
  