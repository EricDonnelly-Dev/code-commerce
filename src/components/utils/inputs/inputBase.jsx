/* eslint-disable react/prop-types */
import styles from "./inputBase.module.css"
import React from "react"

const InputBase = (props) => {
    return (
       <>
        <label htmlFor={props.id}>{props.label} </label>
            <input className={styles.inputBase} {...props} />
    </>
    )
    }
    export default InputBase;