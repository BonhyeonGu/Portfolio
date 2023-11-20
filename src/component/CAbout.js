import styles from "./CAbout.module.css";
import React, {useState, useEffect, useRef} from 'react';
import Typewriter from 'typewriter-effect';

export default function CAbout() {
    const slideImages = [
        { url: 'img/a1.png', caption: '슬라이드 1' },
        { url: 'img/a2.png', caption: '슬라이드 2' },
        { url: 'img/a3.png', caption: '슬라이드 3' },
    ];

    // 현재 슬라이드 인덱스를 위한 상태
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFading, setIsFading] = useState(false);
    useEffect(() => {
        setIsFading(true); // 페이드 인 시작
        const timer = setInterval(() => {
            setIsFading(false); // 페이드 아웃 시작
            setTimeout(() => {
                setCurrentSlide((prevSlide) => prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1);
            }, 3000); // 페이드 아웃 시간과 맞춰야 함
        }, 5000);
    
        // 컴포넌트가 언마운트될 때 인터벌을 정리합니다
        return () => clearInterval(timer);
    }, [currentSlide]); // 의존성 배열에 currentSlide 추가
    
    const endHeight = {
        height: "140px",
        display: "inline-block"
    }

    return (
        <div className={styles.box}>
            {/*<div className={styles.fake} />*/}
            <div className={styles.slideshow}>
                {slideImages.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.url}
                        alt={slide.caption}
                        className={styles.slideImage}
                        style={{
                            opacity: currentSlide === index ? 1 : 0,
                            zIndex: currentSlide === index ? 1 : -1
                        }}
                    />
                ))}
            </div>
            <br />
            <div className={styles.title}><Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('반갑습니다. 배고픈')
                .pauseFor(300)
                .deleteChars(3)	
                .typeString('공부에 목마른 개발자 <b>구본현</b>입니다.')
                .pauseFor(2500)
                .start();
            }}/></div>
            <hr />
            <a href="https://github.com/BonhyeonGu" target="_blank"><img src="https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white" className={styles.shield} /></a>&nbsp;&nbsp; 
            <a href="https://docs.9bon.org/" target="_blank"><img src="https://img.shields.io/badge/dev_blog-000000?style=for-the-badge&logo=hugo&logoColor=white" className={styles.shield} /></a>&nbsp;&nbsp;
            <hr />
            <div className={styles.texts}>
                온톨로지, 병렬처리, 네트워크-서버 환경개발 공부를 하고 있습니다. <br /><br />
            </div>
            <div style={endHeight} />
        </div>
    )
}