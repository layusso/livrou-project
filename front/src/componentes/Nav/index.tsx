import { NavWrapper } from './styles'
import { MdOutlineSpaceDashboard, MdOutlinePostAdd, MdKeyboardArrowDown } from 'react-icons/Md';
import { IoLogOutOutline, IoSettingsSharp } from 'react-icons/io5';
import { VscPreview } from 'react-icons/vsc'

export const Nav = () => {
  return (
    <NavWrapper>
      
        <ul className='ulNav'>
          <li className='navOption'>
            <div className='iconOption'>
              <MdOutlineSpaceDashboard size={24}/>
            </div>
            <p>Home</p>
          </li>
          <li className='navOption'>
            <div className='iconOption'>
              <VscPreview size={24}/>
            </div>
            <p>Reviews</p>
          </li>
          <li className='navOption'>
            <div className='iconOption'>
              <MdOutlinePostAdd size={24}/>
            </div>
            <p>Criar Anúncio</p>
          </li>
        </ul>

        
          <div className='filterOption'>
            <p>Filtrar</p>
            <div className='iconOption'>
              <MdKeyboardArrowDown size={24}/>
            </div>
          </div>
    </NavWrapper>
  )
}
