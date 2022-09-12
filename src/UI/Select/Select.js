import React from "react";
import PropTypes from 'prop-types';
import SelectStyle from './select.module.css'

export const Select = ({children, title, changeHandle, value}) => {


    return (
        <label className={SelectStyle.selectLabel}>
            {title}
            <select className={SelectStyle.select} onChange={changeHandle} value={value}>
                {children}
            </select>
        </label>
    )
}
Select.propTypes = {
    title: PropTypes.string,
    changeHandle: PropTypes.func,
    value: PropTypes.string,
    children: PropTypes.element
}
