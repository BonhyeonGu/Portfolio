import styles from "./CProject.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CProject() {
    const tempWidth = {
        width: "20px",
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
            <div style={{'backgroundImage': `url(img/b11.png)`}} className={styles.thum}>   
                <div className={`${styles.thumIn} ${styles.thumIn1}`} onClick={() => window.open('https://github.com/BonhyeonGu/Reasoning_over_Knowledge_Component_Streams', '_blank')}>
                    위키피디아 전체 데이터를 이용하여, 유튜브 영상링크를 입력하면 m분마다 주제를 출력해주는 서비스입니다. 해당 프로젝트는 우수성을 인정받아 다른 연구실 과제로 이전되었습니다.
                </div>
            </div>
            <div style={tempWidth} />
            <div style={{'backgroundImage': `url(img/b21.png)`}} className={styles.thum}>
                <div className={`${styles.thumIn} ${styles.thumIn2}`} onClick={() => window.open('https://github.com/BonhyeonGu/ShowPoolWeb_Youtube_KnowledgeGraph', '_blank')}>
                    주제 선별을 사용하여 많은 영상을 그래프 데이터베이스로 구축하여 해당 쿼리를 이용하는 프론트 페이지를 만들었습니다. 이 또한 앞과 다른 연구실 과제로 이전되었습니다.
                </div>
            </div>
            <div style={{'backgroundImage': `url(img/b11.png)`}} className={styles.thum}>   
                <div className={styles.thumIn} onClick={() => window.open('https://github.com/BonhyeonGu/3dcityWebLab', '_blank')}>
                    3DCityDB를 포함한 각종 서비스 구현을 통해 미리 준비된 여러 도시 정보들을 올리고 확인할 수 있는 플랫폼을 제작했습니다. 해당 플랫폼은 국가 사업에 포함되었습니다.
                </div>
            </div>
            <div style={tempWidth} />
            <div style={{'backgroundImage': `url(img/b11.png)`}} className={styles.thum}>
                <div className={styles.thumIn} onClick={() => window.open('https://github.com/BonhyeonGu/Reasoning_over_Knowledge_Component_Streams', '_blank')}>
                    Kubernetes를 이용한 Kuberflow을 배포하여 학생들이 많은 서버의 분산처리-머신러닝 환경을 쉽게 접근할 수 있도록 만들었습니다.
                </div>
            </div>
        </div>
    );
}