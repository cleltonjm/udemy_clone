import { 
    ButtonLinkContainer,
    ContentContainer, 
    EnterpriseContainer, 
    Feature, 
    FeaturesContainer, 
    FeaturesListContainer, 
    ImageContainer, 
    Preview, 
    TextContainer 
} from "./styles";
import { ArrowRight } from 'phosphor-react'
import previewImage from '../../assets/Portugese.webp'
import handsIcon from '../../assets/icons/hands-on-practice.webp'
import certIcon from '../../assets/icons/certificate.webp'
import emptyIcon from '../../assets/icons/empty-state-1.webp'
import orgIcon from '../../assets/icons/organizations-2.png'

export function Features() {
    return (
        <FeaturesContainer>
            <h2>Aprendizado com foco nos seus objetivos</h2>
            <ContentContainer>
                <FeaturesListContainer>

                    <Feature>
                        <ImageContainer>
                            <img src={handsIcon} alt="" />
                        </ImageContainer>
                        <TextContainer>
                            <strong>Treinamento prático</strong>
                            <span>Requalificação eficaz com exercícios de codificação, simulados, testes e espaços de trabalho baseados em IA.</span>
                        </TextContainer>
                    </Feature>

                    <Feature>
                        <ImageContainer>
                            <img src={certIcon} alt="" />
                        </ImageContainer>
                        <TextContainer>
                            <strong>Preparação para certificação</strong>
                            <span>Prepare-se para certificações reconhecidas pelo setor resolvendo desafios reais e ainda conquiste insínias durante o processo.</span>
                            <ButtonLinkContainer href="/" target="_blank">
                                <span>Explore courses</span>
                                <ArrowRight size={20} />
                            </ButtonLinkContainer>
                        </TextContainer>
                    </Feature>

                    <Feature>
                        <ImageContainer>
                            <img src={emptyIcon} alt="" />
                        </ImageContainer>
                        <TextContainer>
                            <EnterpriseContainer>
                                <strong>Insights e análises</strong>
                                <span>Plano Enterprise</span>
                            </EnterpriseContainer>
                            <span>Acelere suas metas com insights avançados e uma equipe dedicada de sucesso do cliente, para ajudar a impulsionar o aprendizado eficaz.</span>
                            <ButtonLinkContainer href="/" target="_blank">
                                <span>Saiba mais</span>
                                <ArrowRight size={20} />
                            </ButtonLinkContainer>
                        </TextContainer>
                    </Feature>

                    <Feature>
                        <ImageContainer>
                            <img src={orgIcon} alt="" />
                        </ImageContainer>
                        <TextContainer>
                            <EnterpriseContainer>
                                <strong>Conteúdo personalizável</strong>
                                <span>Plano Enterprise</span>
                            </EnterpriseContainer>
                            <span>Crie trilhas de aprendizado personalizadas para as metas da equipe e da organização, onde você pode até mesmo hospedar seu conteúdo e recursos.</span>
                            <ButtonLinkContainer href="/" target="_blank">
                                <span>Saiba mais</span>
                                <ArrowRight size={20} />
                            </ButtonLinkContainer>
                        </TextContainer>
                    </Feature>

                </FeaturesListContainer>
                <Preview>
                    <img src={previewImage} alt="Preview" />
                </Preview>
            </ContentContainer>
        </FeaturesContainer>
    )
}