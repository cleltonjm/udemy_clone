import * as PopOver from '@radix-ui/react-popover'
import { ButtonContainer, Content, LabelProps, NavLinkProps, PopOverProps, TextContiner } from './styles'

export function TeachAtUdemy() {    
    return (
        <PopOver.Root>
            <PopOver.Trigger asChild>
                <TextContiner>Ensine na Udemy</TextContiner>
            </PopOver.Trigger>

            <PopOver.Portal>
                <Content>
                    <PopOverProps>
                        <LabelProps>Transforme o que você sabe em oportunidade e alcance milhões de alunos do mundo todo.</LabelProps>
                        <NavLinkProps to="/learn-more">
                            <ButtonContainer variant={'secondary'}>Saiba mais</ButtonContainer>
                        </NavLinkProps>
                    </PopOverProps>
                </Content>
            </PopOver.Portal>
        </PopOver.Root>
    )
}