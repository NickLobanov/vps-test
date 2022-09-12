import React, {useState, useEffect} from "react";
import CardStyle from './cardVPS.module.css'
import { Select } from "../../UI/Select/Select";
import { ToggleBtn } from "../../UI/ToggleBtn/ToggleBtn";
import IconPlus from '../../images/icon-plus.svg'
import { Button } from "../../UI/Button/Button";
import TarifOne from '../../images/tariff-nvme-1.svg'
import HDD from '../../images/tariff_hdd.svg'
import Turbo from '../../images/tariff_turbo.svg'
import { useSelector } from "react-redux";
import PropTypes from 'prop-types'

export const CardVPS = ({cardData}) => {

    const [os, setOs] = useState('ubuntu-20-04')
    const [soft, setSoft] = useState('empty')
    const [selectPanelArr, setSelectPanelArr] = useState([])
    const [selectOsArr, setSelectOsArr] = useState([])

    const {selectPanel, selectOs} = useSelector(state => ({
        selectPanel: state.VPSReducer.selectPanel,
        selectOs: state.VPSReducer.selectOs
    }))

    useEffect(() => {
        setSelectPanelArr(selectPanel)
        setSelectOsArr(selectOs)
    }, [selectPanel, selectOs])

    const clickOption = () => {
        console.log(123)
    }

    const changeOs = (e) => {
        setOs(e.target.value)
        const getAvailablePanel = selectOs.find(item => item.name === e.target.value)
        const filterResult = selectPanel.filter(({name}) => getAvailablePanel.panel_type.includes(name))
        setSelectPanelArr(filterResult)
        console.log(filterResult)
        if(!filterResult.find(({name}) => name === soft)) {
            setSoft('empty')
        }
    }

    const changeSoft = (e) => {
        setSoft(e.target.value)
    }

    return (         
        <div className={`${CardStyle.card} ${cardData.category === 'hdd' && CardStyle.hdd} ${cardData.category === 'turbo' && CardStyle.turbo}`} key={cardData.id}>
            <h3 className={CardStyle.title}><img src={cardData.category === 'nvme' ? TarifOne : cardData.category === 'hdd' ? HDD : Turbo} alt="TarifOne"/>{cardData.name}</h3>
            <p className={CardStyle.price}>{cardData.price_per_month} &#8381;/мес.</p>
            <p className={CardStyle.text}>CPU <span>{cardData.cpu_cores} × 2,8 ГГц</span></p>
            <p className={CardStyle.text}>RAM <span>{cardData.ram} МБ</span></p>
            <p className={CardStyle.text}>DISK <span>{cardData.volume_disk} {cardData.disk_type}</span></p>
            <Select title="Дистрибутив" changeHandle={changeOs} value={os}>
                {
                    selectOsArr.map(item => (
                        <option key={item.id} value={item.name}>{item.description}</option>
                    ))
                }
            </Select>
            <Select title="Программное обеспечение" changeHandle={changeSoft} value={soft}>
            {
                    selectPanelArr.map(item => (
                        <option key={item.id} onClick={clickOption} value={item.name}>{item.description}</option>
                    ))
                }
            </Select>
            <p>Дата-центр</p>
            <ToggleBtn/>
            <div className={CardStyle.benefitsWrap}>
                <img src={IconPlus} alt="IconPlus"/>
                <p className={CardStyle.benefitsText}>2 IP-адреса (lPv4 + lPv6) 3 резервных копии</p>
            </div>
            <Button btnText="Заказать"/>
        </div> 
    )
}

CardVPS.propTypes = {
    cardData:PropTypes.array
}