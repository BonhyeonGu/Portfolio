import styles from "./CProject.module.css";
import React, {useState} from 'react';

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
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/b11.png)`}}
                    className={styles.thum}
                >
                    <div className={styles.thumOut} style={{ opacity: hover !== 1 ? 1 : 0 }} onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        Project ROKC
                    </div>
                    <div className={styles.thumIn}
                        style={{
                            opacity: hover === 1 ? 1 : 0,
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(img/b12.png)`
                        }}
                        onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        위키피디아 전체 데이터를 이용하여, 유튜브 영상의 주제를 출력, 관계를 그래프화 해주는 서비스입니다. 딥러닝이 아닌, 지식추론의 이론입니다.
                    </div>
                </div>
                <div style={tempWidth} />
                <div
                    onMouseEnter={() => setHover(2)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/b21.png)`}}
                    className={styles.thum}
                >
                    <div className={styles.thumOut} style={{ opacity: hover !== 2 ? 1 : 0 }} onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        ShowPoolWeb Youtube KnowledgeGraph
                    </div>
                    <div className={styles.thumIn}
                        style={{
                            opacity: hover === 2 ? 1 : 0,
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(img/b22.png)`
                        }}
                        onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        주제 선별을 사용하여 다양한 영상정보를 Neo4jDB로 구성하고 웹서비스를 서비스 했습니다. 또한 해당 정보를 사용하여 추천알고리즘을 구성했습니다.
                    </div>
                </div>
            </div>
            <div style={tempHeight} />
            <div>
                <div
                    onMouseEnter={() => setHover(3)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/b41.png)`}}
                    className={styles.thum}
                >
                    <div className={styles.thumOut} style={{ opacity: hover !== 3 ? 1 : 0 }} onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        Kubeflow
                    </div>
                    <div className={styles.thumIn}
                        style={{
                            opacity: hover === 3 ? 1 : 0,
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(img/b42.png)`
                        }}
                        onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        학교 서버를 여러대 이용, Kubernetes를 이용한 Kuberflow을 배포하여 학생들이 많은 서버의 분산처리-머신러닝 환경을 쉽게 접근할 수 있도록 만들었습니다.
                    </div>
                </div>
                <div style={tempWidth} />
                <div
                    onMouseEnter={() => setHover(4)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/b2023-10-27.png)`}}
                    className={styles.thum}
                >
                    <div className={styles.thumOut} style={{ opacity: hover !== 4 ? 1 : 0 }} onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        준비중
                    </div>
                    <div className={styles.thumIn}
                        style={{
                            opacity: hover === 4 ? 1 : 0,
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(img/b2023-09-12.png)`
                        }}
                        onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        준비중
                    </div>
                </div>
            </div>
            <div style={endHeight} />
        </div>
    );
}