import axios from "axios";
import React, { useEffect, useState } from "react"
import styles from "./DetailMovie.module.css"
import Button from "../Ui/Button/Button";
import { EndPoint } from "../../MainImport/AllImport";
export default function DetailMovie(props) {
    const {MovieId} = props
    const [detail, setDetail] = useState('')
    let trailer= detail && detail.videos.results.length > 0 ? `https://www.youtube.com/watch?v=${detail.videos.results[0].key}` : ''
    let genre =  detail ? detail.genres : [] ;

    useEffect(()=>{
     getDetail()
    },[MovieId])

    const getDetail = async() =>{
        const url = EndPoint.DetailMovie(MovieId)
        const request = await axios(url);
        setDetail(request.data)
    }
    return(
        <div className={styles.container}>
        <section className={styles.hero}>
             <div className={styles.hero__right}>
                <img className={styles.hero__image} src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="placeholder" />
            </div>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>{detail.title}</h2>
                <h3 className={styles.hero__genre}>Genre : {genre.map((genre) => genre.name).join(', ')}</h3>
                <p className={styles.hero__description}>
                    {detail.overview}
                </p>
                <Button variant="info" size="medium" href={trailer} target="_blank" as="a"> Watch </Button>
                {/* <a href={trailer} target="_blank" rel="noopener noreferrer"><Button variant="info" size="medium"> Watch </Button></a> */}
            </div>
        </section>
       </div> 
    )
}