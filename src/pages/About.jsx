import React from 'react'
import './About.scss'
import PersonalProfile from '../component2/PersonalProfile/PersonalProfile'
import DirectionSports2 from '../component2/DirectionSports/DirectionSports2'
import YourRecords from '../component2/YourRecords/YourRecords'
import Footer from '../component2/Footer/Footer'

export default function About() {
  return (
    <div className='About'>
        <PersonalProfile />
        <DirectionSports2/>
        <YourRecords/>
        <Footer/>
    </div>
  )
}
