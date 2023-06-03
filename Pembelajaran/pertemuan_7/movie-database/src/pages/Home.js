import React, { useState } from "react"
import {
    Hero,
    Movies,
    Form,
    DataMovie,
} from "../MainImport/AllImport"

function Home(props) {
    const [film , setFilm] = useState(DataMovie)
    return(
        <div>
            <Hero/>
                <Movies film={film} title={"Latest Movie"}/>
                <Form film={film} setFilm={setFilm}/>
        </div>
    )
}

export default Home