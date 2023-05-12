import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
    width: 100%;
    border-bottom: 1px solid ${theme.background.color.border};

    .HeaderContainer {
        display: block;
        max-width: 1000px;
    }

    .imgSearchWrapper {
        height: 56px;
        padding: 0 16px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
    }

    .menuImgWrapper {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .menuImgWrapper > * {
        cursor: pointer;
    }

    .livrouLogo {
        max-width: 100px;
    }
`