import './Scroll.scss'
import Rectangle from '../../images/Rectangle 6062.png'


export default function Scroll() {
    return (

       <div className='Scroll'>
         <div class="scroll-container">
            <div class="scroll-content">
                <span className='class-name'><img src={Rectangle} alt="" /></span>
                <span><img src={Rectangle} alt="" /></span>
                <span><img src={Rectangle} alt="" /></span>
                <span><img src={Rectangle} alt="" /></span>
                <span><img src={Rectangle} alt="" /></span>
                <span><img src={Rectangle} alt="" /></span>
                <span><img src={Rectangle} alt="" /></span>

            </div>
        </div>
       </div>


    )
}
