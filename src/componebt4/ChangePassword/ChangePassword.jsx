import React from 'react'
import './ChangePassword.scss'
import images2 from '../../component/images/Иконка (1).png'
import InputsForNumbers from '../InputsForNumbers/InputsForNumbers'
import f1 from '../../component/images/Иконки для ввода.png'
import { Link } from 'react-router-dom'

export default function ChangePassword() {

    return (

        <div className='ChangePassword'>
            <div className='ChangePassword_title'>
                <Link to="/settings" className="nav-link">
                    <img className='ChangePassword_title_img' src={images2} alt="images2" />
                </Link>

                <h2>Поменять пароль </h2>
            </div>
            <InputsForNumbers text1={"Текущий пароль"} src={f1} />
            <InputsForNumbers text1={"Новый пароль"} src={f1} />
            <InputsForNumbers text1={"Повторите пароль"} src={f1} />

            <button className='ChangePassword_button'>Сохранить изменения</button>
        </div>
    )
}
