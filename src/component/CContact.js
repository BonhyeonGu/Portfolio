import styles from "./CContact.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CContact() {
    const [hover, setHover] = useState(false);
    const tempWidth = {
        display: "inline-block",
        width: "25px",
        height: "20px"
    }
    const endHeight = {
        height: "600px"
    }


    return (
        <div className={styles.box}>
            <hr />
            <div className={styles.title}>CONTACT</div>
            <hr />

            <div>
                <div className={styles.boxSubText}>
                    <div>
                        <div className={styles.boxInfo}>
                            <i class="fas fa-envelope fa-2x"></i>&nbsp;<span className={styles.infoText}>bonhyeon.gu@9bon.org</span>
                        </div><br /><br />
                        {/*<div className={styles.boxInfo}>
                            <i class="fas fa-phone fa-2x"></i>&nbsp;<span className={styles.infoText}></span>
                        </div><br /><br />*/}
                        <div className={styles.boxInfo}>
                            <i class="fas fa-home fa-2x"></i>&nbsp;<span className={styles.infoText}>Busan Dongnae</span>
                        </div><br /><br />
                    </div>
                </div>
                <div style={tempWidth} />

                <div>
                    <div
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(0)}
                    style={{'backgroundImage': `url(img/d.png)`, marginRight: '10px'}} // 오른쪽 마진 추가
                    className={styles.thum}
                    >
                        <div className={styles.thumOut} style={{ opacity: hover !== 1 ? 1 : 0 }}></div>
                        <div className={styles.thumIn} style={{ opacity: hover === 1 ? 1 : 0 }}>#서버 증설작업, 2022.08.25&nbsp;&nbsp;</div>
                    </div>
                    <div
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(0)}
                    style={{'backgroundImage': `url(img/E.png)`}}
                    className={styles.thum}
                    >
                        <div className={styles.thumOut} style={{ opacity: hover !== 2 ? 1 : 0 }}></div>
                        <div className={styles.thumIn} style={{ opacity: hover === 2 ? 1 : 0 }}>#추가된 H100의 설치, 2024.01.25&nbsp;&nbsp;</div>
                    </div>
                </div>


            </div>
            <div style={endHeight} />
        </div>
    );
}