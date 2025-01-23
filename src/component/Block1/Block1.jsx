import './Block1.scss'
import Rectangle from '../images/Rectangle 6062.png'
// import Container from '../images/Container.png'

export default function Block1() {
    return (
        <div className='block1'>

            {/* <img className='block1_img' src={Container} alt="Container" /> */}
            <div className='block1__title'>
                <h1>tristique sit amet augue.</h1>
                <p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
            </div>
            <div className='block_home'>
                <div className='block_home_f1'>
                    <img src={Rectangle} alt="Rectangle" />
                    <h1>Надежность</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className='block_home_f1'>
                    <img src={Rectangle} alt="Rectangle" />
                    <h1>Гибкость</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className='block_home_f1'>
                    <img src={Rectangle} alt="Rectangle" />
                    <h1>Удобный</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className='block_home_f1'>
                    <img src={Rectangle} alt="Rectangle" />
                    <h1>Приватность</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className='block_home_f1'>
                    <img src={Rectangle} alt="Rectangle" />
                    <h1>Быстрая помощь</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className='block_home_f1'>
                    <img src={Rectangle} alt="Rectangle" />
                    <h1>Организованность</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
            </div>
        </div>
    )
}
