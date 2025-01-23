import './Scroll.scss'
import Rectangle from '../../images/Rectangle 6062.png'
import logo1 from "../../images/logo.svg";
import logo2 from "../../images/Без названия (3).svg";
import logo3 from "../../images/Без названия.svg";
import logo4 from "../../images/Без названия (4).svg";
import logo5 from "../../images/Без названия (5).svg";
import logo6 from "../../images/Без названия (6).svg";





export default function Scroll() {
    return (

        <div className='Scroll'>
            <div class="scroll-container">
                <div class="scroll-content">
                    <span><img src={logo1} alt="" /></span>
                    <span><img src={logo2} alt="" /></span>
                    <span><img src={logo3} alt="" /></span>
                    <span><img src={logo4} alt="" /></span>
                    <span><img src={logo5} alt="" /></span>
                    <span><img src={logo6} alt="" /></span>

                </div>
            </div>
        </div>


    )
}
