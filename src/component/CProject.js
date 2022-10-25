import styles from "./CProject.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CProject() {
    const [hover, setHover] = useState(0);
    const tempWidth = {
        width: "20px",
        display: "inline-block"
    }
    const tempHeight = {
        height: "10px",
        display: "inline-block"
    }
    const endHeight = {
        height: "140px",
        display: "inline-block"
    }
    return (
        <div className={styles.box}>
            <hr />
            <div className={styles.title}>
                PROJECT
            </div>
            <hr />
            <div className={styles.texts}>
                제가 진행했던 프로젝트의 일부 입니다. 클릭하면 관련 페이지로 이동됩니다.<br /><br />
            </div>
            <div>
                <div
                    onMouseEnter={() => setHover(1)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{'backgroundImage': `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(img/b11.png)`}}
                    className={styles.thum}
                >
                    {hover != 1 && (
                        <div className={styles.thumOut} onClick={() => window.open('https://github.com/BonhyeonGu/Reasoning_over_Knowledge_Component_Streams', '_blank')}>
                            Reasoning over Knowledge
                        </div>
                    )}
                    {hover == 1 && (
                        <div className={`${styles.thumIn} ${styles.thumIn1}` } onClick={() => window.open('https://github.com/BonhyeonGu/Reasoning_over_Knowledge_Component_Streams', '_blank')}>
                            위키피디아 전체 데이터를 이용하여, 유튜브 영상링크를 입력하면 주제를 출력해주는 서비스입니다. 딥러닝이 아닌, 지식추론의 이론입니다.
                        </div>
                    )}
                </div>
                <div style={tempWidth} />
                <div
                    onMouseEnter={() => setHover(2)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{'backgroundImage': `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(img/b21.png)`}}
                    className={styles.thum}
                >
                    {hover != 2 && (
                        <div className={styles.thumOut} onClick={() => window.open('https://github.com/BonhyeonGu/ShowPoolWeb_Youtube_KnowledgeGraph', '_blank')}>
                            ShowPoolWeb Youtube KnowledgeGraph
                        </div>
                    )}
                    {hover == 2 && (
                        <div className={`${styles.thumIn} ${styles.thumIn2}` } onClick={() => window.open('https://github.com/BonhyeonGu/ShowPoolWeb_Youtube_KnowledgeGraph', '_blank')}>
                            주제 선별을 사용하여 다양한 영상정보를 Neo4jDB로 구성하고 웹서비스를 서비스 했습니다. 또한 해당 정보를 사용하여 추천알고리즘을 구성했습니다.
                        </div>
                    )}
                </div>
            </div>
            <div style={tempHeight} />
            <div>
                <div
                    onMouseEnter={() => setHover(3)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{'backgroundImage': `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(img/b31.png)`}}
                    className={styles.thum}
                >
                    {hover != 3 && (
                        <div className={styles.thumOut} onClick={() => window.open('https://github.com/BonhyeonGu/3dcityWebLab', '_blank')}>
                            3DCityDB
                        </div>
                    )}
                    {hover == 3 && (
                        <div className={`${styles.thumIn} ${styles.thumIn3}` } onClick={() => window.open('https://github.com/BonhyeonGu/3dcityWebLab', '_blank')}>
                            3DCityDB를 포함한 각종 서비스 구현을 통해 미리 준비된 여러 도시 정보들을 올리고 확인할 수 있는 플랫폼을 제작했습니다. 해당 플랫폼은 국가 사업에 포함되었습니다.
                        </div>
                    )}
                </div>
                <div style={tempWidth} />
                <div
                    onMouseEnter={() => setHover(4)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{'backgroundImage': `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(img/b41.png)`}}
                    className={styles.thum}
                >
                    {hover != 4 && (
                        <div className={styles.thumOut} onClick={() => window.open('https://github.com/BonhyeonGu/Reasoning_over_Knowledge_Component_Streams', '_blank')}>
                            Kubeflow
                        </div>
                    )}
                    {hover == 4 && (
                        <div className={`${styles.thumIn} ${styles.thumIn4}` } onClick={() => window.open('https://github.com/BonhyeonGu/Reasoning_over_Knowledge_Component_Streams', '_blank')}>
                            학교 서버를 여러대 이용, Kubernetes를 이용한 Kuberflow을 배포하여 학생들이 많은 서버의 분산처리-머신러닝 환경을 쉽게 접근할 수 있도록 만들었습니다.
                        </div>
                    )}
                </div>
            </div>
            <div style={endHeight} />
        </div>
    );
}