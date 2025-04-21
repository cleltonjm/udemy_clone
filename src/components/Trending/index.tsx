import { TrendUp } from 'phosphor-react'
import { ButtonContainer, CourseDetails, TrendingCard, TrendingContainer, TrendingList } from './styles'

export function Trending() {
    return (
        <TrendingContainer>
            <h3>Em alta agora</h3>
            <TrendingList>
                <TrendingCard>
                    <p>ChatGPT é uma habilidade em alta</p>
                    <CourseDetails>
                        <a href="" target="_blank">Ver cursos de ChatGPT &gt;</a>
                        <span>4.384.875 learners</span>
                    </CourseDetails>
                    <ButtonContainer>
                        Mostrar todas as habilidades em alta
                        <TrendUp size={20} />
                    </ButtonContainer>
                </TrendingCard>

                <TrendingCard>
                    <p>Desenvolvimento</p>
                    <CourseDetails>
                        <a href="" target="_blank">Python &gt;</a>
                        <span>47.923.208 learners</span>
                    </CourseDetails>
                    <CourseDetails>
                        <a href="" target="_blank">Desenvolvimento Web &gt;</a>
                        <span>14.037.502 learners</span>
                    </CourseDetails>
                    <CourseDetails>
                        <a href="" target="_blank">Data Science &gt;</a>
                        <span>7.812.898 learners</span>
                    </CourseDetails>
                </TrendingCard>

                <TrendingCard>
                    <p>Design</p>
                    <CourseDetails>
                        <a href="" target="_blank">Blender &gt;</a>
                        <span>2.922.395 learners</span>
                    </CourseDetails>
                    <CourseDetails>
                        <a href="" target="_blank">Design gráfico &gt;</a>
                        <span>4.502.536 learners</span>
                    </CourseDetails>
                    <CourseDetails>
                        <a href="" target="_blank">Design de experiência do usuário (UX) &gt;</a>
                        <span>2.074.277 learners</span>
                    </CourseDetails>
                </TrendingCard>

                <TrendingCard>
                    <p>Negocios</p>
                    <CourseDetails>
                        <a href="" target="_blank">Profissional de Gerenciamento de Projetos (PMP) PMI &gt;</a>
                        <span>2.582.427 learners</span>
                    </CourseDetails>
                    <CourseDetails>
                        <a href="" target="_blank">Microsoft Power BI &gt;</a>
                        <span>4.656.814 learners</span>
                    </CourseDetails>
                    <CourseDetails>
                        <a href="" target="_blank">Gestão de projetos &gt;</a>
                        <span>4.003.512 learners</span>
                    </CourseDetails>
                </TrendingCard>
            </TrendingList>
        </TrendingContainer>
    )
}