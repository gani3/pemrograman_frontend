
import React from "react"
import { StyledMovie } from "../Ui/MainComponent"

function Movie(props) {
    const {movieList} = props

    return(
        <StyledMovie>
            <img src={movieList.poster || `https://image.tmdb.org/t/p/w300/${movieList.poster_path}`} alt={movieList.title}/>
            <h3>{movieList.title}</h3>
            <p>{movieList.type}</p>
            <p>{movieList.year || movieList.release_date}</p>
        </StyledMovie>
    )
}
export default Movie