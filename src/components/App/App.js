import { useState, useEffect } from 'react';
import appStyle from './App.module.css';
import { SideMenu } from '../SideMenu/SideMenu';
import IconNotice from '../../images/icon-notice.svg'
import { OrderVPS } from '../OrderVPS/OrderVPS';
import { Footer } from '../Footer/Footer';
import BurgerMenu from '../../images/burger-menu-black.svg'
import {useDispatch} from 'react-redux'
import {getVPSData} from '../../actions'

function App() {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const menuActiveClick = () => setMenuOpen(!isMenuOpen)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVPSData())
  }, [dispatch])

  return (
    <>
      <div className={appStyle.container}>
        <SideMenu isMenuOpen={isMenuOpen} menuClick={menuActiveClick}/>
        <div className={`${appStyle.main} ${isMenuOpen && appStyle.mainActive}`}>
          <header className={appStyle.header}>
            {
              !isMenuOpen && <img className={appStyle.headerMenu} src={BurgerMenu} alt="BurgerMenu" onClick={menuActiveClick}/>
            }
            <p className={appStyle.headerText}>3467 &#8381;</p>
            <p className={appStyle.headerText}><img src={IconNotice} alt="IconNotice" className={appStyle.headerImg}/>username</p>
            <p className={appStyle.headerText}>Выйти</p>
          </header>
          <OrderVPS />
        </div>
      </div>
      <Footer />
    </>
    
  );
}

export default App;
