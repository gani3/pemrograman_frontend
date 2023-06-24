import React, { useEffect} from "react"
import axios from 'axios';
import { Hero, Movies,EndPoint } from "../../MainImport/AllImport";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature/movieSlice";
export default function Populer(){
    const dispacth = useDispatch()
    useEffect(() => {
        getData()
    },[])

    const getData = async () =>{
        const response = await axios(EndPoint.POPULAR);
        dispacth(updateMovie(response.data.results))
    }

    return(
        <div>
            <Hero/>
            <Movies  title={'POPULER MOVIE'} />
        </div>
    )
}