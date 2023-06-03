import React from "react"
import {Movie} from "../../MainImport/AllImport";
import styles from "./Movies.module.css";


function Movies(props) {
 const {film,title} = props

  return (
    <div className={styles.container}>
      <section className={styles.movies}> 
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {film.map((item)=>{
            return(<Movie key={item.id} movieList={item}/>)
          })}
        </div>
      </section>
    </div>
  );
}

export default Movies;