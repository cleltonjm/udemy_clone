import { styled } from "styled-components";

export const PartnerContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding: 3rem;
`;

export const TextContainer = styled.span`
    font-size: 1.125rem;
    color: ${props => props.theme['gray-400']};
`;

export const ImageContainer = styled.div`
    display: flex;
    gap: 4rem;
`;