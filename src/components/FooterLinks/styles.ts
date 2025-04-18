import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
    
`;

export const SponsorshipContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    padding-left: 3rem;
    margin-top: 3rem;
    background: ${props => props.theme['gray-550']};

    border-bottom: 1px solid ${props => props.theme['gray-100']};
`;

export const TextContainer = styled.text`
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.theme['gray-100']}
`;

export const NavLinkProps = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme['blue-200']};

    &:hover {
        text-decoration: underline;
    }
`;

export const ImageContainer = styled.image`
    display: flex;
    gap: 1rem;
    padding-right: 1.5rem;
`;


