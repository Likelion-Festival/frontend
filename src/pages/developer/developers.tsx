import styles from "@styles/developer/Developers.module.css";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import goBack from "@assets/bar/goBack.png";
import appImage from "@assets/developer/appImage.png";
import LikelionUP from "@assets/developer/LikelionUP.png";
import X from "@assets/developer/X.png";
import Sanghoon from "@assets/developer/Sanghoon.png";
import Seungah from "@assets/developer/Seungah.png";
import Minji from "@assets/developer/Minji.png";
import Jaehyun from "@assets/developer/Jaehyun.png";
import Minkyung from "@assets/developer/Minkyung.png";
import Hyunjoo from "@assets/developer/Hyunjoo.png";
import Sehyun from "@assets/developer/Sehyun.png";
import Yeaahn from "@assets/developer/Yeaahn.png";
import Sunhoo from "@assets/developer/Sunhoo.png";
import LikelionLogo from "@assets/main/Likelion-logo.png";
import useInstagramOpen from "@hooks/useLinkToInsta";
import Instagram from "@assets/developer/instagram.png";

export const DevelopersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
    const openInstagramOfLikelion = useInstagramOpen("likelion_erica");
    const handleBackClick = () => {
        navigate(-1); 
      };

    
      const handleFormClick = () => {
        // window.location.href = 'https://forms.gle/HjsQi1yt8S9sG7Z19';
        window.open("https://forms.gle/HjsQi1yt8S9sG7Z19", "_blank"); // 새 창 열기로 변경
      };


  return (
    <div className={styles.developerContainer}>
      <div className={styles.developerTitle2}>
        <img src={goBack} className={styles.goBack} onClick={handleBackClick} />
        만든 이들
      </div>

      <div className={styles.appIntro}>
        <img src={appImage} className={styles.appImage} />
        <img src={LikelionUP} className={styles.LikelionUP} />
        <div className={styles.introText}>
          한양대학교 ERICA 멋쟁이 사자처럼 12기
        </div>
        <img src={X} className={styles.introX} />
        <div className={styles.introText}>총동아리연합회 UP</div>
        <div className={styles.introText2}>
          <div className={styles.introTextInner}>
            안녕하세요, 저희는 전국 58개 대학과 함께하는
            <br />
            IT창업동아리 멋쟁이사자처럼입니다.
          </div>
          <div className={styles.introTextInner}>
            가을축제가 모두에게 특별한 축제로 남을 수 있게 <br />
            멋쟁이 사자 9명이 모여 축제의 콘텐츠를 <br />
            편리하게 즐길 수 있는 웹앱을 개발했습니다.
          </div>
          <div className={styles.introTextInner}>
            저희 웹앱과 함께 가을축제 Fall:ing에서 <br />
            즐거운 추억을 쌓으셨으면 좋겠습니다.
          </div>
        </div>
        <div className={styles.developerTitle}>Team Lead</div>
        <div className={styles.developerRoles}>
          <div className={styles.developerLine}>
            {" "}
            {/*상훈님 승아님 */}
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Sanghoon} className={styles.developerImage} />
                <div className={styles.developerTitle}>음상훈</div>
                <div className={styles.developerDepart}>컴퓨터학부</div>
                <div className={styles.developerParts}>
                  <div className={styles.developerDirector}>총괄</div>
                  <div className={styles.developerBE}>BE 팀원</div>
                </div>
              </div>
            </div>
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Seungah} className={styles.developerImage} />
                <div className={styles.developerTitle}>오승아</div>
                <div className={styles.developerDepart}>
                  커뮤니케이션디자인과
                </div>
                <div className={styles.developerParts}>
                  <div className={styles.developerDE}>DE 팀장</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.developerLine}>
            {" "}
            {/*민지님 재현님 */}
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Minji} className={styles.developerImage} />
                <div className={styles.developerTitle}>임민지</div>
                <div className={styles.developerDepart}>ICT융합학부</div>
                <div className={styles.developerParts}>
                  <div className={styles.developerFE}>FE 팀장</div>
                </div>
              </div>
            </div>
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Jaehyun} className={styles.developerImage} />
                <div className={styles.developerTitle}>송재현</div>
                <div className={styles.developerDepart}>인공지능학과</div>
                <div className={styles.developerParts}>
                  <div className={styles.developerBE}>BE 팀장</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.developerTitle}> Member </div>
        <div className={styles.developerRoles}>
          <div className={styles.developerLine}>
            {" "}
            {/*민경님 현주님 */}
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Minkyung} className={styles.developerImage} />
                <div className={styles.developerTitle}>김민경</div>
                <div className={styles.developerDepart}>주얼리패션디자인과</div>
                <div className={styles.developerParts}>
                  <div className={styles.developerDE}>DE팀원</div>
                </div>
              </div>
            </div>
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Hyunjoo} className={styles.developerImage} />
                <div className={styles.developerTitle}>윤현주</div>
                <div className={styles.developerDepart}>
                  커뮤니케이션디자인과
                </div>
                <div className={styles.developerParts}>
                  <div className={styles.developerDE}>DE팀원</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.developerLine}>
            {" "}
            {/*예안님 세현님 */}
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Yeaahn} className={styles.developerImage} />
                <div className={styles.developerTitle}>김예안</div>
                <div className={styles.developerDepart}>ICT융합학부</div>
                <div className={styles.developerParts}>
                  <div className={styles.developerFE}>FE 팀원</div>
                </div>
              </div>
            </div>
            <div className={styles.developerOne}>
              <div className={styles.developerDetails}>
                <img src={Sehyun} className={styles.developerImage} />
                <div className={styles.developerTitle}>김세현</div>
                <div className={styles.developerDepart}>ICT융합학부</div>
                <div className={styles.developerParts}>
                  <div className={styles.developerFE}>FE 팀원</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.developerLine}>
            {" "}
            {/*선후님 */}
            <div className={styles.developerLast}>
              <div className={styles.developerDetails}>
                <img src={Sunhoo} className={styles.developerImage} />
                <div className={styles.developerTitle}>김선후</div>
                <div className={styles.developerDepart}>응용물리학과</div>
                <div className={styles.developerParts}>
                  <div className={styles.developerFE}>FE 팀원</div>
                  <div className={styles.developerCO}>대외협력</div>
                </div>
              </div>
            </div>
          </div>
        </div>



            <div className={styles.contactBox} onClick={handleFormClick}>
                <div className={styles.contactPhraseBox}>
                <div className={styles.contactPhrase1}>축제 앱 어떠셨나요?</div>
                <div className={styles.contactPhrase2}>
                    멋사에게 후기를 알려주세요!
                </div>
          </div>
          <div className={styles.contactIcon}>
            <img src={LikelionLogo} />
          </div>

        </div>
        {/* 컨택 주소 - 메인과 동일 */}
        <div className={styles.contactBox} onClick={openInstagramOfLikelion}>
          <div className={styles.contactPhraseBox}>
            <div className={styles.contactPhrase1}>멋사가 궁금하다면?</div>
            <div className={styles.contactPhrase2}>인스타그램 바로가기</div>
          </div>
          <div className={styles.contactIcon2}>
            <img src={Instagram} className={styles.contactIcon2} />
          </div>
        </div>
      </div>
    </div>
  );
};
