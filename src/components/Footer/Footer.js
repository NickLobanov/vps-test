import React from "react";
import FooterStyle from './footer.module.css'
import IOS from '../../images/Ios.png'
import Play from '../../images/Play.png'

export const Footer = () => {
    return (
        <footer className={FooterStyle.footer}>
            <div className={FooterStyle.text}>
                <p>© 2001–2022 ООО <span>«СпейсВэб»</span></p>
                <p>Все права защищены.</p>
                <p>Лицензия <span>№163230</span></p>
            </div>
            <div className={`${FooterStyle.text} ${FooterStyle.imgContainer}`}>
                <p>Скачать приложение</p>
                <div className={FooterStyle.imgWrap}>
                    <img src={Play} alt="Play" className={FooterStyle.img}/>
                    <img src={IOS} alt="IOS"/>
                </div>
            </div>
            <div className={FooterStyle.text}>
                <p><span>+7 (812) 334-12-22</span> (в Санкт-Петербурге)</p>
                <p><span>+7 (495) 663-16-12</span> (в Москве)</p>
                <p><span>+7 (800) 100-16-15</span> (бесплатно по России)</p>
            </div>
        </footer>
    )
}