import styled from "styled-components";

export const SignUpContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
    height: auto;
`;

export const ImageContainer = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const AuthFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    margin-left: 7rem;
    margin-right: 7rem;

    gap: 1.5rem;

    h2 {
        font-size: 2rem;
        color: ${props => props.theme['gray-600']};
    }

    a {
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 4px;
        color: ${props => props.theme['purple-300']};
    }
`;

export const TermsContainer = styled.div`
    font-size: 0.75rem;
`;

export const InputLabel = styled.input`
    width: 100%;
    height: 3.25rem;
    padding: 1.75rem 1rem;
    border: 1.75px solid ${props => props.theme['gray-300']};
    border-radius: 4px;

    &:focus {
        border: 1.75px solid ${props => props.theme['purple-300']};
        box-shadow: 0 1px 5px rgb(90 34 139 / 0.3);
        
    }
`;

export const Checkbox = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['gray-600']};
    }
`;

export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: 3.25rem;
    border: 1px solid ${props => props.theme['blue-300']};
    border-radius: 6px;
    cursor: pointer;

    color: ${props => props.theme['white']};
    background: ${props => props.theme['blue-300']};

    span {
        font-size: 1rem;
        font-weight: bold;
    }

    &:hover {
        background: ${props => props.theme['purple-300']};
    }
`;

export const SocialIconContainer = styled.div`
    display: flex;
    gap: 1.5rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        cursor: pointer;
        border: 1px solid ${props => props.theme['purple-300']};
        border-radius: 4px;
        background: ${props => props.theme['white']};

        &:hover {
            background: ${props => props.theme['blue-200']};
        }
    }
`;

export const SignIn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.25rem;
    font-size: 1rem;
    border-radius: 6px;
    background: ${props => props.theme['gray-150']};
    gap: 0.25rem;

    a {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
        color: ${props => props.theme['purple-300']};
    }
`;