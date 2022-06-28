import styles from "./Content.module.css";
import CAbout from './CAbout.js';
import CProject from './CProject.js';
export default function Content() {
    return <div>
        <div className={styles.fake}></div>
        <div className={styles.box}>
        <div id="Home">
            <CAbout />
        </div>
        <div id="About">
            <h2>2</h2>
        </div>
        <div id="Teck">
            <h2>3</h2>
        </div>
        <div id="Project">
            <CProject />
        </div>
        <div id="Contact">
            <h2>5</h2>
        </div>
    </div>
    </div>
}