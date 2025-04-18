import { FooterBaseContainer, LanguageContainer, LogoContainer } from "./styles"
import udemyLogoWhite from '../../assets/logo-udemy-inverted.svg'
import { Globe } from 'phosphor-react'
import * as Dialog from "@radix-ui/react-dialog"
import { LanguageModal } from "../LanguageModal"

export function Footer() {
    return (
        <FooterBaseContainer>
            <LogoContainer>
                <img src={udemyLogoWhite} alt="Logo Udemy" />
                <span>© 2025 Udemy, Inc.</span>
            </LogoContainer>
            <a href="">Configurações de cookie</a>

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <LanguageContainer>
                        <Globe size={20} />
                        Português
                    </LanguageContainer>
                </Dialog.Trigger>
            
                <LanguageModal />
            </Dialog.Root>
        </FooterBaseContainer>
    )
}