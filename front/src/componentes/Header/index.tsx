import { HeaderWrapper } from './styles'
import { SearchBar } from './SearchBar'
import livrouLogo from '/images/livrouLogo.svg' 
import { AiOutlineEllipsis } from 'react-icons/ai'
import adeliaIcon from '/images/adelia.png'

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className='HeaderContainer'>
          <div className='menuImgWrapper'>
            <img src={livrouLogo} className='livrouLogo' alt="livro" />
          </div>


          <SearchBar/>

          <div className='profile'>
            <img className='profileImg' src={adeliaIcon} alt="adelia" />
            <AiOutlineEllipsis/>
          </div>
      </div>
      
    </HeaderWrapper>  
  )
}
