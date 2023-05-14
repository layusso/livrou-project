import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
    width: 100%;
    display: block;
    border-bottom: 1px solid #d3d3d3;

    .HeaderContainer {
        height: 56px;
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;

        padding-inline: 2rem;
        gap: 1rem;
    }

    .menuImgWrapper {
        min-width: 70px;
        display: flex;
    }

    .menuImgWrapper > img {
        width: 100%;
    }

    .menuImgWrapper > * {
        cursor: pointer;
    }

    .livrouLogo {
        max-width: 100px;
    }

    .profile {
        display: flex;
        gap: .5rem;
        align-items: center;
        padding: .3rem .5rem;

        transition: .2s;
    }

    .profileImg {
        width: 35px;
    }

    .profile > * {
        cursor: pointer;
    }

    .profile > p {
        font-size: .8rem;
        font-weight: ${theme.font.weight.medium};
    }
`