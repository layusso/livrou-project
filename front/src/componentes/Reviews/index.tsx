import React from 'react'
import { Review } from './Review'

import * as S from './styles.ts'


export const Reviews = () => {
  return (
    <S.Wrapper>
      <S.ReviewsContainer>
        <S.ReviewsTitle>
          Reviews
        </S.ReviewsTitle>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/> 
        <Review/>
        <Review/>
        <Review/>
        <Review/>

      </S.ReviewsContainer>
    
      <S.FilterContainer>
        <S.FormFilterContainer>
          <div className='title'>
            <p>Filtrar reviews</p>
          </div>
            <S.FormFilter>
              <label className='label-input' htmlFor="titulo">Título do Livro</label>
              <input type="text" id="titulo" placeholder='Enter the title' />  

              <p className='label-input'>Ordenar por: </p>
              <S.SelectOptions>
                <option value="mais curtidas">Mais curtidas</option>
                <option value="mais recentes">Mais recentes</option>
              </S.SelectOptions>

              <button className='button-search'>
                Buscar
              </button>
            </S.FormFilter>
        </S.FormFilterContainer>

      </S.FilterContainer>
    </S.Wrapper>
  )
}
