import styles from "./CContact.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CContact() {
    const tempWidth = {
        position: "relative",
        width: "25px",
        height: "10px",
        display: "inline-block",
        float: "left"
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
                        <div className={styles.boxInfo}>
                            <i class="fas fa-phone fa-2x"></i>&nbsp;<span className={styles.infoText}>010-3596-9952</span>
                        </div><br /><br />
                        <div className={styles.boxInfo}>
                            <i class="fas fa-home fa-2x"></i>&nbsp;<span className={styles.infoText}>부산광역시 동래구</span>
                        </div><br /><br />
                    </div>
                </div>
                <div style={tempWidth} />
                <div className={styles.boxSubImg} style={{'backgroundImage': `url(img/d.png)`}}><div className={styles.boxSubImgTag}>2022.08.25 증설 작업</div></div>
            </div>
            <div style={endHeight} />
        </div>
    );
}