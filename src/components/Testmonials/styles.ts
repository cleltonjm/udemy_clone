import { styled } from "styled-components";

export const TestmonialsContainer = styled.div`
    margin-top: 3rem;
    padding: 3rem 0 3rem 0;

    background: ${props => props.theme['gray-150']};
`;

export const CardContainerList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 0.875rem;
    padding: 1.5rem;
    gap: 1rem;
    border: 1px solid ${props => props.theme['gray-200']};
    border-radius: 6px;
    background: ${props => props.theme['gray-100']};

    img {
        width: 8rem;
    }

    p {
        
        color: ${props => props.theme['gray-600']};
    }

    a {
        color: ${props => props.theme['purple-300']};
        text-decoration: none;
    }
`;

export const SourceDetails = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: ${props => props.theme['gray-300']};
    }
`;

export const UserDetails = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;

    img {
        width: 3rem;
        border-radius: 3.125rem;
    }
`;

export const UserDescription = styled.div`
    display: flex;
    flex-direction: column;
`;