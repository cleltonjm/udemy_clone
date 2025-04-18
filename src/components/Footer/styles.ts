import { styled } from "styled-components";

export const FooterBaseContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    padding-left: 3rem;
    justify-content: space-between;
    background: ${props => props.theme['gray-600']};
    color: ${props => props.theme['gray-100']};
    font-size: 0.875rem;

    a {
        text-decoration: none;
        color: ${props => props.theme['gray-100']};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
        width: 100px;
        height: auto;
    }
`;

export const LanguageContainer = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    text-decoration: none;
    gap: 0.25rem;
    cursor: pointer;
    color: ${props => props.theme['gray-100']};
`;