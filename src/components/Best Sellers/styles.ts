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

    padding: 1rem;
    gap: 1rem;
    cursor: pointer;
    border: 1px solid ${props => props.theme['gray-200']};
    background: ${props => props.theme['white']}
`;