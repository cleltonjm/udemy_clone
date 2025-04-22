import { NavLink } from "react-router-dom";
import { css, styled } from "styled-components";
import * as PopOver from '@radix-ui/react-popover'

interface ButtonVariantProps {
    variant?: 'secondary' | 'no-border';
}

export const Content = styled(PopOver.Content)`
    box-shadow: 0 2px 10px ${props => props.theme['gray-200']};
`;

export const IconButtonContainer = styled.button<ButtonVariantProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border: 0;
    border-radius: 4px;

    cursor: pointer;
    background: ${props => props.theme['gray-100']};

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

export const PopOverProps = styled.div`
    width: 20rem;
    height: auto;
    padding: 2rem;
    margin-top: 1.4rem;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    border-radius: 6px;
    border: 1px solid ${props => props.theme['gray-200']};
    background: ${props => props.theme['white']};
`;

export const LabelProps = styled.text`    
    font-size: 1rem;
    color: ${props => props.theme['gray-300']};
`;

export const ButtonContainer = styled.a<ButtonVariantProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid;
    border-radius: 4px;
    padding: 0.75rem;
    font-weight: 900;
    font-size: 0.8rem;
    border: 0;
    color: ${props => props.theme['blue-350']};

    cursor: pointer;

    &:hover {
        color: ${props => props.theme['purple-300']};
    }

    ${props => props.variant === 'secondary' && css`
        background: ${props => props.theme['blue-350']};
        color: ${props => props.theme['gray-100']};

        &:hover {
            background: ${props => props.theme['purple-300']};

            transition: 0.15s;
        }
    `}
`;

export const NavLinkProps = styled(NavLink)`
    text-decoration: none;
`;