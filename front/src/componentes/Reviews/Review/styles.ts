import { styled } from "styled-components";
import { theme } from "../../../styles/theme";


export const ReviewContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    border-radius: 20px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);

`

export const ProfileImgWrapper = styled.div`
    min-width: 60px;
    display: flex;
    margin-left: 1rem;

    img {
        width: 100%;
    }
`
export const ReviewContentWrapper = styled.div`
    padding: .5rem 1rem;
    border-right: 1px solid #1A2B88;

    display: flex;
    flex-direction: column;
    gap: .1rem;
`
export const BookTitle = styled.p`
    font-size: 1rem;
    color: #1A2B88;
    font-weight: ${theme.font.weight.bold};
`

export const ReviewTitle = styled.p`
    font-size: .8rem;
    font-weight: ${theme.font.weight.medium};
`

export const ReviewContent = styled.p`
    font-size: .7rem;
    text-align: justify;
`

export const ReviewInteraction = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;

    margin-inline: 1rem;

    
    > * {
        cursor: pointer;
    }

    p {
        font-size: .7rem;
    }

`