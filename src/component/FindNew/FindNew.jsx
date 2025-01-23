import './FindNew.scss'
import Store1 from '../images/Store badge (1).png'
import Store2 from '../images/Store badge (2).png'
import Image22 from '../images/Image.png'



export default function FindNew() {
    return (
        <div className="FindNew">
            <div className="FindNew_leftBlock">
                <h1>Находи новые знакомства с помощью своего мобильного телефона</h1>
                <p>Загрузите приложение, чтобы отслеживать других людей разделяющих твое хобби, пиши, знакомься, будь на связи !</p>
                <a href="!#">Get the App</a>
                <div className='FindNew_img'>
                    <a href="!#"><img src={Store1} alt="" /></a>
                    <a href="!#"><img src={Store2} alt="" /></a>
                </div>
            </div>
            <img className='FindNew_rightBlock' src={Image22} alt="" />
        </div>
    )
}
