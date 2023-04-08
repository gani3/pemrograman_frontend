
import styles from "./Form.module.css"

function Form() {
    return(
       <div className={styles.container}>
        <section className={styles.form}>
           <div className={styles.form__left}>
               <img className={styles.form__image} src="https://picsum.photos/536/354" alt="placeholder" />
            </div>
           <div className={styles.form__right}>
            <form className={styles.form__input}>
                <h2 className={styles.form__title}>Add movie</h2>
                <div className={styles.input__title}>
                    <h5 className={styles.input__label}>Title</h5>
                    <input className={styles.input__text} type="text" />
                </div>
                <div className={styles.input__date}>
                    <h5 className={styles.input__label}>Year</h5>
                    <input className={styles.input__text} type="date" />
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