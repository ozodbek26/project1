import React, { useState } from 'react'
import './Switch.scss'
import Switch1 from '../../../component/images/Перелючатель (1).png'
import Switch2 from '../../../component/images/Перелючатель (2).png'

export default function Switch({ text_h2, text_p }) {
    const [f1, w2] = useState(false)

    function ggg() {
        w2(g => !g)
    }

    return (

        <div onClick={ggg} className='Switch'>
            <div className='Switch_text1'>
                <h2 className='Switch_text_h2' >{text_h2}</h2>
                <p className='Switch_text1_p'>{text_p}</p>
            </div>
            <img  className='Switch_img' src={f1 ? Switch1 : Switch2} alt="Switch1" />
        </div>
    )
}
