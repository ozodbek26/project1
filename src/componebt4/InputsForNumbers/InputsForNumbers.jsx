import React from 'react'
import './InputsForNumbers.scss'

export default function InputsForNumbers({ text1 , src  }) {
    return (
        <div className='InputsForNumbers'>
            <input type="text" className='InputsForNumbers_input' placeholder={text1} />
            <img className='InputsForNumbers_img' src={src} alt="" />
        </div>
    )
}
