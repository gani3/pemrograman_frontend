
import axios from "axios";
import Button from "../Ui/Button/Button"
import styles from "./Hero.module.css"
import React,{ useState, useEffect } from "react"

function Hero(params) {
    const api_key = process.env.REACT_APP_API_KEY;
    const [detail, setDetail] = useState('')
    const [trailer, setTrailer] = useState('')
    const [genre, setGenre] = useState([])

    useEffect(() => {
        GetData(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
    }, [])

    const GetData = async(url) => {
        const randomNumber = Math.floor(Math.random()*20);
        const response = await axios(url)
        setDetail(response.data.results[randomNumber])
        Genre(response.data.results[randomNumber].id)
    }

    const Genre = async (id) =>{
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=videos`);
        setGenre(response.data.genres)
        setTrailer(`https://www.youtube.com/watch?v=${response.data.videos.results[0].key}`)
        

    }

    return(
       <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>{detail.title}</h2>
                <h3 className={styles.hero__genre}>Genre : {genre.map((genre) => genre.name).join(', ')}</h3>
                <p className={styles.hero__description}>
                    {detail.overview}
                </p>
                <Button variant="info" size="medium" href={trailer} target="_blank" as="a"> Watch </Button>
                {/* <a href={trailer} target="_blank" rel="noopener noreferrer"><Button variant="info" size="medium"> Watch </Button></a> */}
            </div>
            <div className={styles.hero__right}>
                <img className={styles.hero__image} src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="placeholder" />
            </div>
        </section>
       </div> 
    )
}

export default Hero