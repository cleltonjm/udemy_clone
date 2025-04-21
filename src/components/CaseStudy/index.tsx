import { ButtonContainer, CaseStudyContainer, CaseStudyHead, ImageContainer, LogoContainer, StatValue, StatValueContainer, TextContainer } from "./styles";
import logoImg from '../../assets/logo-boozallenhamilton-2.svg'
import PreviewImg from '../../assets/UB_Case_Studies_Booz_Allen_image.png'
import { ArrowRight } from 'phosphor-react'

export function CaseStudy() {
    return (
        <CaseStudyContainer>
            <CaseStudyHead>
                <LogoContainer>
                    <img src={logoImg} alt="" />
                </LogoContainer>
                <TextContainer>
                    <p>Booz Allen Hamilton alcança retenção de talentos e produtividade por meio da requalificação</p>
                    <StatValueContainer>
                        <StatValue>
                            <strong>93%</strong>
                            <span>taxa de retenção entre os funcionários participantes</span>
                        </StatValue>
                        <StatValue>
                            <strong>93%</strong>
                            <span>taxa de retenção entre os funcionários participantes</span>
                        </StatValue>
                    </StatValueContainer>
                </TextContainer>
                <ButtonContainer>
                    <span>Leia a história completa</span>
                    <ArrowRight size={20} />
                </ButtonContainer>
            </CaseStudyHead>
            <ImageContainer>
                <img src={PreviewImg} alt="" />
            </ImageContainer>
        </CaseStudyContainer>
    )
}