import React from "react";
import SelectStyle from './select.module.css'

export const Select = ({title}) => {
    return (
        <label className={SelectStyle.selectLabel}>
            {title}
            <select className={SelectStyle.select}>
                <option></option>
            </select>
        </label>
    )
}
