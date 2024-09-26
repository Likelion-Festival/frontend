import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/BarList/BarList.module.css';
import { stores } from './bar-types';
import goBack from '@assets/bar/goBack.png';
import searchResult from '@assets/bar/주점검색.png';
import noResult from '@assets/bar/no_result.png';
import inputGlass from '@assets/bar/search.png';


export const BarPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState(false); 
  const [title, setTitle] = useState('주점');
  

  // 주점 검색 필터
  const filteringStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.representative.toLowerCase().includes(searchTerm.toLowerCase()) || // 대표자 검색 가능
      store.description.toLowerCase().includes(searchTerm.toLowerCase()) // 설명 부분 검색 가능
  );

  const handleStoreClick = (BarDetail: string) => {
    navigate(`/bar-detail/${BarDetail}`);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setTitle('검색');
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setTitle('주점');
  };

  const handleBackClick = () => {
    navigate(-1); 
  };


  return (
    <div className={styles.container}>
      <div className={styles['search-container']}>
        <div className={styles.titles}>
        {title === '검색' && (
              <img src={goBack} className={styles.goBack} onClick={handleBackClick} />
          )}
        <div className={styles.title} style={{ textAlign: title === '검색' ? 'center' : 'left' }}>{title}</div>
        </div>

        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="부스명, 학과, 메뉴를 검색해보세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleInputFocus} 
            onBlur={handleInputBlur} 
            className={`${styles.input} ${searchTerm ? styles.active : ''}`}
          />
          <img src={inputGlass} alt="검색" className={styles.inputGlass} onClick={handleInputFocus}/>
        </div>

      </div>
      <div className={styles['store-list']}>
          {isInputFocused && searchTerm === '' ? (
              <div className={styles.noResult}>
                <img
                  src={searchResult}
                  alt={`주점검색`}
                  className={styles.searchResult}
                />
                <div className={styles['noResult-main']}>검색해보세요</div>
              </div>
            ) : filteringStores.length > 0 ? (
              filteringStores.map((store, index) => (
            <div
              key={index}
              className={styles.store}
              onClick={() => handleStoreClick(store.name)}
            >
              <img
                src={store.imageUrl}
                alt={`${store.name} 이미지`}
                className={styles.storeImage}
              />
              <div className={styles.storeDetails}>
                <div className={styles.storeName}>{store.name}</div>
                <div className={styles.storeRepresentative}>
                  {store.representative}
                </div>
                <div className={styles.descriptions}>
                  <div className={styles.representMenu}>대표</div>
                  {store.description}
                </div>
              </div>
            </div>
          ))
        ) : (
          //검색 키워드가 없을때?
          <div className={styles.noResult}>
            <img src={noResult} alt={`검색 결과 없음`} className={styles['noResult-image']} />
            <div className={styles['noResult-main']}>주점을 찾을 수 없습니다</div> 
            <div className={styles['noResult-serve']}>검색어에 오타가 있는지 확인해보세요!</div> 

          </div>
        )}
      </div>
    </div>
  );
};
