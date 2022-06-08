import styles from "./index.module.css"

function Status(props) {
    const { status } = props;
    
    return (
        <option>{status.status}</option>
    )
} 
export default Status;