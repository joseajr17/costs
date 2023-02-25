import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

function Footer(){

    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.item}> <Link to="https://github.com/joseajr17"><FaGithub /></Link></li>
                <li className={styles.item}> <Link to="https://www.instagram.com/joseajr_/"><FaInstagram /></Link></li>
                <li className={styles.item}> <Link to="https://www.linkedin.com/in/joseantonio1712/"><FaLinkedin /></Link></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer