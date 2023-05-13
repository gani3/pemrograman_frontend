import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar(params) {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__brand}>Movie App</div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to='/movie/AddMovie'>Add Movie</Link>
                        </li>
                        <li className={styles.navbar__item}>
                        <Link to='/movie/Populer'>Populer</Link>
                         </li>
                        <li className={styles.navbar__item}>
                            <Link to='/movie/NowPlaying'>Now Playing</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to='/movie/TopRated'>Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar