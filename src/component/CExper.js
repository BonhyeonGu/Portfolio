import styles from "./CExper.module.css";
import React, {useState} from 'react';


export default function CExper() {
    const tempWidth = {
        width: "20px",
        display: "inline-block"
    }
    const tempHeight = {
        height: "2px",
        display: "inline-block"
    }
    const endHeight = {
        height: "80px",
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

            <div className={styles.texts}><br /><br /></div>
            <div
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(0)}
                style={{'backgroundImage': `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(img/c1.png)`}}
                className={styles.thum}
            >
                <div className={styles.thumOut} style={{ opacity: hover !== 1 ? 1 : 0 }}>
                    국제기능올림픽대회 산하 2014 부산지방대회 컴퓨터정보통신 과목 2위
                </div>
                <div className={styles.thumIn} style={{ opacity: hover === 1 ? 1 : 0 }}>
                    지방기능대회에서 유효한 성적을 거두어 1년간 부산대표 선수로 활동했습니다.<br />
                    QUAGGA, IPTABLE를 사용한 망 구축 및 분리 및 SAMBA, BIND9, AD를 이용한 DC Trust 설계를 구현했습니다.
                </div>
            </div>
            <div style={tempHeight} />
            <div
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(0)}
                style={{'backgroundImage': `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(img/c2.png)`}}
                className={styles.thum}
            >
                <div className={styles.thumOut} style={{ opacity: hover !== 2 ? 1 : 0 }}>
                    2020 창업동아리팀 Pandemic
                </div>
                <div className={styles.thumIn} style={{ opacity: hover === 2 ? 1 : 0 }}>
                    창업팀의 백엔드-서버환경 담당으로 활동했습니다. RPA 솔루션을 이용하여 많은 웹 정보를 내려받는 환경을<br />
                    제작했습니다. MS-SQL, IIS, ShellScript, RDP등을 사용했습니다.
                </div>
            </div>
            <div style={tempHeight} />
            <div
                onMouseEnter={() => setHover(3)}
                onMouseLeave={() => setHover(0)}
                style={{'backgroundImage': `url(img/c3.png)`}}
                className={styles.thum}
            >
                <div className={styles.thumOut} style={{ opacity: hover !== 3 ? 1 : 0 }}>
                    2021 교내 서버팀 창설
                </div>
                <div className={styles.thumIn} style={{ opacity: hover === 3 ? 1 : 0 }}>
                    교내 서버 권한이 있는 공식 지원 서버팀 BeHarbor를 창설하고 네트워크-서버 기술을 스터디 했습니다.<br />
                    학생들의 팀 프로젝트 서비스들을 K8s, Docker를 이용해 관리했습니다.
                </div>
            </div>
            <div style={tempHeight} />
            <div
                onMouseEnter={() => setHover(4)}
                onMouseLeave={() => setHover(0)}
                style={{'backgroundImage': `url(img/c4.png)`}}
                className={styles.thum}
            >
                <div className={styles.thumOut} style={{ opacity: hover !== 4 ? 1 : 0 }}>
                    2022 졸업작품 전시회, Fairday 1위 (3인 팀)
                </div>
                <div className={styles.thumIn} style={{ opacity: hover === 4 ? 1 : 0 }}>
                    Project ROKC의 하위 서비스, 유튜브 영상 지식추론을 통하여 교내 Fairday에서 최우수상을 취득 하였습니다.
                </div>
            </div>
            <div style={endHeight} />
        </div>
    );
}