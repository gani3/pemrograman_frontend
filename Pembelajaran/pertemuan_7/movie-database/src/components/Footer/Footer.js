import styles from "./Footer.module.css"

function Footer(params) {
return(
    <div className={styles.container}>
        <div className={styles.footer}>
            <h2 className={styles.footer__title}>MovieApp</h2>
            <p className={styles.footer__autor}>@gani</p>
        </div>
    </div>
)
    
}

export default Footer
