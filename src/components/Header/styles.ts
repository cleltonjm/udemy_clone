import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface ButtonVariantProps {
    variant?: 'secondary' | 'no-border';
}

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    padding: 0.5rem;

    border-bottom: 1px solid transparent;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    position: relative;
`;

export const ImageContainer = styled.img`
    width: 6rem;
    display: flex;
    align-items: center;
    margin-left: 1rem;
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

export const ButtonContainer = styled.a<ButtonVariantProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid;
    border-radius: 4px;
    padding: 0.75rem;
    font-weight: 900;
    font-size: 0.75rem;

    color: ${props => props.theme['blue-350']};
    border-color: ${props => props.theme['blue-350']};

    cursor: pointer;

    &:hover {
        background: ${props => props.theme['blue-200']};
    }

    ${props => props.variant === 'secondary' && css`
        background: ${props => props.theme['blue-350']};
        color: ${props => props.theme['gray-100']};

        &:hover {
            background: ${props => props.theme['purple-300']};;

            transition: 0.15s;
        }
    `}
`;

export const IconButtonContainer = styled.button<ButtonVariantProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border: 1px solid;
    border-radius: 4px;
    margin-right: 1rem;

    cursor: pointer;

    &:hover {
        background: ${props => props.theme['blue-200']};
        color: ${props => props.theme['blue-300']};

        transition: 0.15s;
    }

    ${props => props.variant === 'no-border' && css`
        border: 0;
        background: ${props => props.theme['gray-100']};
    `}
`;

export const NavLinkProps = styled(NavLink)`
    text-decoration: none;
    color: inherit;
`;