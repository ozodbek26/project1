import './Footer.scss'
import Store1 from '../images/Store badge (1).png'
import Store2 from '../images/Store badge (2).png'
import Rectangle from '../images/Rectangle 6062.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_block1'>
                <img src={Rectangle} alt="" />
                <div className='footer_block1_text1'>
                    <p>Download Now</p>
                    <p>License</p>
                </div>
                <div className='footer_block1_link'>
                    <a href="!">About</a>
                    <a href="!">Features</a>
                    <a href="!">Pricing</a>
                    <a href="!">News</a>
                    <a href="!">Help</a>
                    <a href="!">Contact</a>
                </div>
                <p>© 2024 Alfateam - be the best with us</p>
            </div>
            <div className='footer_block2'>
                <h3>Get the App</h3>
                <img src={Store1} alt="" />
                <img src={Store2} alt="" />
            </div>
        </div>
    )
}
