import * as S from './styles'

export type BookAdProps = {
    title?: string
    urlImage?: string
    transactionType?: string
    value?: string
}

export const BookAd: React.FC<BookAdProps> = ({ title, urlImage, transactionType, value }) => {
  return (
    <S.BookAdWrapper>
          <img src={urlImage} alt="" />
        <S.AdDescription>
          <S.BookTitle>
            Ponte para Terabítia
          </S.BookTitle>

          <S.BookTradeDescription>
            <p>R$ 15,00</p>
            <S.TradeButton>
              Comprar
            </S.TradeButton>
          </S.BookTradeDescription>
        </S.AdDescription>

    </S.BookAdWrapper>
  )
}
