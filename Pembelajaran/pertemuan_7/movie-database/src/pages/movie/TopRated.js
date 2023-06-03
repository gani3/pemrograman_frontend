import axios from "axios"
import React, { useEffect, useState } from "react"
import { Movies } from "../../MainImport/AllImport";
export default function TopRated(){

    const [topRated, setTopRated] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`

    useEffect(()=>{
        getTopRated()
    },[])

    const getTopRated = async() =>{
     const response = await axios(url);
     setTopRated(response.data.results);
    }

    return(
    <div>
        <Movies film={topRated} title={"TOP RATED"} />
    </div>
    )
}