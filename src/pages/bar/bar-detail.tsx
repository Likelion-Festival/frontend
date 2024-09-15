import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from '@styles/BarList/BarDetail.module.css'; 
import { stores, Store, MenuItem } from './bar.tsx';




export const BarDetail = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); 
    };

    const { storeName } = useParams<{ storeName: string }>();
    const store: Store | undefined = stores.find((store) => store.name === storeName); 

    if (!store) {
        return <div>가게를 찾을 수 없습니다.</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles['barDetail-image']}>
                <img src={'/src/assets/bar/주점1.png'} alt={`${store.name} 이미지`} className={styles.barMainImage} />
                <img src={'/src/assets/bar/goBack.png'} alt={`뒤로 가기`} className={styles.goBack} onClick={handleGoBack} />
                
                <div className={styles.barDetail}>
                    <div className={styles['barDetail-title']}>
                        <h1>{store.name}</h1>
                        <p>{store.representative}</p>
                        <button className={styles.locationButton}>
                            지도로 위치 확인
                        </button>
                    </div>

                    <div className={styles['barDetail-menu']}>
                        <h3>메뉴</h3>
                        <ul>
                            {store.menu.map((item: MenuItem, index: number) => (
                                <li key={index}>
                                    {item.name}<br/>
                                    {item.price}원
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        
    );
    };