import styles from "./Content.module.css";
import CAbout from './CAbout.js';
import CProject from './CProject.js';
export default function Content() {
    return <div className={styles.box}>
        <div id="About">
            <CAbout />
        </div>
        <div id="Project">
            <CProject />
        </div>
        <div id="Contact">
        </div>
    </div>
}