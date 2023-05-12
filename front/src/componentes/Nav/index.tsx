import { NavWrapper } from './styles'
import { MdOutlineSpaceDashboard, MdOutlinePostAdd, MdKeyboardArrowDown } from 'react-icons/Md';
import { AiOutlineEllipsis } from 'react-icons/ai'
import { IoLogOutOutline, IoSettingsSharp } from 'react-icons/io5';
import { VscPreview } from 'react-icons/vsc'
import { BsFilter } from 'react-icons/bs'
import adeliaIcon from '/images/adelia.png'

export const Nav = () => {
  return (
    <NavWrapper>
      <div>
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

        <ul>
          <li className='filterStyle'>
            <p>Filtrar</p>
            <div className='iconOption'>
              <MdKeyboardArrowDown size={24}/>
            </div>
          </li>
        </ul>
    

        <ul className='ulNav'>
          <li className='navOption'>
            <div className='iconOption'>
              <IoLogOutOutline size={24}/>
            </div>
            <p>Logout</p>
          </li>
          <li className='navOption'>
            <div className='iconOption'>
              <IoSettingsSharp size={21}/>
            </div>
            <p>Configurações</p>
          </li>
        </ul>
      </div>

      <div className='profile'>
        <img src={adeliaIcon} alt="adelia" />
        <p>Adelia</p>
        <AiOutlineEllipsis/>
      </div>

    </NavWrapper>
  )
}
