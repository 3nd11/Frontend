import styles from "./index.module.css"

function Provinces(props) {
    const { prov } = props;
    
    return (
        <option>{prov.kota}</option>
    )
} 
export default Provinces;