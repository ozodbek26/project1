import React from 'react'
import './YourRecords.scss'
import group from '../../component/images/Mask group (1).png'
import Block23 from '../../component2/AdditionalContentMobile/Block23/Block23'

export default function YourRecords() {
    return (
        <div className='YourRecords'>
            <h2 className='YourRecords_title'> Ваши рекорды </h2>
            <div className='YourRecords_records'>
                <Block23 text1="Расстояние" text_h4="45,39 км" src={group} />
                <Block23 text1="Расстояние" text_h4="45,39 км" src={group} />
                <Block23 text1="Расстояние" text_h4="45,39 км" src={group} />
            </div>
        </div>
    )
}
