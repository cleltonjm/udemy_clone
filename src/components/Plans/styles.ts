import { styled } from "styled-components";

export const PlansContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CardList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`;

export const TitleContainer = styled.text`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 3rem;
    
    h3 {
        font-size: 2rem;
    }

    span {
        font-size: 1.125rem;
        color: ${props => props.theme['gray-400']};
    }
`;

export const PlanCardContainer = styled.div`
    border-radius: 8px; 
    border: 1px solid ${props => props.theme['gray-150']}
`;

export const HeaderCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 0.5rem;
    border-radius: 8px 8px 0 0; 
    border-top: 8px solid ${props => props.theme['purple-200']};
    color: ${props => props.theme['gray-600']};
    background: ${props => props.theme['gray-150']};

    strong {
        font-size: 1.125rem;
    }

    span {
        font-size: 0.75rem;
    }
`;

export const UserDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme['gray-400']};
`;

export const CardBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
`;

export const CardBodyTitle = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        font-size: 1rem;
    }
    
    span {
        font-size: 0.75rem;
        color: ${props => props.theme['gray-400']};
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;

    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;

    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['purple-300']};

    &:hover {
        background: ${props => props.theme['purple-200']};
    }
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: green;

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['gray-500']};
    }
`;