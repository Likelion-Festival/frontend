import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from '@styles/BarList/BarDetail.module.css'; 
import { stores, Store, MenuItem} from './bar-types.ts';
import {BarPage} from './bar.tsx';
import goBack from '@assets/bar/goBack.png';
import MoveToMap from '@assets/bar/지도이동버튼.png';




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
    console.log(store.imageUrl);

    const MoveMap = () => {
        navigate(`/bar/${BarPage}`); 
      };
    

    return (
        <div className={styles.container}>
            <div className={styles['barDetail-image']}>
                <div className={styles.barMain}>
                    <div className={styles.imageContainer}>
                        <img src={store.imageUrl} alt={`${store.name}`} className={styles.barMainImage} />
                        <div className={styles.overlay} />
                    </div>

                    <img src={goBack} alt={`뒤로 가기`} className={styles.goBack} onClick={handleGoBack} />
                </div>

                <div className={styles.barDetail}>
                    <div className={styles['barDetail-title']}>
                        <div className={styles['barDetail-storeName']}>{store.name}</div>
                        <div className={styles['barDetail-storeRepre']}>{store.representative}</div>
                        <img src={MoveToMap} alt={'지도이동버튼'} className={styles.MoveToMap} onClick={MoveMap}/>

                    </div>

                    <div className={styles.detailLine}></div>

                    <div>
                        <div className={styles['barDetail-menu']}>
                        <div className={styles.main}>{store.category[0]?.Main}</div>
                        <ul>
                            {store.mainMenu.map((item: MenuItem, index: number) => (
                                <li key={index}>
                                    <div className={styles.menuName}>{item.name}</div>
                                    <div className={styles.menuPrice}>{item.price}원</div>
                                </li>
                            ))}
                        </ul>
                        </div>

                        <div className={styles.detailLine}></div>

                        <div className={styles['barDetail-menu']}>
                        <div className={styles.main}>{store.category[0]?.Second}</div>
                        <ul>
                            {store.secondMenu.map((item: MenuItem, index: number) => (
                                <li key={index}>
                                    <div className={styles.menuName}>{item.name}</div>
                                    <div className={styles.menuPrice}>{item.price}원</div>
                                </li>
                            ))}
                        </ul>
                        </div>


                        <div className={styles.detailLine}></div>
                        <div className={styles['barDetail-menu']}>
                        <div className={styles.main}>{store.category[0]?.Third}</div>
                        <ul>
                            {store.thirdMenu.map((item: MenuItem, index: number) => (
                                <li key={index}>
                                    <div className={styles.menuName}>{item.name}</div>
                                    <div className={styles.menuPrice}>{item.price}원</div>
                                </li>
                            ))}
                        </ul>
                        </div>



                    </div>

                </div>
            </div>
        </div>

        
    );
    };
