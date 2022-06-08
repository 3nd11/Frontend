import { useState } from "react";
import { nanoid } from "nanoid";
import indonesia from "../../../utils/constants/indonesia";
import provinces from "../../../utils/constants/provinces";
import styles from "./index.module.css";
import Status from "./Select_Status";
import Provinces from "./Select_prov";
import Form from "../../Asset/Form.png";

function AddForm() {
    const [AddForm,] = useState(provinces);
    const [AddForm1] = useState(indonesia);

    return(
        <div className={styles.container}>
            <div className={styles.form__img}>
                <img className={styles.form__img_content} src={Form} />
            </div>
            <form className={styles.form}>
                <h1 className={styles.form__title}>Form Covid</h1>
                <div className={styles.form__content}>
                    <label className={styles.form__label}>Provinsi</label>
                    <select className={styles.form__input}>
                        {AddForm.provinces.map((prov) => {
                            return <Provinces prov={prov} />
                        })}
                    </select>
                    <label className={styles.form__label}>Status</label>
                    <select className={styles.form__input}>
                        {AddForm1.indonesia.map((status) => {
                            return <Status key={status.status} status={status}/>
                        })}
                    </select>
                    <label className={styles.form__label}>Jumlah</label>
                    <input type="number" className={styles.form__input}/>
                    <div className={styles.form__submit}>
                        <button className={styles.form__button}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddForm;