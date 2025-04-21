import { styled } from "styled-components";

export const ReportsContainer = styled.div`
    display: flex;

    img {
        width: 75%;
    }

`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0 3rem 0;
    gap: 2rem;
    color: ${props => props.theme['gray-500']};

    h2 {
        font-size: 2rem;
    }

    span {
        font-size: 1.125rem;
    }
`;

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;

    font-weight: bold;
    font-size: 0.875rem;
    padding: 0.5rem;
    gap: 0.5rem;

    border-radius: 6px;
    border: 1px solid ${props => props.theme['purple-300']};
    
    color: ${props => props.theme['purple-300']};
    background: ${props => props.theme['gray-100']};
    cursor: pointer;

    &:hover {
        background: ${props => props.theme['blue-200']};
    }
`;