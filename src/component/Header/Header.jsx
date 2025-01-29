import './Header.scss'
import Mobile from '../images/Mobile.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <div className='header__top'>
                <div className='header__logo'>
                    <h2>Logo</h2>
                </div>
                <div className='header__menu'>
                    <a href="!#">блок1</a>
                    <a href="!#">блок2</a>
                    <a href="!#">блок3</a>
                    <a href="!#">блок4</a>
                </div>
                <Link to="/about"><button className='header__login'>Login</button></Link>
            </div>
            <div className='header__bottom'>
                <div className='header__bottom__text'>
                    <h1>Все коллеги по хобби в твоем мобильном телефоне</h1>
                    <p> tincidunt est vitae elit feugiat, in venenatis purus lacinia. Cras quis luctus augue. Donec mi turpis, rhoncus scelerisque velit feugiat, </p>
                    <div className='header__bottom__text__block'>
                        <button className='header__bottom__text__button'>Get Started</button>
                        <a href="!#">Watch Video</a>
                    </div>
                </div>
                <img className='header__bottom__img' src={Mobile} alt="Mobile" />
            </div>
        </div>
    )
}
