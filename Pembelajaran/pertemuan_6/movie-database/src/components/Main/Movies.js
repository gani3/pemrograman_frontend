import {useState} from "react"
import { nanoid } from "nanoid";
import {Movie,DataMovie} from "../../MainImport/AllImport";
import styles from "./Movies.module.css";


function Movies() {

  const [film , setMovies] = useState(DataMovie);

  function handleClick() {
    const movie ={
      id:nanoid(), title : "Jigsaw",
      year : 2021 , type : "Movie",
      poster : "https://picsum.photos/300/400" 
    };
    setMovies([...film,movie])
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}> 
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {film.map((item)=>{
            return(<Movie key={item.id} movieList={item}/>)
          })}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;