import styles from "./CAbout.module.css";
import React, {useState, useEffect, useRef} from 'react';
import FadeInOut from "./FadeInOut";
const images = ["img/a1.png", "img/a2.png"];

export default function CAbout() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const toggleShow1 = () => setShow1(!show1);
    const toggleShow2 = () => setShow2(!show2);
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
        toggleShow1();
        toggleShow2();
    }, 5000)

    return (
      <div className={styles.box}>
        <div className={styles.fake}></div>
        <FadeInOut show={show1} duration={500} style={extraStyles}>
          <img src="img/a1.png" className={styles.img} />
        </FadeInOut>
        <FadeInOut show={show2} duration={500} style={extraStyles}>
          <img src="img/a2.png" className={styles.img} />
        </FadeInOut>
        <div className={styles.fake} />
        <div className={styles.texts}>반갑습니다.  </div>
      </div> 
    )
}