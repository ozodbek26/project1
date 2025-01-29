import React from 'react'
import './Settings.scss'

import images2 from '../../component/images/Иконка (1).png'
import Block24 from '../../component2/AdditionalContentMobile/Block24/Block24'
import { Link } from 'react-router-dom'
import DirectionSports3 from '../../component2/AdditionalContentMobile/DirectionSports_Trips/DirectionSports'
import Switch from '../../component2/AdditionalContentMobile/Switch/Switch'
import TripleSwitch from '../../component2/AdditionalContentMobile/TripleSwitch/TripleSwitch'
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation'
import group5 from '../../component/images/Mask group (4).png'
import Mask from '../../component/images/Mask group (2).png'
import Footer from '../../component2/Footer/Footer'

export default function Settings() {
    return (
        <div className='Settings'>
            <div className='Settings_top'>
                <Link to="/about" className="nav-link">
                    <img className='Settings_top_img' src={images2} alt="" />
                </Link>
                <h1 className='Settings_top_text'>Настройки</h1>
            </div>
            <Block24 />
            <DirectionSports3 text_h2='Поменять пароль' text_p="no password" />
            <Switch text_h2='Автопауза' text_p="Автоматически включить паузу при остановке" />
            <Switch text_h2='Геолокация' text_p="Показывать ваше местоположение другим пользователям" />
            <TripleSwitch break1="Обычная" break2="Гибрид" break3="Спутник" />
            <AdditionalInformation texth4="Оцените нас на App Store!" img1={Mask} img2={images2} />
            <AdditionalInformation texth4="Настройки приватности" img1={Mask} img2={images2} />
            <AdditionalInformation texth4="Наши контакты" img1={Mask} img2={images2} />
            <div className="AdditionalInformation_block1">
                <AdditionalInformation texth4="Выйти из аккаунта" img1={group5} img2={images2} />
            </div>
            <Footer />
        </div>
    )
}
