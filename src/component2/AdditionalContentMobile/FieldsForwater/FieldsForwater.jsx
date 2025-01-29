import React from 'react'
import './FieldsForwater.scss'

export default function FieldsForwater({ text_h3 }) {
    return (
        <div className='FieldsForwater'>
            <label className='FieldsForwater_label' htmlFor={text_h3}>
                {text_h3}
                <input id={text_h3} className='FieldsForwater_input' type="text" />
            </label>
        </div>
    )
}
      