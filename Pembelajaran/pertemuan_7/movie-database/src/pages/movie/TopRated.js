import axios from "axios"
import React, { useEffect, useState } from "react"
import { EndPoint, Movies } from "../../MainImport/AllImport";
export default function TopRated(){

    const [topRated, setTopRated] = useState([]);
    useEffect(()=>{
        getTopRated()
    },[])

    const getTopRated = async() =>{
     const response = await axios(EndPoint.TOPRATED);
     setTopRated(response.data.results);
    }

    return(
    <div>
        <Movies film={topRated} title={"TOP RATED"} />
    </div>
    )
}