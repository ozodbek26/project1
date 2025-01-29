import React, { useState } from 'react'
import './TripleSwitch.scss'

export default function TripleSwitch({ break1, break2, break3 }) {
    const [active, setActive] = useState(null)

    function ggg1(id) {
        setActive(id)

    }



    return (

        <div className='TripleSwitch'>
            <div onClick={() => ggg1(1)} className={active === 1 ? 'TripleSwitch_block1 ' : 'TripleSwitch_block1_1'}>{break1}</div>
            <div onClick={() => ggg1(2)} className={active === 2 ? 'TripleSwitch_block1' : 'TripleSwitch_block1_1'}>{break2}</div>
            <div onClick={() => ggg1(3)} className={active === 3 ? 'TripleSwitch_block1 ' : 'TripleSwitch_block1_1'}>{break3}</div>
        </div>
    )
}
