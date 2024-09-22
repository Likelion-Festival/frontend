import { AlarmContext } from "@components/performance/AlarmContext";
import { useContext } from "react";

export const useAlarm = () => { 
    const context = useContext(AlarmContext);
    if (context === undefined) {
        throw new Error('useAlarm must be used within a AlarmProvider');
    }
    return context;
}
