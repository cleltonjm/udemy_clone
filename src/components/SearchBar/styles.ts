import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const SearchFormContainer = styled.input`
    flex: 1;

    color: 1px solid ${props => props.theme['gray-300']};
    border: 1.5px solid ${props => props.theme['gray-300']};
    border-radius: 50px;
    padding: 1rem;
    font-size: 0.875rem;

    &:hover {
        background-color: ${props => props.theme['gray-150']};
    }

    &:focus {
        border-color: ${props => props.theme['blue-350']};
    }

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;