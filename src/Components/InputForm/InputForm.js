import React from "react";
import styles from "./inputForm.module.css";

function InputForm(props){
    return(
        <div className={styles.container}>
            {props.label && <label>{props.label}</label>}
            <input type="text" {...props} />
        </div>
    )
}

export default InputForm;