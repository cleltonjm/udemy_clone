import styled from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-top: 3rem;
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

    border-bottom: 1px solid ${props => props.theme['gray-200']};

    button {
        border: 0;
        font-weight: bold;
        padding-bottom: 1rem;

        background: ${props => props.theme['gray-100']};
        color: ${props => props.theme['gray-350']};

        cursor: pointer;

        &:hover {
            color: ${props => props.theme['gray-500']};
        }

        &:focus {
            color: ${props => props.theme['gray-500']};
            border-bottom: 2px solid ${props => props.theme['gray-500']};
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

export const ButtonSlider = styled.button`
    max-width: fit-content;
    display: flex;
    text-align: left;
    flex-direction: column;
    
    padding: 1rem;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    background: ${props => props.theme['gray-200']};

    strong {
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

    &:focus {
        strong, span {
            color: ${props => props.theme['gray-100']};
        }
        
        background: ${props => props.theme['gray-500']};
    }
`;

export const CoursesContainer = styled.div`
    display: flex;
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 1rem;
    overflow: hidden;
`;

export const CourseCard = styled.button`
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