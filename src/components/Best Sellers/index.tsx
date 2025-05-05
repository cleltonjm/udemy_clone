import { useEffect, useState } from "react";
import { CourseCard, CoursesContainer, DescriptionContainer, TextContainer } from "./styles";

interface Courses {
    id: number,
    img: string,
    title: string,
    description: string,
    stars: string,
    price: string,
}

export function BestSellers() {
    const [courses, setCourses] = useState<Courses[]>([])

    async function loadCourses() {
        const response = await fetch('http://localhost:3333/courses')
        const data = await response.json()

        setCourses(data)
    }

    useEffect(() => {
        loadCourses();
    }, [])

    return (
        <div>
            <TextContainer>Os alunos estão vizualizando</TextContainer>
            <CoursesContainer>
                {courses.slice(0, 4).map(course => {
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
        </div>
    )
}