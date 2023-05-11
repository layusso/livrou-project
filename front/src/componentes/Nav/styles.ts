import { styled } from "styled-components";
import { theme } from "../../styles/theme";




export const NavWrapper = styled.nav`
    flex-basis: 200px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem 0;
    border-right: 1px solid ${theme.background.color.border};

    .ulNav {
        display: flex;
        flex-direction: column;

        width: 100%;
        margin: 1rem auto 0 auto;
        gap: .5rem;
    }

    .navOption {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .7rem;

        width: 80%;
        margin: auto;

        padding: .5rem .7rem;
        transition: .5s;
        border-radius: 50px;
    } 

    .navOption:hover {
        background-color: rgba(128, 128, 128, 0.5);
    } 
    .navOption > p {
        font-size: .85rem;
    }

    .navOption > * {
        cursor: pointer;
    }

    .iconOption {
        display: flex;
        align-items: center;
    }

    .profile {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin: 0 auto;

        width: 165px;
        padding: .3rem .5rem;

        transition: .2s;
    }

    .profile:hover {
        background-color: rgba(128, 128, 128, 0.5);
        border-radius: 50px;
    }

    .profile > * {
        cursor: pointer;
    }

    .profile > p {
        font-size: .8rem;
        font-weight: ${theme.font.weight.medium};
    }
`

