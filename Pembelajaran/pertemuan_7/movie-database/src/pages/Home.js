import React, { useEffect } from "react"
import {
    DataMovie,
    Hero,
    Movies,
} from "../MainImport/AllImport"
import { useDispatch } from "react-redux"
import { updateMovie } from "../feature/movieSlice"

function Home(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        dispatch(updateMovie(DataMovie))
    }

    return(
        <div>
            <Hero/>
                <Movies title={"Latest Movie"}/>
        </div>
    )
}

export default Home