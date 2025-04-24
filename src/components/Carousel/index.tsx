import { useState } from 'react'
import { 
    ButtonsContainer, 
    ButtonSlider, 
    ButtonsListContainer, 
    CarouselContainer, 
    CoursesContainer, 
    SliderContainer, 
    TextContainer, 
    CourseCard, 
    Button, 
    DescriptionContainer
} from './styles'

const content = [
    1,
    2,
    3
]

export function Carousel() {
    const [selected, setSelected] = useState(0)

    const handleSelected = (index: number) => {
        setSelected(content[index]);
    }
    
    return (
        <CarouselContainer>        
            <TextContainer>
                <h2>Todas as habilidades de que você precisa em um só lugar</h2>
                <text>Desde habilidades essenciais até temas técnicos, a Udemy apoia seu desenvolvimento profissional.</text>
            </TextContainer>

            <ButtonsContainer>
                <button onClick={() => handleSelected(0)}>Data Science</button>
                <button onClick={() => handleSelected(1)}>Certificações de TI</button>
                <button onClick={() => handleSelected(2)}>Liderança</button>
                <button onClick={() => handleSelected(3)}>Desenvolvimento Web</button>
                <button onClick={() => handleSelected(4)}>Comunicação</button>
                <button onClick={() => handleSelected(5)}>Business Analytics e Intelligence</button>
            </ButtonsContainer>

            <SliderContainer>
                <ButtonsListContainer>
                    <ButtonSlider>
                        <strong>ChatGPT</strong>
                        <span>Mais de 4 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <strong>DataScience</strong>
                        <span>Mais de 7 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <strong>Python</strong>
                        <span>Mais de 47,7 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <strong>Machine Learning</strong>
                        <span>Mais de 8 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <strong>Aprendizado profundo</strong>
                        <span>Mais de 2 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <strong>Artificial Intelligence (AI)</strong>
                        <span>Mais de 4 mil de alunos</span>
                    </ButtonSlider>
                </ButtonsListContainer>
                <CoursesContainer>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <DescriptionContainer>
                            <h2>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h2>
                            <span>Paulo Andrade, PhD +470.000 Alunos</span>
                            <p>4,8 <text>★★★★★</text></p>
                            <h3>R$ 29,90</h3>
                            <strong>Mais vendidos</strong>
                        </DescriptionContainer>
                    </CourseCard>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <DescriptionContainer>
                            <h2>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h2>
                            <span>Paulo Andrade, PhD +470.000 Alunos</span>
                            <p>4,8 <text>★★★★★</text></p>
                            <h3>R$ 29,90</h3>
                            <strong>Mais vendidos</strong>
                        </DescriptionContainer>
                    </CourseCard>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <DescriptionContainer>
                            <h2>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h2>
                            <span>Paulo Andrade, PhD +470.000 Alunos</span>
                            <p>4,8 <text>★★★★★</text></p>
                            <h3>R$ 29,90</h3>
                            <strong>Mais vendidos</strong>
                        </DescriptionContainer>
                    </CourseCard>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <DescriptionContainer>
                            <h2>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h2>
                            <span>Paulo Andrade, PhD +470.000 Alunos</span>
                            <p>4,8 <text>★★★★★</text></p>
                            <h3>R$ 29,90</h3>
                            <strong>Mais vendidos</strong>
                        </DescriptionContainer>
                    </CourseCard>
                </CoursesContainer>
                <Button>Mostrar todos os cursos de Data Science</Button>
            </SliderContainer>
        </CarouselContainer>
    )
}