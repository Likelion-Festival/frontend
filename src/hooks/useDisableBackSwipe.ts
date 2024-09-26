import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useDisableBackSwipe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // 뒤로가기(popstate)를 막는 처리
      event.preventDefault();
      navigate(1); // 히스토리 스택에서 한 단계 앞으로
    };

    // popstate 이벤트 리스너 등록
    window.addEventListener("popstate", handlePopState);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
};

export default useDisableBackSwipe;
