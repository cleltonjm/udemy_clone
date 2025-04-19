import { 
    ButtonsContainer, 
    ButtonSlider, 
    ButtonsListContainer, 
    CarouselContainer, 
    CoursesContainer, 
    SliderContainer, 
    TextContainer, 
    CourseCard, 
    Button 
} from './styles'
import carousel1 from '../../assets/carousel1.png'

export function Carousel() {    
    return (
        <CarouselContainer>
            <img src={carousel1} alt="" />
        
            <TextContainer>
                <h2>Todas as habilidades de que você precisa em um só lugar</h2>
                <text>Desde habilidades essenciais até temas técnicos, a Udemy apoia seu desenvolvimento profissional.</text>
            </TextContainer>

            <ButtonsContainer>
                <button>Data Science</button>
                <button>Certificações de TI</button>
                <button>Liderança</button>
                <button>Desenvolvimento Web</button>
                <button>Comunicação</button>
                <button>Business Analytics e Intelligence</button>
            </ButtonsContainer>

            <SliderContainer>
                <ButtonsListContainer>
                    <ButtonSlider>
                        <text>ChatGPT</text>
                        <span>Mais de 4 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <text>DataScience</text>
                        <span>Mais de 7 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <text>Python</text>
                        <span>Mais de 47,7 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <text>Machine Learning</text>
                        <span>Mais de 8 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <text>Aprendizado profundo</text>
                        <span>Mais de 2 mil de alunos</span>
                    </ButtonSlider>
                    <ButtonSlider>
                        <text>Artificial Intelligence (AI)</text>
                        <span>Mais de 4 mil de alunos</span>
                    </ButtonSlider>
                </ButtonsListContainer>
                <CoursesContainer>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <h3>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h3>
                        <span>Paulo Andrade, PhD +470.000 Alunos</span>
                        <span>4,8 ★★★★★ (4.230)</span>
                        <span>R$ 29,90</span>
                    </CourseCard>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <h3>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h3>
                        <span>Paulo Andrade, PhD +470.000 Alunos</span>
                        <span>4,8 ★★★★★ (4.230)</span>
                        <span>R$ 29,90</span>
                    </CourseCard>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <h3>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h3>
                        <span>Paulo Andrade, PhD +470.000 Alunos</span>
                        <span>4,8 ★★★★★ (4.230)</span>
                        <span>R$ 29,90</span>
                    </CourseCard>
                    <CourseCard>
                        <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                        <h3>ChatGPT, ChatGPT Plus, Dall-E e Criação de Videos com Sora</h3>
                        <span>Paulo Andrade, PhD +470.000 Alunos</span>
                        <span>4,8 ★★★★★ (4.230)</span>
                        <span>R$ 29,90</span>
                    </CourseCard>
                </CoursesContainer>
                <Button>Mostrar todos os cursos de Data Science</Button>
            </SliderContainer>
        </CarouselContainer>
    )
}