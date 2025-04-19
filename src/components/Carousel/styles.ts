import styled from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const TextContainer = styled.text`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 2rem;
        color: ${props => props.theme['gray-500']};
    }

    text {
        font-size: 1.125rem;
        color: ${props => props.theme['gray-400']};
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 1.5rem;

    button {
        border: 0;
        font-weight: bold;

        background: ${props => props.theme['gray-100']};
        color: ${props => props.theme['gray-350']};

        cursor: pointer;

        &:hover {
            color: ${props => props.theme['gray-500']};
        }
    }
`;

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    background: ${props => props.theme['gray-150']};
`;

export const ButtonsListContainer = styled.div`
    display: flex;
    padding-top: 1rem;
    gap: 1rem;
    flex-direction: row;
`;

export const ButtonSlider = styled.div`
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    
    padding: 1rem;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    background: ${props => props.theme['gray-200']};

    text {
        font-size: 1rem;
        font-weight: bold;
        color: ${props => props.theme['gray-500']};
    }
    
    span {
        font-size: 0.75rem;
        color: ${props => props.theme['gray-400']};
    }

    &:hover {
        background: ${props => props.theme['gray-300']};
    }
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

export const Button = styled.a`
    width: max-content;
    border: 1px solid;
    border-radius: 4px;
    padding: 0.75rem;
    font-weight: 900;
    font-size: 0.875rem;

    color: ${props => props.theme['blue-350']};
    border-color: ${props => props.theme['blue-350']};

    cursor: pointer;

    &:hover {
        background: ${props => props.theme['blue-200']};
    }
`;