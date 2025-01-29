import React from 'react'
// import { useState } from 'react';
import './Footer.scss'

import f06 from '../../component/images/g1/Frame 3606.png'
import f13 from '../../component/images/g1/Frame 3613.png'
import f4 from '../../component/images/g1/Frame 3614.png'
import f15 from '../../component/images/g1/Frame 3615.png'
import Rectangle from '../../component/images/g1/Frame 3612.png'


export default function Footer() {
    // const [active, setActive] = useState(false)

    // function gggg() {
    //     setActive(!active)
    // }


    return (
        <div className='Footer'>

            <button className='Footer_button'><img src={Rectangle} alt="" /></button>

            <div className="Footer__links">
                <div className='Footer__block1'>
                    <div className="Footer__link">
                        <img src={f06} alt="" />
                    </div>
                    <div className="Footer__link">
                        <img src={f13} alt="" />
                    </div>
                </div>
                <div className='Footer__block2'>
                    <div className="Footer__link">
                        <img src={f4} alt="" />
                    </div>
                    <div className="Footer__link">
                        <img src={f15} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}  
