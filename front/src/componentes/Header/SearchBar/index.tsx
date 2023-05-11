import React from 'react'
import { SearchBarWrapper } from './styles'
import { BiSearchAlt2 } from 'react-icons/bi';

export const SearchBar = () => {
  return (
    <>
        <SearchBarWrapper> 
            <input className='inputSearch' placeholder='Enter keywords...' type="text" />
            <button type='submit' className='searchIcon'>
                <BiSearchAlt2 size={24}/>
            </button>
        </SearchBarWrapper>
    </> 

    )
}
