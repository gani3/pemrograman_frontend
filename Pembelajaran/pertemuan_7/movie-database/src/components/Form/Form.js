import {useState} from "react"
import styles from "./Form.module.css"
import { nanoid } from "nanoid"
import Alert from "../Alert/Alert"

function Form(props) {
    const {film,setFilm} = props
    const [formData , setFormData] = useState({
        id : nanoid(10),
        title : '',
        year : '',
        type : '',
        poster : '',
    })

    const [title_error,setTitleError] = useState(false)
    const [date_error,setDateError] = useState(false)
    
    
    function hanldeSubmit(e) {
        e.preventDefault()
        if (formData.title === '') {
            setTitleError(true)
        } else if (formData.year === '') {
            setDateError(true)
        }else{
            // const movie = {
            //     id : nanoid(10),
            //     title : title,
            //     year : date,
            //     type : type,
            //     poster : poster,
            // }
            setFilm([...film,formData])
            setDateError(false)
            setTitleError(false)
            reset_elm()
        }
    }

    function handleOnchange(e){
      const {name,value} = e.target
          
      setFormData(
        {
            ...formData,
            [name]: value,
        }
      )
    }

    function reset_elm() {
        setFormData(
        {
            id : nanoid(10),
            title : '',
            year : '',
            type : '',
            poster : '',
        }
        )
        setTitleError(false)
        setDateError(false)
    }

    return(
       <div className={styles.container}>
        <section className={styles.form}>
           <div className={styles.form__left}>
               <img className={styles.form__image} src="https://picsum.photos/536/354" alt="placeholder" />
            </div>
           <div className={styles.form__right}>
            <form className={styles.form__input} onSubmit={hanldeSubmit}>
                <h2 className={styles.form__title}>Add movie</h2>
                <div className={styles.input__title}>
                    <h5 className={styles.input__label}>Title</h5>
                    <input className={styles.input__text} type="text" value={formData.title} onChange={e=>handleOnchange(e)} name="title"/>
                    <p>{title_error ? <Alert>Wajib di isi</Alert> : ""}</p>
                </div>
                <div className={styles.input__title}>
                    <h5 className={styles.input__label}>Year</h5>
                    <input className={styles.input__text} type="number" value={formData.year} onChange={e=>handleOnchange(e)} name="year"/>
                    <p>{title_error ? <Alert>Wajib di isi</Alert> : ""}</p>
                </div>
                <div className={styles.input__title}>
                    <h5 className={styles.input__label}>Image</h5>
                    <input className={styles.input__text} type="text" value={formData.poster} onChange={e=>handleOnchange(e)} name="poster"/>
                    <p>{title_error ? <Alert>Wajib di isi</Alert> : ""}</p>
                </div>
                <div className={styles.input__date}>
                    <h5 className={styles.input__label}>Type</h5>
                    <select className={styles.input__text} value={formData.type} onChange={e=>handleOnchange(e)} name="type">
                        <option value="">Type Movie</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Horor">Horor</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                    <p>{date_error ? <Alert>Wajib di isi</Alert> : ""}</p>
                </div>
                <div className={styles.input__date}>
                    <button type="submit" className={styles.button__submit}>Submit</button>
                </div>
            </form>
           </div>
        </section>
       </div> 
    )
}

export default Form