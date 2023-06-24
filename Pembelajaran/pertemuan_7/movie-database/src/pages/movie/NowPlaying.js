import axios from "axios";
import React, { useEffect } from "react"
import { Movies,EndPoint } from "../../MainImport/AllImport";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature/movieSlice";

export default function NowPlaying(){
    const dispatch = useDispatch()
    useEffect(()=>{
        getPlay()
    },[])

    const getPlay = async () =>{
        const response = await axios(EndPoint.NOWPLAYING)
        dispatch(updateMovie(response.data.results))
    }

    return(
        <>
        <div>
            <Movies  title={`NOW PLAYING`} />
        </div>
        </>
    )
}