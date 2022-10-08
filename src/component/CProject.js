import styles from "./CProject.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CProject() {
    const [hover, setHover] = useState(0);
    const templateStyle = {
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
            <div>
            <div
                onMouseEnter={() => setHover(1)} // 마우스엔터(호버)시 키값이 저장된다
                onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                style={{'backgroundImage': `url(img/b11.png)`}}
                className={styles.thum}
            >
                {hover === 1 && (
                    <div className={styles.hover}>
                        영상링크를 입력하면 m분마다 주제를 출력해주는 서비스입니다.
                        해당 프로젝트는 우수성을 인정받아 다른 연구실 과제로 채택되었습니다.
                    </div>
                )}

                {hover === 0 && (
                    <div className={styles.unHover}>
                        영상링크를 입력하면 m분마다 주제를 출력해주는 서비스입니다.
                        해당 프로젝트는 우수성을 인정받아 다른 연구실 과제로 채택되었습니다.
                    </div>
                )}
            </div>
            <div style={templateStyle}></div>
            <div
                onMouseEnter={() => setHover(2)} // 마우스엔터(호버)시 키값이 저장된다
                onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
                style={{'backgroundImage': `url(img/b11.png)`}}
                className={styles.thum}
            >
                {hover === 2 && (
                    <div className={styles.hover}>
                        영상링크를 입력하면 m분마다 주제를 출력해주는 서비스입니다.
                        해당 프로젝트는 우수성을 인정받아 다른 연구실 과제로 채택되었습니다.
                    </div>
                )}

                {hover === 0 && (
                    <div className={styles.unHover}>
                        영상링크를 입력하면 m분마다 주제를 출력해주는 서비스입니다.
                        해당 프로젝트는 우수성을 인정받아 다른 연구실 과제로 채택되었습니다.
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}