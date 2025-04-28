import { useEffect, useState } from 'react'
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
    DescriptionContainer,
    StyledButton
} from './styles'

interface CourseTheme {
    id: number,
    title: string,
    description: string,
}

interface Courses {
    id: number,
    img: string,
    title: string,
    description: string,
    stars: string,
    price: string,
}

export function Carousel() {
    const [selected, setSelected] = useState<number>(1)
    const [selectedCourse, setSelectedCourse] = useState<number>(1)
    const [courses, setCourses] = useState<Courses[]>([])
    const [coursesTheme, setCoursesTheme] = useState<CourseTheme[]>([])

    const handleSelected = (id: number) => {
        setSelected(id)
    }

    const handleSelectedCourse = (id: number) => {
        setSelectedCourse(id)
        loadCourses(id)
    }

    async function loadCourses(courseThemeId: number) {
        const response = await fetch(`http://localhost:3333/courses?courseThemeId=${courseThemeId}`)
        const data = await response.json();

        setCourses(data)
    }

    async function loadCoursesTheme(id: number) {
        const response = await fetch(`http://localhost:3333/courseTheme?id=${id}`)
        const data = await response.json();

        setCoursesTheme(data)
    }

    async function loadCoursesThemeList(group: number, courseThemeId: number) {
        const response = await fetch(`http://localhost:3333/courseTheme?group=${group}`)
        const responseCourse = await fetch(`http://localhost:3333/courses?courseThemeId=${courseThemeId}`)
        const data = await response.json();
        const dataCourse = await responseCourse.json();
        
        setCourses(dataCourse)
        setCoursesTheme(data)
    }

    useEffect(() => {
        loadCourses(1);
        loadCoursesTheme(1);
        loadCoursesThemeList(1, 1);
    }, [])
    
    return (
        <CarouselContainer>        
            <TextContainer>
                <h2>Todas as habilidades de que você precisa em um só lugar</h2>
                <text>Desde habilidades essenciais até temas técnicos, a Udemy apoia seu desenvolvimento profissional.</text>
            </TextContainer>

            <ButtonsContainer>
                <StyledButton selected={selected === 1} onClick={() => {loadCoursesThemeList(1, 1), handleSelected(1)}}>Data Science</StyledButton>
                <StyledButton selected={selected === 2} onClick={() => {loadCoursesThemeList(2, 2), handleSelected(2)}}>Certificações de TI</StyledButton>
                <StyledButton selected={selected === 3} onClick={() => {loadCoursesThemeList(3, 3), handleSelected(3)}}>Liderança</StyledButton>
                <StyledButton selected={selected === 4} onClick={() => {loadCoursesThemeList(4, 4), handleSelected(4)}}>Desenvolvimento Web</StyledButton>
                <StyledButton selected={selected === 5} onClick={() => {loadCoursesThemeList(5, 5), handleSelected(5)}}>Comunicação</StyledButton>
                <StyledButton selected={selected === 6} onClick={() => {loadCoursesThemeList(6, 6), handleSelected(6)}}>Business Analytics e Intelligence</StyledButton>
            </ButtonsContainer>

            <SliderContainer>
                <ButtonsListContainer>
                    {coursesTheme.map(course => {
                        return (
                            <ButtonSlider key={course.id} selected={selectedCourse === course.id} onClick={() => handleSelectedCourse(course.id)}>
                                <strong>{course.title}</strong>
                                <span>{course.description}</span>
                            </ButtonSlider>
                        )
                    })}
                </ButtonsListContainer>
                
                <CoursesContainer>
                    {courses.map(course => {
                        return (
                            <CourseCard key={course.id}>
                                <img src={course.img} alt="" />
                                <DescriptionContainer>
                                    <h2>{course.title}</h2>
                                    <span>{course.description}</span>
                                    <p>{course.stars} <text>★★★★★</text></p>
                                    <h3>{course.price}</h3>
                                    <strong>Mais vendidos</strong>
                                </DescriptionContainer>
                            </CourseCard>     
                        )
                    })}
                </CoursesContainer>
                <Button>Mostrar todos os cursos de Data Science</Button>
            </SliderContainer>
        </CarouselContainer>
    )
}