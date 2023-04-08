import { useState } from "react"
import {
    Navbar,
    Footer,
    Hero,
    Movies,
    Form,
    DataMovie,
} from "../MainImport/AllImport"

function Home(props) {
    const [film , setFilm] = useState(DataMovie)
    return(
        <div>
            <Navbar/>
            <Hero/>
                <Movies film={film}/>
                <Form film={film} setFilm={setFilm}/>
            <Footer/>
        </div>
    )
}

export default Home