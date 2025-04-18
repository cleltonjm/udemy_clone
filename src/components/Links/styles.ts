import { styled } from "styled-components";

export const LinksProps = styled.div`
    background: ${props => props.theme['gray-550']};
    color: ${props => props.theme['gray-100']};
    
`;

export const LinksContainerColumn = styled.div`
    display: grid;
    grid-template-columns: 30rem 30rem 30rem 30rem;
    grid-template-rows: 1fr 1fr;
`;

export const LinksContainer = styled.div`
    font-size: 0.875rem;
    padding: 3rem;
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

export const Content = styled.div`
    
`;

export const TitleContainer = styled.h3`
    font-size: 1rem;
    padding-left: 3rem;
    padding-top: 2rem;  
`;