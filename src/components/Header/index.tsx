import { 
    ButtonContainer, 
    HeaderContainer, 
    IconButtonContainer, 
    ImageContainer, 
    NavLinkProps, 
    SearchFormContainer 
} from "./styles";
import { Globe, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/udemy-logo.png'
import * as Dialog from "@radix-ui/react-dialog";
import { LanguageModal } from "../LanguageModal";
import { NavLink } from "react-router-dom";
import { UdemyBusiness } from "../UdemyBusiness";
import { TeachAtUdemy } from "../TeachAtUdemy";
import { MenuBar } from "../MenuBar";
import { Cart } from "../Cart";
import { SearchBar } from "../SearchBar";

export function Header(){
    return (
        <HeaderContainer>
            <NavLink to="/">
                <ImageContainer src={logoImg} alt="" />
            </NavLink>

            <MenuBar />

            <SearchBar />  

            <UdemyBusiness />
            <TeachAtUdemy />
            <Cart />

            <NavLinkProps to="/sign-in">
                <ButtonContainer type="button">
                    <span>Fazer login</span>
                </ButtonContainer>
            </NavLinkProps>

            <NavLinkProps to="/sign-up">
                <ButtonContainer variant="secondary">
                    <span>Cadastre-se</span>
                </ButtonContainer>
            </NavLinkProps>
            
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <IconButtonContainer><Globe size={20} /></IconButtonContainer>
                </Dialog.Trigger>

                <LanguageModal />
            </Dialog.Root>
        </HeaderContainer>
    )
}