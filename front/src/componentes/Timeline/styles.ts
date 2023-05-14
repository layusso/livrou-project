import { styled } from "styled-components";
import { theme } from "../../styles/theme";


export const TimelineWrapper = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const TimelineTitle = styled.h2`
    padding: 1rem 2rem;
    font-weight: ${theme.font.weight.medium};
`

export const TimelineAdWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding-inline: 1rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`