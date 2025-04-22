import { styled } from "styled-components";
import * as Menubar from '@radix-ui/react-menubar'

export const Content = styled(Menubar.Content)`
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin-top: 1.3rem;
    font-size: 0.875rem;

    box-shadow: 0 2px 10px ${props => props.theme['gray-200']};
    border-radius: 6px;
    border: 1px solid ${props => props.theme['gray-200']};
    background: ${props => props.theme['gray-100']};
`;

export const Label = styled(Menubar.Label)`
    padding: 0.75rem;
    font-weight: bold;
    color: ${props => props.theme['gray-400']};
`;

export const Separator = styled(Menubar.Separator)`
    border: 1px solid ${props => props.theme['gray-200']};
`;

export const MenuItem = styled(Menubar.Item)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;

    cursor: pointer;

    &:hover {
        color: ${props => props.theme['blue-300']};
        background: ${props => props.theme['blue-200']};
    }
`;

export const Trigger = styled(Menubar.Trigger)`
    font-size: 0.875rem;
    padding: 0.75rem;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    color: ${props => props.theme['gray-500']};
    background: ${props => props.theme['gray-100']};
    
    &:hover {
        color: ${props => props.theme['blue-300']};
        background: ${props => props.theme['blue-200']};

        transition: 0.15s;
    }
`;

export const SubTrigger = styled(Menubar.SubTrigger)`
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin-top: 1.5rem;
    font-size: 0.875rem;

    box-shadow: 0 2px 10px ${props => props.theme['gray-200']};
    border-radius: 6px;
    border: 1px solid ${props => props.theme['gray-200']};
    background: ${props => props.theme['gray-100']};
`;