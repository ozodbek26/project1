import './PersonalProfile.scss'
import Ellipse from '../../component/images/Ellipse 319.png'
import settings from '../../component/images/settings.png'
// import Frame from '../../component/images/Frame 3554.png'
import { Link } from 'react-router-dom'
import Block24 from '../../component2/AdditionalContentMobile/Block24/Block24'


export default function PersonalProfile() {
  return (
    <div className='PersonalProfile'>
      <div className='PersonalProfile_title'>

        <h1>Личный кабинет</h1>
        <a href="!#">
          <Link to="/settings" className="nav-link">
            <img src={settings} alt="settings" />
          </Link>

        </a>
      </div>
      <div className='PersonalProfile_Profile'>

        <Link to="/mydata" className="nav-link">
          <img src={Ellipse} alt="Ellipse" />
        </Link>
        <div className='PersonalProfile_Profile_text'>
          <h3>John Smith</h3>
          <p>Premium</p>
        </div>
      </div>

      <Block24 />
    </div>
  )
}
