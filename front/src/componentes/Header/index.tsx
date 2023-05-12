import { HeaderWrapper } from './styles'
import { SearchBar } from './SearchBar'
import livrouLogo from '/images/livrouLogo.svg' 

import { AiOutlineMenu } from 'react-icons/ai'

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className='HeaderContainer'>
        <div className='imgSearchWrapper'>
          <div className='menuImgWrapper'>
            <AiOutlineMenu size={22}/>
            <img src={livrouLogo} className='livrouLogo' alt="livro" />
          </div>
          <SearchBar/>
        </div>
      </div>
    </HeaderWrapper> 
  )
}
