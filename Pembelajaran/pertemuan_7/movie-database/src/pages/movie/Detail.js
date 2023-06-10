import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movies, EndPoint, DetailMovie } from "../../MainImport/AllImport";
import axios from "axios";
export default function Detail(){
    const {movieId} = useParams();
    const [film, setFilm] = useState([]);
    let url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`

    useEffect(()=>{
        getRecomends();
    },[movieId])

    const getRecomends =async() =>{
        const url = EndPoint.RecomMovie(movieId)
        const response = await axios(url)
        setFilm(response.data.results)
        
    }
    return(
        <>
            <DetailMovie MovieId={movieId}/>
            <Movies film={film} title={"Recommends"}/>
        </>

    )
}