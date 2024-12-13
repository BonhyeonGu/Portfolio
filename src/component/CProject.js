import styles from "./CProject.module.css";
import React, {useState} from 'react';

export default function CProject() {
    const [hover, setHover] = useState(0);
    const tempWidth = {
        width: "5px",
        display: "inline-block"
    }
    const tempHeight = {
        height: "1px",
        display: "inline-block"
    }
    const endHeight = {
        height: "80px",
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
                        위키피디아 덤프를 통한 유튜브 영상주제 추론 및 추천 지식그래프 생성 서비스.
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
                        onClick={() => window.open('https://github.com/kubeflow/kubeflow', '_blank')}>
                        다수의 GPU서버와 Kubernetes를 이용한 Kuberflow 분산처리-머신러닝 환경 배포.
                    </div>
                </div>
            </div>
            <div style={tempWidth} />
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
                        OGC 도시 개방형 표준 CityGML의 RDF 변환 및<br/> 지식그래프 생성.
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
                        OGC 센서 개방형 표준 STA의 온톨로지(in OWL)<br/> 설계 및 정량적 성능 평가, 동적 지식그래프 검증
                    </div>
                </div>
            </div>
            <div style={endHeight} />
        </div>
    );
}