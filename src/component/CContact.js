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

            <div className={styles.texts}>봐주셔서 감사합니다. 좋은하루 되세요.<br /><br /></div>
            <div>
                <div className={styles.boxSubText}>
                <i class="fas fa-envelope fa-2x"></i> bonhyeon.gu@9bon.org<br /><br />
                <i class="fas fa-phone fa-2x"></i> 010-3596-9952<br /><br />
                <i class="fas fa-home fa-2x"></i> 부산광역시 동래구<br /><br />
                </div>
                <div style={tempWidth} />
                <div className={styles.boxSubImg} style={{'backgroundImage': `url(img/d.png)`}}></div>
            </div>
            <div style={endHeight} />
        </div>
    );
}