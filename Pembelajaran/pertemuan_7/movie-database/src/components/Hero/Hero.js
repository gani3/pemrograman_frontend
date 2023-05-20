
import styles from "./Hero.module.css"
import { useState, useEffect } from "react"

function Hero(params) {
 
    const [detail, setDetail] = useState('')

    useEffect(() => {
        GetData('https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590')
    }, [])

    const GetData = async(url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        setDetail(data)
    }

    return(
       <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>{detail.Title}</h2>
                <h3 className={styles.hero__genre}>Genre : {detail.Genre}</h3>
                <p className={styles.hero__description}>
                    {detail.Plot}
                </p>
            </div>
            <div className={styles.hero__right}>
                <img className={styles.hero__image} src={detail.Poster} alt="placeholder" />
            </div>
        </section>
       </div> 
    )
}

export default Hero