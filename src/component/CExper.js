import styles from "./CExper.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CExper() {
    const tempWidth = {
        width: "20px",
        display: "inline-block"
    }
    const tempHeight = {
        height: "10px",
        display: "inline-block"
    }
    const [hover, setHover] = useState(0);
    return (
        <div className={styles.box}>
            <hr />
            <div className={styles.title}>
                EXPERIENCE
            </div>
            <hr />

            <div className={styles.texts}>저의 발자취 입니다.<br /><br /></div>
            <div
                onMouseEnter={() => setHover(1)} // 마우스엔터(호버)시 키값이 저장된다
                onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                style={{'backgroundImage': `url(img/c1.png)`}}
                className={styles.thum}
            >
                {hover != 1 && (
                    <div className={styles.thumOut}>
                        2014 부산지방대회 컴퓨터정보통신 과목 은상
                    </div>
                )}
                {hover == 1 && (
                    <div className={styles.thumIn}>
                        지방기능대회를 붙어 1년간 부산지방대표 선수로 활동했습니다.<br />
                        Quagga, Iptable를 사용한 망 구축, 분리 그리고 Samba, Bind9, AD를 이용한 DC Trust등의 설계를 구현했습니다.
                    </div>
                )}
            </div>
            <div style={tempHeight} />
            <div
                onMouseEnter={() => setHover(2)} // 마우스엔터(호버)시 키값이 저장된다
                onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                style={{'backgroundImage': `url(img/c2.png)`}}
                className={styles.thum}
            >
                {hover != 2 && (
                    <div className={styles.thumOut}>
                        2021 창업동아리팀 Pandemic
                    </div>
                )}
                {hover == 2 && (
                    <div className={styles.thumIn}>
                        창업팀의 백엔드-서버환경 담당으로 활동했습니다.<br />
                        RPA 솔루션을 이용하여 아주 많은 웹 정보를 내려받는 환경을 제작했습니다. MS-SQL, IIS, RDP등을 사용했습니다.
                    </div>
                )}
            </div>
            <div style={tempHeight} />
            <div
                onMouseEnter={() => setHover(3)} // 마우스엔터(호버)시 키값이 저장된다
                onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                style={{'backgroundImage': `url(img/c3.png)`}}
                className={styles.thum}
            >
                {hover != 3 && (
                    <div className={styles.thumOut}>
                        2022 서버팀 BeHarbor 창설
                    </div>
                )}
                {hover == 3 && (
                    <div className={styles.thumIn}>
                        교내 서버의 권한이 있는 공식 서버팀 BeHarbor를 창설하고 잊혀져가는 네트워크-서버 기술을 전파했습니다.<br />
                        학생들이 신청한, 또는 팀 내의 프로젝트 서비스들을 K8s, Docker를 이용해 관리했습니다.
                    </div>
                )}
            </div>
        </div>
    );
}