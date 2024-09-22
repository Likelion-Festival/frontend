import React, { createContext, useState, ReactNode } from 'react';

type AlarmContextType = {
    alarms: boolean[];
    toggleAlarm: (index: number) => void;
};

export const AlarmContext = createContext<AlarmContextType | undefined>(undefined);

export const AlarmProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [alarms, setAlarms] = useState<boolean[]>(Array(10).fill(false));

    const toggleAlarm = (index: number) => {
        setAlarms((prev) => {
            const newAlarms = [...prev];
            newAlarms[index] = !newAlarms[index];
            return newAlarms;
        });
    };

    return (
        <AlarmContext.Provider value={{ alarms, toggleAlarm }}>
            {children}
        </AlarmContext.Provider>
    );
};

export const useAlarm = () => { 
    const context = React.useContext(AlarmContext);
    if (context === undefined) {
        throw new Error('useAlarm must be used within a AlarmProvider');
    }
    return context;
}
