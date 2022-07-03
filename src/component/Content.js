import styles from "./Content.module.css";
import CAbout from './CAbout.js';
import CTeck from './CTeck.js';
import CProject from './CProject.js';
export default function Content() {
    return <div className={styles.box}>
        <div id="About">
            <CAbout />
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
}