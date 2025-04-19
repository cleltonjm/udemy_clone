import { NavLink } from "react-router-dom";
import { css, styled } from "styled-components";

interface ButtonVariantProps {
    variant?: 'secondary' | 'no-border';
}

export const TextContiner = styled.span`
    font-size: 0.875rem;
    padding: 0.75rem;
    border-radius: 10px;
    cursor: pointer;
    color: ${props => props.theme['gray-500']};

    &:hover {
        color: ${props => props.theme['blue-300']};
        background: ${props => props.theme['blue-200']};;

        transition: 0.15s;
    }
`;

export const PopOverProps = styled.div`
    width: 20rem;
    height: auto;
    padding: 2rem;
    margin-top: 2rem;

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
    font-weight: bold;
    color: ${props => props.theme['gray-600']};
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

export const NavLinkProps = styled(NavLink)`
    text-decoration: none;
`;