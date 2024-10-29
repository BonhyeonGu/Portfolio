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
        height: "100px",
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
                <br />
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
                        위키피디아 전체 데이터를 이용하여, 유튜브 영상의 주제를 추론하고 관계 그래프 생성 시청자에게 추천을 제공해주는 서비스입니다.
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
                        Kubeflow
                    </div>
                    <div className={styles.thumIn}
                        style={{
                            opacity: hover === 2 ? 1 : 0,
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(img/b22.png)`
                        }}
                        onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        학교 서버를 여러대 이용, Kubernetes를 이용한 Kuberflow을 배포하여 학생들이 많은 서버의 분산처리-머신러닝 환경을 쉽게 접근할 수 있도록 만들었습니다.
                    </div>
                </div>
            </div>
            <div style={tempHeight} />
            <div>
                <div
                    onMouseEnter={() => setHover(3)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/b31.png)`}}
                    className={styles.thum}
                >
                    <div className={styles.thumOut} style={{ opacity: hover !== 3 ? 1 : 0 }} onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        CityGML To RDF
                    </div>
                    <div className={styles.thumIn}
                        style={{
                            opacity: hover === 3 ? 1 : 0,
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(img/b32.png)`
                        }}
                        onClick={() => window.open('https://github.com/BonhyeonGu/JenaController', '_blank')}>
                        도시를 표현하는 개방형 표준 CityGML 을 지식그래프 형태의 RDF로 변환하여 원하는 지식을 추론할 수 있게 하였습니다.
                    </div>
                </div>
                <div style={tempWidth} />
                <div
                    onMouseEnter={() => setHover(4)} // 마우스엔터(호버)시 키값이 저장된다
                    onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/b41.png)`}}
                    className={styles.thum}
                >
                    <div className={styles.thumOut} style={{ opacity: hover !== 4 ? 1 : 0 }} onClick={() => window.open('https://github.com/BonhyeonGu/Project-ROKC', '_blank')}>
                        STA-Sensor Ontology
                    </div>
                    <div className={styles.thumIn}
                        style={{
                            opacity: hover === 4 ? 1 : 0,
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(img/b42.png)`
                        }}
                        onClick={() => window.open('https://paper.9bon.org/ontologies/sensorthings/1.1', '_blank')}>
                        센서 개방형 표준 STA와 완전히 호환되는 측정값 및 메타데이터의 온톨로지를 설계하였습니다. 이는 도시 온톨로지와 연결 가능하며 추론에 최적화 되어있음을 입증했습니다.
                    </div>
                </div>
            </div>
            <div style={endHeight} />
        </div>
    );
}