import styles from "./CProject.module.css";
import React, {useState, useEffect, useRef} from 'react';


export default function CProjectSub(props) {
    const [hover, setHover] = useState(0);
    return (
        <div
            onMouseEnter={() => setHover(1)} // 마우스엔터(호버)시 키값이 저장된다
            onMouseLeave={() => setHover(0)}  // 마우스리브 시에는 키값이 지워진다
            style={{'backgroundImage': `url(props.img)`}}
            className={styles.thum}
        >
            {hover === 1 && (
                <div className={styles.hover}>
                    {props.str}
                </div>
            )}

            {hover === 0 && (
                <div className={styles.unHover}>
                    {props.str}
                </div>
            )}
        </div>
    );
}