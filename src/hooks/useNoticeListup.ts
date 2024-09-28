import { useState, useEffect } from "react";
import { PageData } from "@type/notice/pageData";
import { useDataById } from "./useDataById";

export const useNoticeListup = (idOrderList: string[]) => {
  const [sortedListData, setSortedListData] = useState<PageData[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      // 각 id에 대한 데이터를 가져와서 배열로 처리
      const dataList = await Promise.all(
        idOrderList.map(async (id) => {
          const data = await useDataById(id); // 각 id에 해당하는 데이터 가져오기
          return data;
        })
      );
      // 데이터가 있을 경우만 설정
      setSortedListData(dataList.filter((data) => data !== undefined));
    };

    fetchData(); // 데이터 가져오는 함수 실행
  }, [idOrderList]);

  return sortedListData;
};
