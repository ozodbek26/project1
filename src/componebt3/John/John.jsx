import React from 'react'
import './John.scss'
import Ellipse from '../../component/images/Ellipse 319 (1).png'
import images2 from '../../component/images/Иконка (1).png'

import FieldsForwater from '../../component2/AdditionalContentMobile/FieldsForwater/FieldsForwater'
import { Link } from 'react-router-dom'
import FileInput from '../../component2/AdditionalContentMobile/FileInput/FileInput'

export default function John() {
    return (
        <div className='John'>
            <Link to="/about" className="nav-link John_link ">
                <img className='John_img' src={images2} alt="" />
            </Link>
            <div className='John_ProfilePhoto'>
                <h1>Мои данные</h1>
                <img src={Ellipse} alt="" />
                <FileInput text={"Изменить фото"} />
            </div>
            <div className='John_PersonalData'>
                <FieldsForwater text_h3="Имя" />
                <FieldsForwater text_h3="Фамилия" />
                <FieldsForwater text_h3="Ваш логин" />
                <FieldsForwater text_h3="Номер телефона" />
            </div>
            <button className='John_PersonalData_button'>Сохранить изменения</button>
        </div>
    )
}
