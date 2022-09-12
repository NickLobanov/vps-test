import React, {useState, useEffect} from "react";
import VPSStyle from './orderVPS.module.css'
import { Select } from "../../UI/Select/Select";
import { CardVPS } from "../CardVPS/CardVPS";
import { useSelector } from "react-redux";

export const OrderVPS = () => {

    const {categories, vpsPlans} = useSelector(state => ({
        categories: state.VPSReducer.categories,
        vpsPlans: state.VPSReducer.vpsPlans
    }))

    const [cards, setCards] = useState([])

    const changeSelect = (e) => {
        if(e.target.value === 'nvme') {
            setCards(vpsPlans.filter(item => item.category === e.target.value))
        }
        if(e.target.value === 'turbo') {
            setCards(vpsPlans.filter(item => item.category === e.target.value))
        }
        if(e.target.value === 'hdd') {
            setCards(vpsPlans.filter(item => item.category === e.target.value))
        }
        if(e.target.value === 'all') {
            setCards(vpsPlans)
        }
    }


    useEffect(() => {
        setCards(vpsPlans)
    }, [vpsPlans])

    return (
        <div className={VPSStyle.container}>
            <p className={VPSStyle.text}>Аккаунт</p>
            <h2 className={VPSStyle.title}>Заказать vps</h2>
            <Select title="Категория" changeHandle={changeSelect}>
                <option value="all">Все</option>
                {
                    categories.map(item => (
                        <option key={item.slug} value={item.slug}>{item.name}</option>
                    ))
                }
            </Select>
            <div className={VPSStyle.cardWrap}>
                {
                    cards.map(item => (
                        <CardVPS cardData={item} key={item.id}/>
                    ))
                }
                
            </div>
        </div>
    )
}