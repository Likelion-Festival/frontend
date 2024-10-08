import React, { useEffect } from 'react';
import styles from '@styles/SplashScreen.module.css'; 
import SplashImage from '@assets/splash.webp';

interface SplashScreenProps {
  onSplashFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onSplashFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashFinish();
    }, 1500);

    return () => clearTimeout(timer); 
  }, [onSplashFinish]);

  return (
    <div className={styles.splashContainer}>
        <img src={SplashImage} className={styles.splashImage} />
    </div>
  );
};

