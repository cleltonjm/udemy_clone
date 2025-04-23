import { styled } from "styled-components";

export const FeaturesContainer = styled.div`
    background: ${props => props.theme['gray-150']};

    h2 {
        font-size: 2rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
`;

export const FeaturesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Feature = styled.button`
    width: 35vw;
    height: 10rem;
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
    border-radius: 16px;
    
    border: 1px solid ${props => props.theme['gray-200']};
    background: ${props => props.theme['gray-100']};

    &:hover {
        cursor: pointer;
        background: ${props => props.theme['gray-200']};
    }

    &:focus {
        border-left: 5px solid ${props => props.theme['purple-300']};;
    }
`;

export const ImageContainer = styled.div`
    img {
        width: 4.5rem;
    }
`;

export const TextContainer = styled.text`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    strong {
        font-size: 1.125rem;
        color: ${props => props.theme['gray-600']};
    }

    span {
        font-size: 1rem;
        color: ${props => props.theme['gray-400']};
    }
`;

export const ButtonLinkContainer = styled.a`
    width: 12rem;
    display: flex;
    align-items: left;
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme['purple-300']};
    font-weight: bold;
    text-decoration: none;

    span {
        color: ${props => props.theme['purple-300']};
    }

    &:hover {
        background: ${props => props.theme['blue-200']};
    }
`;

export const EnterpriseContainer = styled.div`
    display: flex;
    gap: 1rem;

    span {
        font-size: 0.75rem;
        font-weight: bold;
        border-radius: 6px;
        padding: 0.25rem 0.75rem 0.25rem 0.75rem;
        color: ${props => props.theme['purple-300']};
        background: ${props => props.theme['gray-100']};
        border: 1px solid ${props => props.theme['purple-300']};
    }
`;

export const Preview = styled.div`
    img {
        width: 40rem;
        height: auto;
    }
`;