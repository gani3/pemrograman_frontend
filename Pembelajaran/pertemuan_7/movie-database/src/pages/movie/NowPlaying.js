import axios from "axios";
import React, { useEffect, useState } from "react"
import { Movies } from "../../MainImport/AllImport";

export default function NowPlaying(){

    const [playNow, setplayNow] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`

    useEffect(()=>{
        getPlay()
    },[])

    const getPlay = async () =>{
        const response = await axios(url)
        setplayNow(response.data.results)
    }

    return(
        <>
        <div>
            <Movies film={playNow} title={`NOW PLAYING`} />
        </div>
        </>
    )
}