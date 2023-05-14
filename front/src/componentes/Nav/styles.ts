import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const NavWrapper = styled.nav`
    width: 200px;
    height: 100%;

    display: flex;
    flex-direction: column;
    border-right: 1px solid #d3d3d3;


    background-color: #FFFFFF;
    position: fixed;

    .ulNav {
        display: flex;
        flex-direction: column;

        width: 100%;
        margin: 0 auto 0 auto;
        padding: 1rem 0rem;
    }

    .navOption {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        width: 100%;

        padding: .5rem 1.4rem;
        transition: .1s;
        border-radius: 10px;
    } 

    .navOption:hover {
        background-color: rgba(128, 128, 128, 0.3);
    } 
    .navOption > p {
        font-size: .8rem;
        font-weight: ${theme.font.weight.reegular};
    }

    .navOption > * {
        cursor: pointer;
    }

    .iconOption {
        display: flex;
        align-items: center;
        width: 22px;
    }

    .line {
        background-color: #B3DBDB;
        width: 100%;
        height: 1px;
        margin: .5rem 0 .5rem 0;
    }

    .filterStyle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;

        padding: .5rem .7rem;
        transition: .1s;
        border-radius: 10px;
        cursor: pointer;
        border-block: 1px solid #B3DBDB;
        margin-block: 1rem;
    }

    .filterStyle > .iconOption:hover {
        border-radius: 50px;
        background-color: rgba(128, 128, 128, 0.5);
    }

    .filterStyle > p {
        font-size: .8rem;
        font-weight: ${theme.font.weight.reegular};
    }

    .filterOption {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: .7rem 1.4rem;
        font-size: .9rem;

        border-block: 1px solid #d3d3d3;
        cursor: pointer;

    }

`

