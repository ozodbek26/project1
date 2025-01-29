import React from 'react'
import './Block23.scss'
// import group from '../../../component/images/Mask group (1).png'

export default function Block23( {text1, text_h4 , src} ) {
    return (
        <div className='YourRecords_records_block1'>
            <img src={src} alt="" />
            <div className='YourRecords_records_block1_text'>
                <p>{text1}</p>
                <h4>{text_h4}</h4>
            </div>
        </div>
    )
}
