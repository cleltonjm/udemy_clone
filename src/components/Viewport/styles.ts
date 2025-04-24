import { styled } from "styled-components";

export const ViewportContainer = styled.div`
    display: flex;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 30rem;
    height: 13rem;

    position: absolute;
    top: 10rem;
    left: 25rem;
    padding: 1rem;
    gap: 1rem;

    box-shadow: 0 2px 10px ${props => props.theme['gray-200']};
    border: 0;
    border-radius: 6px;

    strong {
        font-size: 2rem;
    }

    span {
        font-size: 1rem;
    }
`;
