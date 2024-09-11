import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from '@styles/BarList/BarList.module.css'; 

// 주점 데이터 명명
interface Store {
  name: string;
  representative: string;
  description: string;
}

// 주점 데이터 목록
const stores: Store[] = [
  {
    name: '무간판',
    representative: '언론정보대학 학생회',
    description: '답전, 유부우동&닭고치, 통영 산지직송',
  },
  {
    name: '교통은 쥐뿔도 있지만',
    representative: '교통물류공학과 학생회',
    description: '불담쌈, 제육볶음, 오리훈제',
  },
  {
    name: '토목갱~스껄',
    representative: '건설환경공학과 학생회',
    description: '김치전, 마늘보쌈, 삼겹버섯구이',
  },
  {
    name: '산-자카야',
    representative: '산업경영공학과 학생회',
    description: '볶음우동, 대패삼겹속주먹밥',
  },
  {
    name: '연어분! 참치마새우',
    representative: '해양융합공학과 학생회',
    description: '연어회, 참치회, 새우라면',
  },
  {
    name: '(주)우아한재화들 배달의 민족',
    representative: '재료화학공학과 학생회',
    description: '마장동에서 갓 잡아온 육회, 을지로',
  }
];

export const BarPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStoreClick = (BarDetail: string) => {
    navigate(`/bar-detail/${BarDetail}`); 
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>주점</h3>
      <input
        type="text"
        placeholder="부스명, 학과, 메뉴를 검색해보세요"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={styles.input}
      />
      <div>
        {filteredStores.map((store, index) => (
          <div 
            key={index} 
            className={styles.store} 
            onClick={() => handleStoreClick(store.name)} 
          >
            <h2>{store.name}</h2>
            <p>{store.representative}</p>
            <p>{store.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
