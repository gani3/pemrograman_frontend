import React, { useEffect, useState } from "react"
import axios from 'axios';
import { Hero, Movies,EndPoint } from "../../MainImport/AllImport";
export default function Populer(){
    const [film,setFilm] = useState([]);
    useEffect(() => {
        getData()
    },[])

    const getData = async () =>{
        const response = await axios(EndPoint.POPULAR);
        setFilm(response.data.results)
    }

    return(
        <div>
            <Hero/>
            <Movies film={film} title={'POPULER MOVIE'} />
        </div>
    )
}