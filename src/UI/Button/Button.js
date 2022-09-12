import React from "react";
import ButtonStyle from './button.module.css'
import PropTypes from 'prop-types';

export const Button = ({btnText}) => {
    return (
        <button type="button"className={ButtonStyle.button}>{btnText}</button>
    )
}

Button.propTypes = {
    btnText: PropTypes.string
}
