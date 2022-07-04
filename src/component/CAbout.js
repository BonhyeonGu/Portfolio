import styles from "./CAbout.module.css";
import React, {useState, useEffect, useRef} from 'react';
import FadeInOut from "./FadeInOut";
import Typewriter from 'typewriter-effect';

export default function CAbout() {
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);
    const extraStyles = {
      // position: "fixed",
      // top: "30px",
      // left: 0,
      // right: 0,
      // bottom: 0,
      // background: "rgba(0, 0, 0, 0.4)",
      // color: "#FFF"
    };
    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    }

    useInterval(() => {
      toggleShow();
    }, 2000)

    const github = 'https://img.shields.io/badge/-debian-A81D33';

    return (
      <div className={styles.box}>
        <div className={styles.fake} />
        <img src="img/a1.png" className={styles.img} />
        <div className={styles.title}><Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('반갑습니다. 배고픈')
            .pauseFor(300)
            .deleteChars(3)	
            .typeString('목마른 서버 개발자 <b>구본현</b>입니다.')
            .pauseFor(2500)
            .start();
        }}/></div>
        <br />
        <img src={github}></img>
        <div className={styles.texts}></div>
      </div> 
    )
}