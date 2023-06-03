import React, { useEffect, useState } from "react"
import axios from 'axios';
import { Movies } from "../../MainImport/AllImport";
export default function Populer(){
    const [film,setFilm] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular/?api_key=${api_key}`;
    useEffect(() => {
        getData()
    },[])

    const getData = async () =>{
        const response = await axios(url);
        setFilm(response.data.results)
    }

    return(
        <div>
            <Movies film={film} title={'POPULER MOVIE'} />
        </div>
    )
}