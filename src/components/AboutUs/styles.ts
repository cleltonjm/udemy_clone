import { styled } from "styled-components";

export const StructuredLinks = styled.div`
    padding-left: 3rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['gray-600']};
    border-bottom: 1px solid ${props => props.theme['gray-100']};
`;

export const StructuredLinksColumn = styled.div`
    display: grid;
    grid-template-columns: 30rem 30rem 30rem 30rem;
`;

export const TitleContainer = styled.h3`
    font-size: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;    
`;

export const LinksContainer = styled.a`
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;