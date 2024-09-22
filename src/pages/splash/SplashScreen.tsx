import React, { useEffect } from 'react';
import styles from '@styles/SplashScreen.module.css'; 

interface SplashScreenProps {
  onSplashFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onSplashFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashFinish();
    }, 1000);

    return () => clearTimeout(timer); 
  }, [onSplashFinish]);

  return (
    <div className={styles.splashContainer}>
        <img src='/bar/splash.png' className={styles.splashImage} />
    </div>
  );
};

