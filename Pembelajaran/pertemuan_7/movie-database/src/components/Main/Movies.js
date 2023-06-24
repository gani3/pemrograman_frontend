import React from "react"
import {Movie} from "../../MainImport/AllImport";
import styles from "./Movies.module.css";
import {useSelector} from "react-redux"

function Movies(props) {
 const {title} = props

 let film  = useSelector((store)=>store.movies.movies)

  return (
    <div className={styles.container}>
      <section className={styles.movies}> 
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          { typeof film == 'object' ? film.map((item)=>{
            return(<Movie key={item.id} movieList={item}/>)
          }) : ''}
        </div>
      </section>
    </div>
  );
}

export default Movies;