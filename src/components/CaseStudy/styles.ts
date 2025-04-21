import styled from "styled-components";

export const CaseStudyContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`;

export const CaseStudyHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const LogoContainer = styled.div``;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const StatValueContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;

export const StatValue = styled.div`
    display: flex;
    padding-bottom: 1rem;
    flex-direction: column;
    border-bottom: 1px solid ${props => props.theme['gray-200']};

    strong {
        font-size: 3rem;
        font-weight: bold;
        color: ${props => props.theme['gray-600']};
    }

    span {
        font-size: 1rem;
        color: ${props => props.theme['gray-500']};
    }
`;

export const ButtonContainer = styled.button`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875rem;
    gap: 0.5rem;
    padding: 0.5rem;

    font-weight: bold;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['purple-300']};

    &:hover {
        background: ${props => props.theme['purple-200']};
    }
`;

export const ImageContainer = styled.div`
    img {
        width: 40vw;
    }
`;


