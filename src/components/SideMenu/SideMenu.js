import React, {useState} from "react";
import SideMenuStyle from './sideMenu.module.css'
import Logo from '../../images/logo.svg'
import BurgerMenu from '../../images/burger-menu.svg'
import OrderVPS from '../../images/Order-VPS.svg'
import IconAccount from '../../images/icon-account.svg'
import Profile from '../../images/Profile.svg'
import Finances from '../../images/Finances.svg'
import Service from '../../images/Service.svg'
import Server from '../../images/icon-sersev.svg'
import MyDomains from '../../images/my-domains.svg'
import DomainsBonus from '../../images/Domains-bonus.svg'
import DomainsPesons from '../../images/Domains-persons.svg'
import SSL from '../../images/SSL.svg'
import IconShop from '../../images/icon-shop.svg'
import IconHelp from '../../images/icon-help.svg'
import IconIdea from '../../images/icon-idea.svg'
import Monitoring from '../../images/monitoring.svg'
import Domain from '../../images/domain.svg'
import SEO from '../../images/SEO.svg'
import PropTypes from 'prop-types'

export const SideMenu = ({isMenuOpen, menuClick}) => {

    const [isAccountOpen, setAccountOpen] = useState(true)
    const [isDomainOpen, setDomainOpen] = useState(false)

    return (
        <div className={`${SideMenuStyle.menuContainer} ${isMenuOpen && SideMenuStyle.menuContainerActive}`}>
            <div className={SideMenuStyle.logoWrap}>
                <img src={Logo} alt='logo'/>
                <img src={BurgerMenu} alt='menu' onClick={menuClick}/>
            </div>
            <ul className={SideMenuStyle.menuList}>
                <li className={`${SideMenuStyle.menuItem} ${SideMenuStyle.menuItemOrder}`}><img src={OrderVPS} alt='OrderVPS' className={SideMenuStyle.menuImg}/>Заказать VPS</li>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem} onClick={() => setAccountOpen(!isAccountOpen)}><img src={IconAccount} alt='IconAccount' className={SideMenuStyle.menuImg}/>Аккаунт</li>
                <ul className={`${SideMenuStyle.menuSidelist} ${!isAccountOpen && SideMenuStyle.menuSidelistClose}`}>
                    <li className={SideMenuStyle.menuItem}><img src={Profile} alt='Profile' className={SideMenuStyle.menuImg}/>Профиль</li>
                    <li className={SideMenuStyle.menuItem}><img src={Finances} alt='Finances' className={SideMenuStyle.menuImg}/>Финансы</li>
                    <li className={SideMenuStyle.menuItem}><img src={Service} alt='Service' className={SideMenuStyle.menuImg}/>Услуги</li>
                </ul>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem}><img src={Server} alt='Server' className={SideMenuStyle.menuImg}/>Серверы</li>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem}><img src={Monitoring} alt='Monitoring' className={SideMenuStyle.menuImg}/>Мониторинг</li>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem} onClick={() => setDomainOpen(!isDomainOpen)}><img src={Domain} alt='Domain' className={SideMenuStyle.menuImg}/>Домены</li>
                <ul className={`${SideMenuStyle.menuSidelist} ${!isDomainOpen && SideMenuStyle.menuSidelistClose}`}>
                    <li className={SideMenuStyle.menuItem}><img src={MyDomains} alt='MyDomains' className={SideMenuStyle.menuImg}/>Мои домены</li>
                    <li className={SideMenuStyle.menuItem}><img src={DomainsBonus} alt='DomainsBonus' className={SideMenuStyle.menuImg}/>Доменные бонусы</li>
                    <li className={SideMenuStyle.menuItem}><img src={DomainsPesons} alt='DomainsPesons' className={SideMenuStyle.menuImg}/>Доменные персоны</li>
                </ul>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem}><img src={SSL} alt='SSL' className={SideMenuStyle.menuImg}/>SSL</li>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem}><img src={IconShop} alt='IconIconShopAccount' className={SideMenuStyle.menuImg}/>Магазин</li>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem}><img src={SEO} alt='SEO' className={SideMenuStyle.menuImg}/>SEO и реклама</li>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem}><img src={IconHelp} alt='IconHelp' className={SideMenuStyle.menuImg}/>Поддержка</li>
            </ul>
            <ul className={SideMenuStyle.menuList}>
                <li className={SideMenuStyle.menuItem}><img src={IconIdea} alt='IconIdea' className={SideMenuStyle.menuImg}/>Есть идея</li>
            </ul>
        </div>
    )
}

SideMenu.propTypes = {
    isMenuOpen: PropTypes.bool,
    menuClick: PropTypes.func
}