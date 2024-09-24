import React, { createContext, useState, ReactNode } from "react";
import { AppCheckTokenResult } from "firebase/app-check";
import { subscribeToTopic, unsubscribeFromTopic } from "@apis/alarm";
import { getToken } from "firebase/messaging"; // Firebase에서 메시징 토큰을 가져오는 함수
import { messaging } from "../config/firebase"; // Firebase 설정 파일 경로

type AlarmContextType = {
  alarms: boolean[];
  handleToggleAlarm: (index: number, topic: string) => void;
};

export const AlarmContext = createContext<AlarmContextType | undefined>(
  undefined
);

export const AlarmProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alarms, setAlarms] = useState<boolean[]>(() => {
    const savedAlarms = localStorage.getItem("alarms");
    return savedAlarms ? JSON.parse(savedAlarms) : Array(10).fill(false);
  });

  const [deviceToken, setDeviceToken] = useState<AppCheckTokenResult>({
    token: "",
  });

  const fetchToken = async () => {
    try {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY, // VAPID 키 설정
      });
      setDeviceToken({
        token: token,
      }); // 토큰 업데이트
      return token;
    } catch (error) {
      console.error("토큰 가져오기 실패:", error);
    }
    return "";
  };

  const toggleAlarm = (index: number) => {
    setAlarms((prev) => {
      const newAlarms = [...prev];
      newAlarms[index] = !newAlarms[index];
      localStorage.setItem("alarms", JSON.stringify(newAlarms)); // 변경된 상태를 저장
      return newAlarms;
    });
  };

  const handleToggleAlarm = async (index: number, topic: string) => {
    // 알림 권한 확인
    const permission = await Notification.requestPermission();
   
    if (permission !== "granted") {
      console.log("알림 권한이 허용되지 않았습니다.");
      return; // 알림 권한이 없으면 종료
    }
  
    const token = !deviceToken.token ? await fetchToken() : deviceToken.token;

    if (alarms[index]) {
      // 알람 해제
      try {
        const response = await unsubscribeFromTopic(token, topic);
        if (response.successCount === 1) {
          toggleAlarm(index);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      // 알람 설정
      try {
        const response = await subscribeToTopic(token, topic);
        if (response.successCount === 1) {
          toggleAlarm(index);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <AlarmContext.Provider
      value={{
        alarms,
        handleToggleAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};
