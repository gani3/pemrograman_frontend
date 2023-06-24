import React from "react"
import { Form, Hero } from "../../MainImport/AllImport"


export default function AddMovie(props){
    const {film,setFilm} = props;
    return(
        <div>
            <Hero/><br /><br /><br />
            <Form film={film} setFilm={setFilm}/>
        </div>
    )
}