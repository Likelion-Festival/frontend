import styles from "@styles/developer/Developers.module.css";
import goBack from "@assets/bar/goBack.png";
import appImage from "@assets/developer/appImage.png";
import LikelionUP from "@assets/developer/LikelionUP.png";
import X from "@assets/developer/X.png";
import 상훈님 from "@assets/developer/상훈님.png";
import 승아님 from "@assets/developer/승아님.png";
import 민지님 from "@assets/developer/민지님.png";
import 재현님 from "@assets/developer/재현님.png";
import 민경님 from "@assets/developer/민경님.png";
import 현주님 from "@assets/developer/현주님.png";
import 세현님 from "@assets/developer/세현님.png";
import 예안님 from "@assets/developer/예안님.png";
import 선후님 from "@assets/developer/선후님.png";
import LikelionLogo from "@assets/main/Likelion-logo.svg";
import useInstagramOpen from "@hooks/useLinkToInsta";


export const DevelopersPage = () => {

    const openInstagramOfLikelion = useInstagramOpen("likelion_erica");

  return (
    <div className={styles.developerContainer}>

        <div className={styles.developerTitle}>
            <img src={goBack} className={styles.goBack} />
            만든 이들
        </div>

        <div className={styles.appIntro}>
            <img src={appImage} className={styles.appImage} />
            <img src={LikelionUP} className={styles.LikelionUP}/>
            
            <div className={styles.introText}>
                한양대학교 ERICA 멋쟁이 사자처럼 12기
            </div>
            <img src={X} className={styles.introX} />
            <div className={styles.introText}>
                총동아리연합회 UP
            </div>
            <div className={styles.introText2}>
                <div className={styles.introTextInner}>
                안녕하세요, 저희는 전국 58개 대학과 함께하는<br/>
                IT창업동아리 멋쟁이사자처럼입니다.
                </div>
                <div className={styles.introTextInner}>
                가을축제가 모두에게 특별한 축제로 남을 수 있게 <br/>
                멋쟁이 사자 9명이 모여 축제의 콘텐츠를 <br/>
                편리하게 즐길 수 있는 웹앱을 개발했습니다.
                </div>
                <div className={styles.introTextInner}>
                저희 웹앱과 함께 가을축제 Fall:ing에서 <br/>
                즐거운 추억을 쌓으셨으면 좋겠습니다.
                </div>
            </div>

         <div className={styles.developerTitle}>
         Team Lead
        </div>

        <div className={styles.developerRoles}>

            <div className={styles.developerLine}> {/*상훈님 승아님 */}
                <div className={styles.developerOne}>
                    <div className={styles.developerDetails}>
                        <img src={상훈님} className={styles.developerImage}/>
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
                        <img src={승아님} className={styles.developerImage}/>
                        <div className={styles.developerTitle}>오승아</div>
                        <div className={styles.developerDepart}>커뮤니케이션디자인과</div>
                        <div className={styles.developerParts}>
                            <div className={styles.developerDE}>DE 팀장</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.developerLine}> {/*민지님 재현님 */}
                <div className={styles.developerOne}>
                    <div className={styles.developerDetails}>
                        <img src={민지님} className={styles.developerImage}/>
                        <div className={styles.developerTitle}>임민지</div>
                        <div className={styles.developerDepart}>ICT융합학부</div>
                        <div className={styles.developerParts}>
                            <div className={styles.developerFE}>FE 팀장</div>
                        </div>
                    </div>
                </div>
                <div className={styles.developerOne}>
                    <div className={styles.developerDetails}>
                        <img src={재현님} className={styles.developerImage}/>
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
            <div className={styles.developerLine}> {/*민경님 현주님 */}
                <div className={styles.developerOne}>
                    <div className={styles.developerDetails}>
                        <img src={민경님} className={styles.developerImage}/>
                        <div className={styles.developerTitle}>김민경</div>
                        <div className={styles.developerDepart}>주얼리패션디자인과</div>
                        <div className={styles.developerParts}>
                            <div className={styles.developerDE}>DE팀원</div>
                        </div>
                    </div>
                </div>
                <div className={styles.developerOne}>
                    <div className={styles.developerDetails}>
                        <img src={현주님} className={styles.developerImage}/>
                        <div className={styles.developerTitle}>윤현주</div>
                        <div className={styles.developerDepart}>커뮤니케이션디자인과</div>
                        <div className={styles.developerParts}>
                            <div className={styles.developerDE}>DE팀원</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.developerLine}> {/*예안님 세현님 */}
                <div className={styles.developerOne}>
                    <div className={styles.developerDetails}>
                        <img src={예안님} className={styles.developerImage}/>
                        <div className={styles.developerTitle}>김예안</div>
                        <div className={styles.developerDepart}>ICT융합학부</div>
                        <div className={styles.developerParts}>
                            <div className={styles.developerFE}>FE 팀원</div>
                        </div>
                    </div>
                </div>
                <div className={styles.developerOne}>
                    <div className={styles.developerDetails}>
                        <img src={세현님} className={styles.developerImage}/>
                        <div className={styles.developerTitle}>김세현</div>
                        <div className={styles.developerDepart}>ICT융합학부</div>
                        <div className={styles.developerParts}>
                            <div className={styles.developerFE}>FE 팀원</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.developerLine}> {/*선후님 */}
                <div className={styles.developerLast}>
                    <div className={styles.developerDetails}>
                        <img src={선후님} className={styles.developerImage}/>
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


            {/* 컨택 주소 - 메인과 동일 */}
            <div className={styles.contactBox} onClick={openInstagramOfLikelion}>
            <div className={styles.contactPhraseBox}>
              <div className={styles.contactPhrase1}>멋사가 궁금하다면?</div>
              <div className={styles.contactPhrase2}>
                인스타그램 바로가기
              </div>
            </div>
            <div className={styles.contactIcon}>
              <img src={LikelionLogo} />
            </div>
          </div>



        </div>



    </div>
  );
}
