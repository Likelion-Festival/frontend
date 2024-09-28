import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "@styles/BarList/BarList.module.css";
import { stores } from "./bar-types";
import goBack from "@assets/bar/goBack.png";
import searchResult from "@assets/bar/주점검색.png";
import noResult from "@assets/bar/no_result.png";
import inputGlass from "@assets/bar/search.png";
import { disassemble } from "es-hangul";

export const BarPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [title, setTitle] = useState("주점");

  // 주점 검색 필터링 - 디스어셈블 기능 추가
  const filteringStores = stores.filter((store) => {
    const disassembledStoreName = disassemble(store.name);
    const disassembledRepresentative = disassemble(store.representative);
    const disassembledDescription = disassemble(store.description);
    const disassembledSearchTerm = disassemble(searchTerm);

    return (
      disassembledStoreName.includes(disassembledSearchTerm) ||
      disassembledRepresentative.includes(disassembledSearchTerm) ||
      disassembledDescription.includes(disassembledSearchTerm)
    );
  });

  //검색시 하이라이트 기능 추가
  const highlightText = (
    text: string,
    searchTerm: string
  ): (string | JSX.Element)[] => {
    if (!searchTerm) return [text]; //text랑 searchTerm 타입 지정해주어야 오류가 안뜸!

    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part: string, index: number) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className={styles.highlighting}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleStoreClick = (storeId: number) => {
    navigate(`/bar-detail/${storeId}`);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setTitle("검색");
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setTitle("주점");
  };

  const handleBackClick = () => {
    setSearchTerm("");
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles["search-container"]}>
        <div className={styles.titles}>
          {title === "검색" && (
            <img
              src={goBack}
              className={styles.goBack}
              onClick={handleBackClick}
            />
          )}
          <div
            className={styles.title}
            style={{ textAlign: title === "검색" ? "center" : "left" }}
          >
            {title}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="부스명, 학과, 메뉴를 검색해보세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={`${styles.input} ${searchTerm ? styles.active : ""}`}
          />
          <img
            src={inputGlass}
            alt="검색"
            className={styles.inputGlass}
            onClick={handleInputFocus}
          />
        </div>
      </div>
      <div className={styles["store-list"]}>
        {isInputFocused && searchTerm === "" ? (
          <div className={styles.noResult}>
            <img
              src={searchResult}
              alt={`주점검색`}
              className={styles.searchResult}
            />
            <div className={styles["noResult-main"]}>
              찾고 싶은 주점을 검색해보세요
            </div>
          </div>
        ) : filteringStores.length > 0 ? (
          filteringStores.map((store, index) => (
            <div
              key={index}
              className={styles.store}
              onClick={() => handleStoreClick(store.id)}
            >
              <img
                src={store.imageUrl}
                alt={`${store.name} 이미지`}
                className={styles.storeImage}
              />
              <div className={styles.storeDetails}>
                <div className={styles.storeName}>
                  {highlightText(store.name, searchTerm)}
                </div>{" "}
                {/*하이라이트 기능을 위해서 함수 추가*/}
                <div className={styles.storeRepresentative}>
                  {highlightText(store.representative, searchTerm)}
                </div>
                <div className={styles.descriptions}>
                  <div className={styles.representMenu}>대표</div>
                  <div className={styles.descriptionMenu}>
                    {" "}
                    {highlightText(store.description, searchTerm)}{" "}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          //검색 키워드가 없을때?
          <div className={styles.noResult}>
            <img
              src={noResult}
              alt={`검색 결과 없음`}
              className={styles["noResult-image"]}
            />
            <div className={styles["noResult-main"]}>
              주점을 찾을 수 없습니다
            </div>
            <div className={styles["noResult-serve"]}>
              검색어에 오타가 있는지 확인해보세요!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
