import React from "react";
import ButtonStyle from './button.module.css'

export const Button = ({btnText}) => {
    return (
        <button type="button"className={ButtonStyle.button}>{btnText}</button>
    )
}