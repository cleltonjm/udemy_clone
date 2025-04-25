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
    DescriptionContainer
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
    // const [selected, setSelected] = useState(0)
    const [courses, setCourses] = useState<Courses[]>([])
    const [coursesTheme, setCoursesTheme] = useState<CourseTheme[]>([])

    // const handleSelected = (index: number) => {
    //     setSelected(content[index]);
    // }

    async function loadCourses(courseThemeId: number) {
        const response = await fetch(`http://localhost:3333/courses?courseThemeId=${courseThemeId}`)
        const data = await response.json();

        setCourses(data)
    }

    useEffect(() => {
        loadCourses(1);
    }, [])

    async function loadCoursesTheme(id?: number) {
        const response = await fetch(`http://localhost:3333/courseTheme?id=${id}`)
        const data = await response.json();

        setCoursesTheme(data)
    }

    useEffect(() => {
        loadCoursesTheme(1);
    }, [])

    async function loadCoursesThemeList(group: number) {
        const response = await fetch(`http://localhost:3333/courseTheme?group=${group}`)
        const data = await response.json();
        
        setCoursesTheme(data)
    }

    useEffect(() => {
        loadCoursesThemeList(1);
    }, [])
    
    return (
        <CarouselContainer>        
            <TextContainer>
                <h2>Todas as habilidades de que você precisa em um só lugar</h2>
                <text>Desde habilidades essenciais até temas técnicos, a Udemy apoia seu desenvolvimento profissional.</text>
            </TextContainer>

            <ButtonsContainer>
                <button onClick={() => loadCoursesThemeList(1)}>Data Science</button>
                <button onClick={() => loadCoursesThemeList(2)}>Certificações de TI</button>
                <button onClick={() => loadCoursesThemeList(3)}>Liderança</button>
                <button onClick={() => loadCoursesThemeList(4)}>Desenvolvimento Web</button>
                <button onClick={() => loadCoursesThemeList(5)}>Comunicação</button>
                <button onClick={() => loadCoursesThemeList(6)}>Business Analytics e Intelligence</button>
            </ButtonsContainer>

            <SliderContainer>
                <ButtonsListContainer>
                    {coursesTheme.map(course => {
                        return (
                            <ButtonSlider key={course.id} onClick={() => loadCourses(course.id)}>
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