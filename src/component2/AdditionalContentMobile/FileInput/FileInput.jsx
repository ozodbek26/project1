import React from 'react'
import './FileInput.scss'

export default function FileInput({ text }) {
    return (
        <div className='input_block'>
            <label className='file_label' htmlFor={text}>
                {text}
                <input id={text} className='file_input' type="file"/>
            </label>
        </div>
    )
}
   