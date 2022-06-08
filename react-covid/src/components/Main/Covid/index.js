import { useState } from "react";
import styles from "./index.module.css";
import Indo from "../Indo/index";
import data from "../../../utils/constants/indonesia";

function Covid() {

    const [covid, setCovid] = useState(data);

    return (
        <div className={styles.container}>
            <section className={styles.covid}>
                <div className={styles.covid__judul}>
                    <h1 className={styles.covid__judul1}>Indonesia</h1>
                    <h6 className={styles.covid__judul2}>Data Covid Berdasarkan Global</h6>
                </div>
                <div className={styles.covid__total}>
                    {covid.indonesia.map((indo) => {
                        return <Indo key={indo.status} indo={indo}/>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Covid;