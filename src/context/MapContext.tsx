import React, { createContext, useContext, useState } from "react";

interface MapContextType {
  currMarker: kakao.maps.LatLng | null;
  setCurrMarker: React.Dispatch<React.SetStateAction<kakao.maps.LatLng | null>>;
  currCategory: string;
  setCurrCategory: React.Dispatch<React.SetStateAction<string>>;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [currMarker, setCurrMarker] = useState<kakao.maps.LatLng | null>(null);
  const [currCategory, setCurrCategory] = useState<string>("");
  return (
    <MapContext.Provider
      value={{ currMarker, setCurrMarker, currCategory, setCurrCategory }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error("useMapContext는 MapProvider 내에서 사용해야 합니다");
  }
  return context;
};
