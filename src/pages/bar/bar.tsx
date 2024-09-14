import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from '@styles/BarList/BarList.module.css'; 

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
    imageUrl:'src/assets/bar/주점1.png',
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


export const BarPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  // 주점 검색 필터
  const filteringStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.representative.toLowerCase().includes(searchTerm.toLowerCase()) || // 대표자 검색 가능
    store.description.toLowerCase().includes(searchTerm.toLowerCase()) // 설명 부분 검색 가능
  );


  const handleStoreClick = (BarDetail: string) => {
    navigate(`/bar-detail/${BarDetail}`); 
  };



  return (
    <div className={styles.container}>
      <div className={styles['search-container']}>
        <div className={styles.title}>주점</div>
        <input
          type="text"
          placeholder="부스명, 학과, 메뉴를 검색해보세요"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={`${styles.input} ${searchTerm ? styles.active : ''}`}
        />
      </div>
      <div className={styles['store-list']}>
        {filteringStores.length > 0 ? ( 
          filteringStores.map((store, index) => (
            <div 
              key={index} 
              className={styles.store} 
              onClick={() => handleStoreClick(store.name)} 
            >
              <img src={store.imageUrl} alt={`${store.name} 이미지`} className={styles.storeImage} />
              <div className={styles.storeDetails}>
                <div className={styles.storeName}>{store.name}</div>
                <div className={styles.storeRepresentative}>{store.representative}</div>
                <div className={styles.descriptions}>
                  <div className={styles.representMenu}>
                    대표
                  </div>
                  {store.description}
                </div>
              </div>
            </div>
            
          ))
        ) : (
          //검색 키워드가 없을때?
          <div className={styles.noResult}>
            <img src={'src/assets/bar/no_result.png'} alt={`검색 결과 없음`} className={styles['noResult-image']} />
            <div className={styles['noResult-main']}>주점을 찾을 수 없습니다</div> 
            <div className={styles['noResult-serve']}>검색어에 오타가 있는지 확인해보세요!</div> 
          </div>
        )}
      </div>
    </div>
  );
};