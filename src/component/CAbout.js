import styles from "./CAbout.module.css";
import React, {useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';

export default function CAbout() {
    const slideImages = [
        { url: 'img/a2024_08_13.png', caption: 's1' },
        { url: 'img/a2024_12_02.png', caption: 's1' },
        { url: 'img/a2.png', caption: 's2' },
        { url: 'img/a1.png', caption: 's1' },
        { url: 'img/a2023_11_16.png', caption: 's3' }
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
        }, 4000);
    
        // 컴포넌트가 언마운트될 때 인터벌을 정리합니다
        return () => clearInterval(timer);
    }, [currentSlide]); // 의존성 배열에 currentSlide 추가
    
    const endHeight = {
        height: "80px",
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
            typewriter.typeString('배고픈')
                .pauseFor(300)
                .deleteChars(3)
                .typeString('공부에 목마른 학생 <b>구본현</b>입니다. 관심사는 서버-네트워크 그리고 온톨로지입니다.')
                .pauseFor(2500)
                .start();
            }}/></div>
            <hr />
            <a href="https://github.com/BonhyeonGu" target="_blank"><img src="https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white" className={styles.shield} /></a>&nbsp;&nbsp; 
            <a href="https://orcid.org/0009-0004-3256-7949" target="_blank"><img src="https://img.shields.io/badge/orcid-000000?style=for-the-badge&logo=orcid&logoColor=white" className={styles.shield} /></a>&nbsp;&nbsp;
            <hr />
            <div className={styles.texts}>
            </div><br />
            <div className={styles.paperBox}>
                {/*<div className={styles.papers} ><i>Feb 2025.</i><br />동아대 컴퓨터공학과 석사졸업</div><br />*/}
                <div className={styles.papers} ><i>Jan 2025.</i> IEEE IoT: 심사중</div><br />
                <div className={styles.papers} ><i>Dec 2024.</i> 국내특허출원: 개방형 표준 기반 온톨로지를 가지는 센서 메타데이터 처리 장치</div><br />
                <div className={styles.papers} onClick={() => window.open('https://doi.org/10.9717/kmms.2024.27.11.1326', '_blank')}><i>Nov 2024.</i> KMMS: A Digital Twin Ontology Based on Open Standards for Integrating Heterogeneous Smart City Metadata</div><br />
                {/* <div className={styles.papers} onClick={() => window.open('https://doi.org/10.3390/s24123761', '_blank')}><i>Jun 2024.</i><br/>Digital Twin Smart City: Integrating IFC and CityGML with Semantic Graph for Advanced 3D City Model Visualization</div><br/> */}
                {/* <div className={styles.papers} onClick={() => window.open('https://doi.org/10.9717/kmms.2023.26.2.264', '_blank')}><i>Feb 2023.</i><br/>SpeeKG: A Knowledge Graph-Based Semantic Speech Translation for Online Educational Video Recommendation</div><br/> */}
            </div>  
            <div style={endHeight} />
        </div>
    )
}