/* eslint-disable react/prop-types */
import "./inputBase.module.css"
import React from "react"

const InputBase = (props) => {
    return (
       <>
        <label htmlFor={props.id}>{props.label} </label>
            <input className="inputBase" {...props} />
    </>
    )
    }
    export default InputBase;