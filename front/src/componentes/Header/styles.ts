import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    padding: .3rem 1rem;

    border-bottom: 1px solid ${theme.background.color.border};
    
    .imgSearchWrapper {
        width: 900px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .livrouLogo {
        max-width: 150px;
    }
`