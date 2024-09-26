import React, { createContext, useContext, useState } from "react";

interface MapContextType {
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  currMarker: kakao.maps.LatLng | null;
  setCurrMarker: React.Dispatch<React.SetStateAction<kakao.maps.LatLng | null>>;
  currCategory: string;
  setCurrCategory: React.Dispatch<React.SetStateAction<string>>;
  isCategoryClicked: boolean;
  setIsCategoryClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isNavVisible: boolean;
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isBottomSheetVisible: boolean;
  setIsBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [currMarker, setCurrMarker] = useState<kakao.maps.LatLng | null>(null);
  const [currCategory, setCurrCategory] = useState<string>("");
  const [isCategoryClicked, setIsCategoryClicked] = useState<boolean>(false);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [isBottomSheetVisible, setIsBottomSheetVisible] =
    useState<boolean>(false);
  const [day, setDay] = useState<string>("전체");

  return (
    <MapContext.Provider
      value={{
        day,
        setDay,
        currMarker,
        setCurrMarker,
        currCategory,
        setCurrCategory,
        isCategoryClicked,
        setIsCategoryClicked,
        isNavVisible,
        setIsNavVisible,
        isBottomSheetVisible,
        setIsBottomSheetVisible,
      }}
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
