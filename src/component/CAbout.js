import styles from "./CAbout.module.css";
import React, {useState, useEffect, useRef} from 'react';
import FadeInOut from "./FadeInOut";
import Typewriter from 'typewriter-effect';
import ReactMarkdown from 'react-markdown';

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
            <hr />
            <a href="https://github.com/BonhyeonGu" target="_blank"><img src="https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white" className={styles.shield} /></a>&nbsp;&nbsp; 
            <a href="https://docs.9bon.org/" target="_blank"><img src="https://img.shields.io/badge/dev_blog-000000?style=for-the-badge&logo=hugo&logoColor=white" className={styles.shield} /></a>&nbsp;&nbsp;
            <a href="https://github.com/BonhyeonGu" target="_blank"><img src="https://img.shields.io/badge/youtube-000000?style=for-the-badge&logo=youtube&logoColor=white" className={styles.shield} /></a>
            <hr />
            <div className={styles.texts}>
                일편단심 네트워크-서버 프로그래밍 환경 공부를 하고 있습니다. <br /><br />
                Quagga, Iptable를 사용한 망 구축, 분리<br />
                Samba, Bind9, AD를 이용한 DC Trust, Kubeflow의 ML-OPS를 다루고 있습니다.<br />
            </div>
        </div>
    )
}