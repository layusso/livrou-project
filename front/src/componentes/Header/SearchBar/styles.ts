import { styled } from "styled-components";
import { theme } from "../../../styles/theme";


export const SearchBarWrapper = styled.form`
    display: flex;
    width: 60%;
    min-width: 200px;
    .inputSearch {
        width: 100%;
        padding: .6rem 1rem;
        
        border-top: 1px solid ${theme.background.color.border};
        border-bottom: 1px solid ${theme.background.color.border};
        border-left: 1px solid ${theme.background.color.border};
        border-right: 1px solid ${theme.background.color.border};

        border-radius: 4px 0px 0px 4px;

        transition: .1s;
    }

    .inputSearch::placeholder {
        font-weight: 700;
        font-size: .75rem;
        color: rgba(0, 0, 0, 0.3);
    }

    .inputSearch:focus {
        outline: none;
        border: 1px solid black;
    }

    .searchIcon {
        display: flex;
        align-items: center;
        width: 15%;
        min-width: 50px;

        padding: .3rem 1rem;

        border-radius: 0px 8px 8px 0px;
        border: 1px solid ${theme.background.color.border};
        border-left: none;

        
        cursor: pointer;
        outline: none;

        display: flex;
        justify-content: center;
    }
`