import React from 'react'
import './AdditionalInformation.scss'
import Mask from '../../component/images/Mask group (2).png'
import Mask2 from '../../component/images/Mask group (3).png'

export default function AdditionalInformation({ texth4, img2 , img1}) {
    return (
        <div className='AdditionalInformation'>
            {/* <a href="!#" className='AdditionalInformation_block1'>
                <img src={Mask} alt="" />
                <h4>Оцените нас на App Store!</h4>
                <img src={Mask2} alt="" />
            </a> */}
            {/* <a href="!#" className='AdditionalInformation_block1'>
                <img src={Mask} alt="" />
                <h4>Оцените нас на App Store!</h4>
                <img src={Mask2} alt="" />
            </a> */}
            <a href="!#" className='AdditionalInformation_block1'>
                <img className='AdditionalInformation_block1_img2' src={img1} alt="" />
                <h4 className='AdditionalInformation_block1_text'>{texth4}</h4>
                <img className='AdditionalInformation_block1_img' src={img2} alt="" />
            </a>
        </div>
    )
}
