import React from "react";
import ToggleBtnStyle from './toggleBtn.module.css'

export const ToggleBtn = () => {
    return (
        <div className={ToggleBtnStyle.wrapper}>
            <p className={`${ToggleBtnStyle.text} ${ToggleBtnStyle.active}`}>Санкт-Петербург</p>
            <p className={ToggleBtnStyle.text}>Москва</p>
        </div>
    )
}