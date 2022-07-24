import React from "react";
import styles from "./styles.module.scss"

type Tprops = {
    label?: string
    formik?: any
    errorText?: string
} & React.InputHTMLAttributes<HTMLInputElement>


const TextBox: React.FC<Tprops> = ({ label, formik, errorText, ...props }) => {
    return (
        <div className={styles.textBox}>
            {label && <label>{label}</label>}
            <input type={"text"} {...props} {...formik} />
            {errorText && <p>{errorText}</p>}
        </div>
    )
}

export default TextBox;