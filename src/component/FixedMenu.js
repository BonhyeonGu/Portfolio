import styles from "./FixedMenu.module.css";
import { Link } from "react-scroll"
export default function FixedMenu() {
    return <div className={styles.box}>
        <img className={styles.profile} src="img/profile.png"></img>
        <div className={styles.namekr}>구본현</div>
        <div className={styles.nameen}>(Bonhyeon Gu)</div>
        <div className={styles.fake} />
        <Link to="About" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>About</a>
        </Link>
        <br />
        <Link to="Project" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>Project</a>
        </Link>
        <br />
        <Link to="Exper" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>Exper</a>
        </Link>
        <br />
        <Link to="Contact" spy={true} smooth={true}>
            <a href="#" className={styles.btn}>Contact</a>
        </Link>
    </div>
}