
import styles from "./Movie.module.css"

function Movie(props) {
    const {movieList} = props

    return(
        <div className={styles.movie}>
            <img className={styles.movie__image} src={movieList.poster} alt={movieList.title}/>
            <h3 className={styles.movie__title}>{movieList.title}</h3>
            <p className={styles.movie__date}>{movieList.type}</p>
            <p className={styles.movie__date}>{movieList.year}</p>
          </div>
    )
}
export default Movie