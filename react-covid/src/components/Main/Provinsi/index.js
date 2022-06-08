import styles from "./index.module.css";

function Prov(props) {
    const { prov } = props;

    return(
        <tr className={styles.covid}>
                <td>no</td>
                <td className={styles.pasien__status}>{prov.kota}</td>
                <td className={styles.pasien__kasus}>{prov.kasus}</td>
                <td className={styles.pasien__sembuh}>{prov.sembuh}</td>
                <td className={styles.pasien__meninggal}>{prov.meninggal}</td>
                <td className={styles.pasien__dirawat}>{prov.dirawat}</td>
        </tr>
    )
}

export default Prov;