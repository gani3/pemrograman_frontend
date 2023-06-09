
import styles from "./Hero.module.css"

function Hero(params) {
    return(
       <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>Spiderman</h2>
                <h3 className={styles.hero__genre}>Genre : Thriller, Drama, Romance</h3>
                <p className={styles.hero__description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam.
                </p>
            </div>
            <div className={styles.hero__right}>
                <img className={styles.hero__image} src="https://picsum.photos/536/354" alt="placeholder" />
            </div>
        </section>
       </div> 
    )
}

export default Hero