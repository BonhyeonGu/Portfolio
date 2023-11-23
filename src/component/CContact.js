import styles from "./CContact.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CContact() {
    const [hover, setHover] = useState(false);
    const tempWidth = {
        display: "inline-block",
        width: "25px"
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
                            <i class="fas fa-home fa-2x"></i>&nbsp;<span className={styles.infoText}>부산 동래구</span>
                        </div><br /><br />
                    </div>
                </div>
                <div style={tempWidth} />
                <div
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(0)}
                style={{'backgroundImage': `url(img/d.png)`}}
                className={styles.thum}
                >
                    <div className={styles.thumOut} style={{ opacity: hover !== 1 ? 1 : 0 }}></div>
                    <div className={styles.thumIn} style={{ opacity: hover === 1 ? 1 : 0 }}>2022.08.25 서버 증설작업</div>
                </div>

            </div>
            <div style={endHeight} />
        </div>
    );
}