import styles from "./index.module.css";

function Indo(props) {
    const { indo } = props;

    return(
        <div className={styles.covid}>
            <div className={styles.covid_box}>
                <h1>{indo.status}</h1>
                <p>{indo.total}</p>
            </div>
        </div>
    )
}

export default Indo;