import React from 'react'
import { NavWrapper } from './styles'
import { MdOutlineSpaceDashboard, MdOutlinePostAdd } from 'react-icons/Md';
import { AiOutlineEllipsis } from 'react-icons/ai'
import { IoLogOutOutline, IoSettingsSharp } from 'react-icons/io5';
import { VscPreview } from 'react-icons/vsc'
import adeliaIcon from '/images/adelia.png'

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
        <li className='navOption'>
          <div className='iconOption'>
            <IoLogOutOutline size={24}/>
          </div>
          <p>Logout</p>
        </li>
        <li className='navOption'>
          <div className='iconOption'>
            <IoSettingsSharp size={22}/>
          </div>
          <p>Configurações</p>
        </li>
      </ul>

      <div className='profile'>
        <img src={adeliaIcon} alt="adelia" />
        <p>Adelia</p>
        <AiOutlineEllipsis/>
      </div>

    </NavWrapper>
  )
}
