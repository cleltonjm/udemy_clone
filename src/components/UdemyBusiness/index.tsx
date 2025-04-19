import * as PopOver from '@radix-ui/react-popover'
import { ButtonContainer, LabelProps, NavLinkProps, PopOverProps, TextContiner } from './styles'

export function UdemyBusiness() {    
    return (
        <PopOver.Root>
            <PopOver.Trigger asChild>
                <TextContiner>Udemy Business</TextContiner>
            </PopOver.Trigger>

            <PopOver.Anchor />
            <PopOver.Portal>
                <PopOver.Content>
                    <PopOverProps>
                        <LabelProps>Sua equipe pode ter acesso a mais de 27.000 cursos de destaque da Udemy a qualquer hora, em qualquer lugar.</LabelProps>
                        <NavLinkProps to="udemy-business">
                            <ButtonContainer variant={'secondary'}>Testar a Udemy Business</ButtonContainer>
                        </NavLinkProps>
                    </PopOverProps>
                </PopOver.Content>
            </PopOver.Portal>
        </PopOver.Root>
    )
}