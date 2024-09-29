import React, { createContext, useState, ReactNode, useEffect } from "react";
import { subscribeToTopic, unsubscribeFromTopic } from "@apis/alarm";
import { getToken } from "firebase/messaging";
import { messaging } from "../config/firebase";
import { Toast } from "@components/performance/Toast";

type AlarmContextType = {
  alarms: boolean[];
  closeModal: () => void;
  showModal: boolean;
  handleToggleAlarm: (
    index: number,
    topic: string,
    btnLoading: boolean,
    setBtnLoading: (value: boolean) => void
  ) => void;
};

export const AlarmContext = createContext<AlarmContextType | undefined>(
  undefined
);

export const AlarmProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const savedData = localStorage.getItem("falling");
  const initialAlarms = savedData
    ? JSON.parse(savedData).alarms || Array(10).fill(false)
    : Array(10).fill(false);

  const [state, setState] = useState<{
    alarms: boolean[];
    deviceToken: string | null;
    showModal: boolean;
  }>({
    alarms: initialAlarms,
    deviceToken: null,
    showModal: false,
  });
  const [toast, setToast] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 deviceToken을 불러옵니다.
    const savedData = localStorage.getItem("falling");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setState((prevState) => ({
        ...prevState,
        deviceToken: parsedData.deviceToken || null,
      }));
    }
  }, []);

  const saveToLocalStorage = (newState: Partial<typeof state>) => {
    const currentData = JSON.parse(localStorage.getItem("falling") || "{}");
    const updatedData = {
      ...currentData,
      ...newState,
    };
    localStorage.setItem("falling", JSON.stringify(updatedData));
  };
  const fetchToken = async () => {
    try {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });
      setState((prevState) => {
        const newState = {
          ...prevState,
          deviceToken: token,
        };
        saveToLocalStorage({ deviceToken: token });
        return newState;
      });
      return token;
    } catch (error) {
      console.error("토큰 가져오기 실패:", error);
    }
    return "";
  };

  const toggleAlarm = (index: number) => {
    setState((prevState) => {
      const newAlarms = [...prevState.alarms];
      newAlarms[index] = !newAlarms[index];
      saveToLocalStorage({ alarms: newAlarms }); // 로컬 스토리지에 저장
      return { ...prevState, alarms: newAlarms };
    });
  };

  const handleToggleAlarm = async (
    index: number,
    topic: string,
    btnLoading: boolean,
    setBtnLoading: (value: boolean) => void
  ) => {
    if(btnLoading) return;
    const permission = await Notification.requestPermission();

    if (!state.deviceToken) {
      setState((prevState) => ({ ...prevState, showModal: true }));
    }

    if (permission !== "granted") {
      return;
    }

    const token = state.deviceToken || (await fetchToken());

    if (state.alarms[index]) {
      try {
        setToast(false);
        setBtnLoading(true);
        const response = await unsubscribeFromTopic(token, topic);
        if (response.successCount === 1) {
          toggleAlarm(index);
          setBtnLoading(false);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        setBtnLoading(true);
        const response = await subscribeToTopic(token, topic);
        if (response.successCount === 1) {
          toggleAlarm(index);
          setBtnLoading(false);
          setToast(true);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const closeModal = () => {
    setState((prevState) => ({ ...prevState, showModal: false }));
  };

  return (
    <AlarmContext.Provider
      value={{
        showModal: state.showModal,
        closeModal,
        alarms: state.alarms,
        handleToggleAlarm,
      }}
    >
      {children}{" "}
      {toast && <Toast message="공연 알림 설정 완료!" setToast={setToast} />}
    </AlarmContext.Provider>
  );
};
