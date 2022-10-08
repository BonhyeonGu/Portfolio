import styles from "./CAbout.module.css";
import React, {useState, useEffect, useRef} from 'react';
import Typewriter from 'typewriter-effect';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'img/a1.png',
    caption: 'Slide 1',
  },
  {
    url: 'img/a2.png',
    caption: 'Slide 2'
  },
  {
    url: 'img/a3.png',
    caption: 'Slide 3'
  },
];

export default function CAbout() {
    return (
        <div className={styles.box}>
            {/*<div className={styles.fake} />*/}
            <div className="slide-container">
              <Fade>
              {slideImages.map((slideImage, index)=> (
                  <div className="each-fade" key={index}>
                    <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                      <div className={styles.fakeImg} />
                    </div>
                  </div>
              ))} 
              </Fade>
            </div>
            <br />
            {/*<img src="img/a1.png" className={styles.img} />*/}
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
            <a href="https://www.youtube.com/channel/UCAEuOSt3IFWM1ga63-KZrLA" target="_blank"><img src="https://img.shields.io/badge/youtube-000000?style=for-the-badge&logo=youtube&logoColor=white" className={styles.shield} /></a>
            <hr />
            <div className={styles.texts}>
                일편단심 네트워크-서버 프로그래밍 환경 공부를 하고 있습니다. <br /><br />
                Quagga, Iptable를 사용한 망 구축, 분리<br />
                Samba, Bind9, AD를 이용한 DC Trust, Kubeflow의 ML-OPS를 다루고 있습니다.<br />
            </div>
        </div>
    )
}