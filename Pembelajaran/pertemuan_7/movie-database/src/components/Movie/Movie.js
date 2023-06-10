
import React from "react"
import { StyledMovie } from "../Ui/MainComponent"
import { Link } from "react-router-dom"

function Movie(props) {
    const {movieList} = props

    return(
        <StyledMovie>
            <img src={movieList.poster || `https://image.tmdb.org/t/p/w300/${movieList.poster_path}`} alt={movieList.title}/>
            <Link to={`/movie/${movieList.id}`}>
                <h3>{movieList.title}</h3>
            </Link>
            <p>{movieList.type}</p>
            <p>{movieList.year || movieList.release_date}</p>
        </StyledMovie>
    )
}
export default Movie