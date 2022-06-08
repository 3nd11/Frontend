import styles from "./AddMovieForm.module.css"

function AddMovieForm() {
    return(
        <div className={styles.container}>
            <div className={styles.form__img}>
                <img src="https://picsum.photos/300/400" className={styles.form__img_content}/>
            </div>
            <form className={styles.form}>
                <h1 className={styles.form__title}>Add Movie</h1>
                <div className={styles.form__content}>
                    <label className={styles.form__label}>Title</label>
                    <input type="text" className={styles.form__input}/>
                    <label className={styles.form__label}>Year</label>
                    <input type="text" className={styles.form__input}/>
                    <input type="submit" className={styles.form__button}/>
                </div>
            </form>
        </div>
    );
}

export default AddMovieForm;