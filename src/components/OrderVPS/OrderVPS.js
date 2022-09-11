import React from "react";
import VPSStyle from './orderVPS.module.css'
import { Select } from "../../UI/Select/Select";
import { CardVPS } from "../CardVPS/CardVPS";

export const OrderVPS = () => {
    return (
        <div className={VPSStyle.container}>
            <p className={VPSStyle.text}>Аккаунт</p>
            <h2 className={VPSStyle.title}>Заказать vps</h2>
            <Select title="Категория"/>
            <div className={VPSStyle.cardWrap}>
                <CardVPS />
                <CardVPS />
                <CardVPS />
                <CardVPS />
                <CardVPS />
                <CardVPS />
                
            </div>
        </div>
    )
}