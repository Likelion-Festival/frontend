import { AlarmContext } from "../context/AlarmContext";
import { useContext } from "react";

export const useAlarm = () => { 
    const context = useContext(AlarmContext);
    if (context === undefined) {
        throw new Error('useAlarm must be used within a AlarmProvider');
    }
    return context;
}
