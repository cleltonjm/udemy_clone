import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, Title } from "./styles";
import { X } from "phosphor-react";

export function LanguageModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Title>Escolha um idioma</Title>

                <CloseButton>
                    <X />
                </CloseButton>

                <form action="">
                    <a href="">Português</a>
                    <a href="">English</a>
                </form>

            </Content>
        </Dialog.Portal>
    )
}