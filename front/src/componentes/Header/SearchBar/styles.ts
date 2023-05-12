import { styled } from "styled-components";
import { theme } from "../../../styles/theme";


export const SearchBarWrapper = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 1 500px; 
    min-width: 0px;

    .inputSearch {
        width: 100%;
        padding: 0.5rem 1.5rem;
        
        border-top: 1px solid ${theme.background.color.border};
        border-bottom: 1px solid ${theme.background.color.border};
        border-left: 1px solid ${theme.background.color.border};
        border-right: 1px solid ${theme.background.color.border};

        border-radius: 20px 0px 0px 20px;
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
        padding: 0.5rem 1.5rem;

        border-radius: 0px 20px 20px 0px;
        border: 1px solid ${theme.background.color.border};
        border-left: none;
        
        cursor: pointer;
        outline: none;
    }
`