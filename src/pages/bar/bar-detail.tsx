import styles from '@styles/BarList/BarDetail.module.css'; 



export const BarDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.goBack}>
                <img src={'src/assets/bar/goBack.png'} alt={`뒤로 가기`} className={styles.goBack} />
            </div>

        </div>

        
    );
    };