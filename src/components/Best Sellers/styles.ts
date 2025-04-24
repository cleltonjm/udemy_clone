import { styled } from "styled-components";

export const TextContainer = styled.span`
    display: flex;
    padding: 5rem 0 1rem 0;

    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['gray-600']};
`;

export const CoursesContainer = styled.div`
    display: flex;
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 1rem;
    overflow: hidden;
`;

export const CourseCard = styled.a`
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 6px;
    
    cursor: pointer;
    border: 1px solid ${props => props.theme['gray-200']};
    background: ${props => props.theme['white']};

    img {
        border-radius: 6px 6px 0 0;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1rem;
    gap: 1rem;

    h2 {
        font-size: 1rem;
        color: ${props => props.theme['gray-500']};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['gray-300']};
    }

    p {
        font-size: 0.875rem;
        font-weight: bold;
        color: ${props => props.theme['orange-500']};

        text {
            color: ${props => props.theme['orange-400']};
        }
    }

    h3 {
        font-size: 1rem;
        color: ${props => props.theme['gray-500']};
    }

    strong {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        font-size: 0.75rem;
        border-radius: 3px;
        padding: 0.25rem;
        color: ${props => props.theme['green-400']};
        background: ${props => props.theme['green-300']};
    }
`;