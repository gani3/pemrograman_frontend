import axios from "axios"
import React, { useEffect } from "react"
import { EndPoint, Movies } from "../../MainImport/AllImport";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature/movieSlice";
export default function TopRated(){
    const dispatch = useDispatch()
    useEffect(()=>{
        getTopRated()
    },[])

    const getTopRated = async() =>{
     const response = await axios(EndPoint.TOPRATED);
     dispatch(updateMovie(response.data.results))
    }

    return(
    <div>
        <Movies title={"TOP RATED"} />
    </div>
    )
}