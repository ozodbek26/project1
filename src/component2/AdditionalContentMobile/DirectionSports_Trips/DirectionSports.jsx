import './DirectionSports.scss'
import React, { useState } from 'react';

import group from '../../../component/images/Mask group.png'

export default function DirectionSports3( {text_h2 , text_p} ) {
  const [f1, w2] = useState()

  function ggg() {
    w2(g => !g)
  }

  return (
    <div>
      <div onClick={ggg} className='DirectionSports'>
        <div className='DirectionSports_h'>
          <h3 className='DirectionSports_hh1'>{text_h2}</h3>
          <img className={` image ${f1 ? "image-rotate" : ""}`} src={group} alt="" />
        </div>
      </div>
      {f1 && (
        <div className='content'>
          <p>{text_p}</p>
        </div>
      )}
    </div>

  )
}
