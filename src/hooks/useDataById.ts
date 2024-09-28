import { useState, useEffect } from "react";
import allJsonData from "@constant/detailData.json";
import { PageData } from "@type/notice/pageData";

// id로 데이터를 가져오는 훅
export const useDataById = (id: string | undefined) => {
  const [data, setData] = useState<PageData | undefined>(undefined); // PageData 또는 undefined로 상태 설정

  useEffect(() => {
    // id가 undefined인 경우 아무 처리도 하지 않음
    if (id === undefined) {
      setData(undefined);
      return;
    }

    // id에 맞는 데이터를 찾음
    const foundData = allJsonData.find((item) => item.id === id);
    setData(foundData); // 찾은 데이터를 상태로 설정
  }, [id]); // id가 변경될 때마다 실행

  return data; // 찾은 데이터를 반환
};
