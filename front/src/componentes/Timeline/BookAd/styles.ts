import { styled } from "styled-components";
import { theme } from "../../../styles/theme";



export const BookAdWrapper = styled.div`
    min-height: 260px;
    width: 200px;

    display: flex;
    flex-direction: column;
    gap: .4rem;

    margin-bottom: 1rem;

    img {
        width: 100%;
    }
`


export const AdDescription = styled.div`
    
`

export const BookTitle = styled.p`
    font-size: .9rem;
    font-weight: ${theme.font.weight.reegular};
    margin-bottom: .4rem;
`

export const BookTradeDescription = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    p {
        font-size: 1rem;
        font-weight: ${theme.font.weight.bold};
        width: 100%;
    }
`

export const TradeButton = styled.button`
    width: 100%;

    border-radius: 30px;
    border: 1px solid black;
    background-color: #1A2B88;
    color: white;
    
    cursor: pointer;

    transition: .5s;
    font-size: .8rem;
    font-weight: ${theme.font.weight.medium};
`
