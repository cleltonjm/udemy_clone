import * as PopOver from '@radix-ui/react-popover'
import { ShoppingCart } from 'phosphor-react'
import { ButtonContainer, Content, IconButtonContainer, LabelProps, NavLinkProps, PopOverProps } from './styles'

export function Cart() {   
    return (
        <PopOver.Root>
            <PopOver.Trigger asChild>
                <IconButtonContainer><ShoppingCart size={20} /></IconButtonContainer>
            </PopOver.Trigger>

            <PopOver.Portal>
                <Content>
                    <PopOverProps>
                        <LabelProps>Seu carrinho está vazio.</LabelProps>
                        <NavLinkProps to="cart">
                            <ButtonContainer variant={'no-border'}>Continuar comprando</ButtonContainer>
                        </NavLinkProps>
                    </PopOverProps>
                </Content>
            </PopOver.Portal>
        </PopOver.Root>
    )
}