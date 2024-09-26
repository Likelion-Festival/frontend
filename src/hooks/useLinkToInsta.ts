const useInstagramOpen = (username: string) => {
  const instagramURL = `https://www.instagram.com/${username}`; // 웹 URL
  const instagramAppURL = `instagram://user?username=${username}`; // 인스타그램 앱 URL 스킴

  const openInstagram = () => {
    // 앱 링크 시도
    window.location.href = instagramAppURL;

    // 500ms 후 앱이 열리지 않았다면 웹 URL을 엽니다.
    const timeoutId = setTimeout(() => {
      window.open(instagramURL, "_blank");
    }, 500);

    // 특정한 모바일 브라우저 환경에서는 앱이 성공적으로 열리면 'beforeunload' 이벤트로 감지
    const handleBeforeUnload = () => {
      clearTimeout(timeoutId); // 앱이 열리면 타임아웃 취소
    };

    // 이벤트 리스너 등록
    window.addEventListener("beforeunload", handleBeforeUnload);

    // 이벤트 리스너 제거
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };

  return openInstagram;
};

export default useInstagramOpen;
