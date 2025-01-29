import './Block24.scss'
import Frame from '../../../component/images/Frame 3554.png'


export default function Block24() {
    return (
        <div className='PersonalProfile_advertising'>
            <div className='PersonalProfile_advertising_top'>
                <button className='PersonalProfile_advertising_top_button'>Golden Wheels</button>
                <img src={Frame} alt="Frame" />
            </div>
            <h3 className='PersonalProfile_advertising_h1'>Купите полную версию</h3>
            <p className='PersonalProfile_advertising_text'>Подпишитесь сейчас и получите доступ ко всем примиальным функциям Wheels on!</p>
        </div>
    )
}
