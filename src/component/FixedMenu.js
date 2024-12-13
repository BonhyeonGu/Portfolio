import styles from "./FixedMenu.module.css";
import { Link } from "react-scroll"
export default function FixedMenu() {
    return <div className={styles.box}>
        <img className={styles.profile} src="img/profile.png"></img>
        <div className={styles.namekr}>구본현</div>
        <div className={styles.nameen}>Bonhyeon Gu</div>
        <div className={styles.fake} />
        <Link to="About" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>About</a>
        </Link>

        <Link to="Project" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>Project</a>
        </Link>

        <Link to="Exper" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>Exper</a>
        </Link>

        <Link to="Contact" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>Contact</a>
        </Link>
        
        <div className={styles.smallBox}>
            <a href="https://github.com/BonhyeonGu/Portfolio" className={styles.btn} target="_blank" rel="noopener noreferrer">a repository of this</a>
        </div>
    </div>
}