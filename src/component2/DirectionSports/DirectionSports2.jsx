import React from 'react'
import './DirectionSports.scss'
import DirectionSports3 from '../../component2/AdditionalContentMobile/DirectionSports_Trips/DirectionSports'
import f1 from '../../component/images/Frame 3542.png'
import f2 from '../../component/images/Frame 3544.png'
import f3 from '../../component/images/Frame 3541.png'



export default function DirectionSports2() {
    return (
        <div className='DirectionSports'>
            <h1>Направление спорта</h1>
            <div className='DirectionSports_overflow'>
                <div className='DirectionSports_overflow_skates'>
                    <img src={f1} alt="" />
                </div>
                <div className='DirectionSports_overflow_skates'>
                    <img src={f2} alt="" />
                </div>
                <div className='DirectionSports_overflow_skates'>
                    <img src={f3} alt="" />
                </div>
                <div className='DirectionSports_overflow_skates'>
                    <img src={f1} alt="" />
                </div>
            </div>
            <DirectionSports3 text_h2='История поездок' text_p="not yet" />
        </div>
    )
}
