import carousel from '../../assets/carousel.png'
import { TextContainer, ViewportContainer } from './styles'

export function Viewport() {
    return (
        <ViewportContainer>
            <img src={carousel} alt="" />
            <TextContainer>
                <strong>A promoção termina<br /> hoje</strong>
                <span>Adquira cursos conceituados a partir de R$ 27,90<br /> cada.</span>
            </TextContainer>
        </ViewportContainer>
    )
}