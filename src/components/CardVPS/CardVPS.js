import React from "react";
import CardStyle from './cardVPS.module.css'
import { Select } from "../../UI/Select/Select";
import { ToggleBtn } from "../../UI/ToggleBtn/ToggleBtn";
import IconPlus from '../../images/icon-plus.svg'
import { Button } from "../../UI/Button/Button";
import TarifOne from '../../images/tariff-nvme-1.svg'

export const CardVPS = () => {
    return (
        <div className={CardStyle.card}>
            <h3 className={CardStyle.title}><img src={TarifOne} alt="TarifOne"/>KVM-10</h3>
            <p className={CardStyle.price}>349 &#8381;/мес.</p>
            <p className={CardStyle.text}>CPU <span>2 × 2,8 ГГц</span></p>
            <p className={CardStyle.text}>RAM <span>1024 МБ</span></p>
            <p className={CardStyle.text}>DISK <span>10 ГБ NVMe</span></p>
            <Select title="Дистрибутив"/>
            <Select title="Программное обеспечение"/>
            <p>Дата-центр</p>
            <ToggleBtn />
            <div className={CardStyle.benefitsWrap}>
                <img src={IconPlus} alt="IconPlus"/>
                <p className={CardStyle.benefitsText}>2 IP-адреса (lPv4 + lPv6) 3 резервных копии</p>
            </div>
            <Button btnText="Заказать"/>
        </div>
    )
}