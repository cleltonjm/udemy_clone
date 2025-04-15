import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;

    background: ${props => props.theme['gray-100']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        a {
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme['gray-100']};
            color: ${props => props.theme['gray-500']};
            padding: 1rem;
            text-decoration: none;
            cursor: pointer;
            
            &:hover {
                color: ${props => props.theme['blue-300']};
                background: ${props => props.theme['blue-200']};;

                transition: 0.15s;
            }
        }
    }
`;

export const Title = styled(Dialog.Title)`
    font-size: 18px;
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    border-radius: 6px;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    padding: 0.75rem;
    cursor: pointer;
    color: ${props => props.theme['gray-500']};

    &:hover {
        color: ${props => props.theme['blue-300']};
        background: ${props => props.theme['blue-200']};;

        transition: 0.15s;
    }
`;