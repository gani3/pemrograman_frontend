import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movies, EndPoint, DetailMovie } from "../../MainImport/AllImport";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature/movieSlice";
export default function Detail(){
    const dispatch = useDispatch()
    const {movieId} = useParams();

    useEffect(()=>{
        getRecomends();
    },[movieId])

    const getRecomends =async() =>{
        const url = EndPoint.RecomMovie(movieId)
        const response = await axios(url)
        dispatch(updateMovie(response.data.results))
        
    }
    return(
        <>
            <DetailMovie MovieId={movieId}/>
            <Movies title={"Recommends"}/>
        </>

    )
}