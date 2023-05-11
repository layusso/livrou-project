import React from 'react'

import { HeaderWrapper } from './styles'
import { SearchBar } from './SearchBar'
import livrouLogo from '/images/livrouLogo.svg'


export const Header = () => {
  return (
    <HeaderWrapper>
      <div className='imgSearchWrapper'>
        <img src={livrouLogo} className='livrouLogo' alt="livro" />
        <SearchBar/>
      </div>
    </HeaderWrapper>
  )
}
