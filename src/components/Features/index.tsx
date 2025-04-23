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

import handsIcon from '../../assets/icons/hands-on-practice.webp'
import certIcon from '../../assets/icons/certificate.webp'
import emptyIcon from '../../assets/icons/empty-state-1.webp'
import orgIcon from '../../assets/icons/organizations-2.png'

import previewImage from '../../assets/Portugese.webp'
import previewImage1 from '../../assets/Portugese (1).webp'
import previewImage2 from '../../assets/Portugese (2).webp'
import previewImage3 from '../../assets/Portugese (3).webp'
import { useEffect, useRef, useState } from "react";

const images = [
    previewImage,
    previewImage1,
    previewImage2,
    previewImage3,
]

export function Features() {
    const [selected, setSelected] = useState(images[0])

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        buttonRef.current?.focus();
      }, []);

    const handleSelected = (index: number) => {
        setSelected(images[index])
    }

    return (
        <FeaturesContainer>
            <h2>Aprendizado com foco nos seus objetivos</h2>
            <ContentContainer>
                <FeaturesListContainer>

                    <Feature onClick={() => handleSelected(0)} ref={buttonRef}>
                        <ImageContainer>
                            <img src={handsIcon} alt="" />
                        </ImageContainer>
                        <TextContainer>
                            <strong>Treinamento prático</strong>
                            <span>Requalificação eficaz com exercícios de codificação, simulados, testes e espaços de trabalho baseados em IA.</span>
                        </TextContainer>
                    </Feature>

                    <Feature onClick={() => handleSelected(1)}>
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

                    <Feature onClick={() => handleSelected(2)}>
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

                    <Feature onClick={() => handleSelected(3)}>
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
                    <img src={selected} alt="Preview" />
                </Preview>
            </ContentContainer>
        </FeaturesContainer>
    )
}