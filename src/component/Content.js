import styles from "./Content.module.css";
import CAbout from './CAbout.js';
import CProject from './CProject.js';
import CExper from './CExper';
export default function Content() {
    return <div className={styles.box}>
        <div id="About">
            <CAbout />
        </div>
        <div id="Project">
            <CProject />
        </div>
        <div id="Exper">
            <CExper />
        </div>
        
    </div>
}