import { ButtonContainer, ReportsContainer, TextContainer } from './styles'
import { ArrowRight } from 'phosphor-react'
import reportImg from '../../assets/Onsite.png'

export function Reports() {
    return (
        <ReportsContainer>
            <TextContainer>
                <h2>Principais tendências para o futuro do trabalho</h2>
                <span>
                    A IA Gen e a liderança estão no centro da economia baseada em habilidades de hoje. 
                    Confira o Relatório de tendências de habilidades e aprendizado global 2024 para saber mais.
                </span>
                
                <ButtonContainer>
                    Baixe o relatório
                    <ArrowRight size={20} />
                </ButtonContainer>
            </TextContainer>
            <img src={reportImg} alt="" />
        </ReportsContainer>
    )
}