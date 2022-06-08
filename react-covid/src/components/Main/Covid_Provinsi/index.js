import { useState } from "react";
import styles from "./index.module.css";
import Prov from "../Provinsi/index";
import data from "../../../utils/constants/provinces";

function Covid_Provinsi() {

    const [covid_p, setCovid_p] = useState(data);

    return (
        <div className={styles.container}>
            <section className={styles.table}>
                <div className={styles.table__title}>
                    <h1>Provinsi</h1>
                    <h3>Data Covid Berdasarkan Provinsi</h3>
                </div>
                <div className={styles.container_table}>
                    <table className={styles.tables}>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                        {covid_p.provinces.map((prov) => {
                            return <Prov key={prov.status} prov={prov}/>
                        })}

                    </table>
                </div>
            </section>
        </div>
    )
}

export default Covid_Provinsi;