import axios from "axios";
import React, { useEffect, useState } from "react"
import { Movies,EndPoint } from "../../MainImport/AllImport";

export default function NowPlaying(){

    const [playNow, setplayNow] = useState([]);
    useEffect(()=>{
        getPlay()
    },[])

    const getPlay = async () =>{
        const response = await axios(EndPoint.NOWPLAYING)
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