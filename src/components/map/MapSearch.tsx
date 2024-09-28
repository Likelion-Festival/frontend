import arrowBackIcon from "@assets/map/arrow_back_icon.svg";
import styles from "@styles/map/MapSearch.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { disassemble } from "es-hangul";
import searchHanyang from "@assets/map/search_hanyang.png";
import noResultHanyang from "@assets/map/no-result-hanyang.png";
import {
  barInfo,
  eventInfo,
  fleaMarketInfo,
  foodCourtInfo,
  lakeParkInfo,
  picnicInfo,
  promotionInfo,
} from "@constant/marker";
import { MarkerInfoType } from "@type/map";

export const MapSearch = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const hasMatchingTerm = [
    ...eventInfo,
    ...promotionInfo,
    ...picnicInfo,
    ...fleaMarketInfo,
    ...lakeParkInfo,
    ...barInfo,
    ...foodCourtInfo,
  ].filter((v) => {
    const disassembledWord = disassemble(inputValue);

    const disassembledName = disassemble(v.name);
    const disassembledIndex = disassemble(v.index);
    return (
      disassembledName.includes(disassembledWord) ||
      disassembledIndex.includes(disassembledWord)
    );
  });

  console.log(hasMatchingTerm);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 마운트 시 인풋 포커스
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className={styles.search_wrapper}>
      <div className={styles.search_header}>
        <div className={styles.search_title}>
          <img
            src={arrowBackIcon}
            alt="arrow-back-icon"
            onClick={() => navigate("/map")}
          />
          <h3>검색</h3>
        </div>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            value={inputValue}
            type="text"
            ref={inputRef}
            placeholder="부스, 주점, 키워드를 검색해보세요"
            onChange={handleInputChange}
          />
          <button type="submit" />
        </form>
      </div>

      <div className={styles.content}>
        {inputValue === "" && (
          <div className={styles.focus}>
            <img src={searchHanyang} alt="search-hanyang" />
            <strong>찾고싶은 장소를 검색해보세요!</strong>
          </div>
        )}

        {inputValue && hasMatchingTerm.length > 0 && (
          <div className={styles.searching}>
            <ul>
              {hasMatchingTerm.map((v: MarkerInfoType) => (
                <li>
                  <h4>{v.name}</h4>
                  <span>{v.index}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {inputValue && hasMatchingTerm.length === 0 && (
          <div className={styles.no_result}>
            <img src={noResultHanyang} alt="search-hanyang" />
            <strong>검색결과를 찾을 수 없습니다</strong>
            <span>검색어에 오타가 있는지 확인해보세요!</span>
          </div>
        )}
      </div>
    </div>
  );
};
