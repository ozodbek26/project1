import './RoadMap.scss'
import Group from '../images/Group 2467 (1).png'

export default function RoadMap() {
  return (
    <div className='RoadMap'>
      <div className='RoadMap_title'>
        <h1>ДОРОЖНАЯ КАРТА</h1>
        <p>Curabitur vestibulum rutrum massa, vel tincidunt metus elementum eu. Aenean eu augue et orci laoreet cursus sit amet id velit. Curabitur bibendum turpis id tincidunt finibus. Cras imperdiet mauris vel nibh malesuada vulputate. Ut nec maximus velit. Curabitur vel tincidunt dui.</p>
      </div>
      <div className='RoadMap_main'>
        <div className='RoadMap_main_top'>
          <div className='Roadmap_main_block1'>
            <h1>1 квартал 2024</h1>
            <p>- Fusce efficitur</p>
            <p>- facilisis imperdie</p>
            <p>- Cras eget feugiat</p>
            <p>- Curabitur vel</p>
            <p>- Nam ultrices varius malesuada</p>
            <p>- Sed hendrerit</p>
            <p>- Cras dolor nisl</p>
          </div>
          <div className='Roadmap_main_block2'>
            <h1>1 квартал 2024</h1>
            <p>- Fusce efficitur</p>
            <p>- facilisis imperdie</p>
            <p>- Cras eget feugiat</p>
            <p>- Curabitur vel</p>
            <p>- Nam ultrices varius malesuada</p>
            <p>- Sed hendrerit</p>
            <p>- Cras dolor nisl</p>
          </div>
          <div className='Roadmap_main_block3'>
            <h1>1 квартал 2024</h1>
            <p>- Fusce efficitur</p>
            <p>- facilisis imperdie</p>
            <p>- Cras eget feugiat</p>
            <p>- Curabitur vel</p>
            <p>- Nam ultrices varius malesuada</p>
            <p>- Sed hendrerit</p>
            <p>- Cras dolor nisl</p>
          </div>
        </div>
        <img className='RoadMap_main_img' src={Group} alt="Group" />
        <div className='RoadMap_main_bottom'>
          <div className='RoadMap_main_bottom_block1'>
            <h1>1 квартал 2024</h1>
            <p>- Fusce efficitur</p>
            <p>- facilisis imperdie</p>
            <p>- Cras eget feugiat</p>
            <p>- Curabitur vel</p>
            <p>- Nam ultrices varius malesuada</p>
            <p>- Sed hendrerit</p>
            <p>- Cras dolor nisl</p>
          </div>
          <div className='RoadMap_main_bottom_block2'>
            <h1>1 квартал 2024</h1>
            <p>- Fusce efficitur</p>
            <p>- facilisis imperdie</p>
            <p>- Cras eget feugiat</p>
            <p>- Curabitur vel</p>
            <p>- Nam ultrices varius malesuada</p>
            <p>- Sed hendrerit</p>
            <p>- Cras dolor nisl</p>
          </div>
        </div>
      </div>
    </div>
  )
}
