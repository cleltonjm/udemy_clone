import { styled } from "styled-components";

export const TrendingContainer = styled.div`
    

    h3 {
        padding: 1rem 0 1rem 0;
        font-size: 2rem;
        border-bottom: 1px solid ${props => props.theme['gray-200']};
    }
`;

export const TrendingList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
`;

export const TrendingCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0 2rem 0;
    gap: 2rem;

    p {
        font-size: 1.5rem;
        font-weight: bold;
    }

    a {
        font-size: 1.125rem;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.theme['purple-300']};
    }
`;

export const CourseDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['gray-300']};
    }
`;

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

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