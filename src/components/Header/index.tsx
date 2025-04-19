import { 
    ButtonContainer, 
    HeaderContainer, 
    IconButtonContainer, 
    ImageContainer, 
    NavLinkProps, 
    SearchFormContainer, 
    TextContatiner 
} from "./styles";
import { Globe, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/udemy-logo.png'
import * as Dialog from "@radix-ui/react-dialog";
import { LanguageModal } from "../LanguageModal";
import { NavLink } from "react-router-dom";
import { UdemyBusiness } from "../UdemyBusiness";
import { TeachAtUdemy } from "../TeachAtUdemy";

export function Header(){
    return (
        <HeaderContainer>
            <NavLink to="/">
                <ImageContainer src={logoImg} alt="" />
            </NavLink>
            <TextContatiner>
                Explorar
            </TextContatiner>

            <SearchFormContainer type="text" placeholder="Pesquise por qualquer coisa" list="search-suggestions" />
            <datalist id="search-suggestions">
                <option value="Pesquisa 1" />
                <option value="Pesquisa 2" />
                <option value="Pesquisa 3" />
            </datalist>

            <UdemyBusiness />
            <TeachAtUdemy />
            
            <IconButtonContainer variant="no-border"><ShoppingCart size={20} /></IconButtonContainer>

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