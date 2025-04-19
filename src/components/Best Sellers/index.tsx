import { CourseCard, CoursesContainer, TextContainer } from "./styles";

export function BestSellers() {
    return (
        <div>
            <TextContainer>Os alunos estão vizualizando</TextContainer>
            <CoursesContainer>
                <CourseCard>
                    <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                    <h3>Curso Python 3 do básico ao avançado - com projetos reais</h3>
                    <span>Luiz Otavio Miranda</span>
                    <span>4,8 ★★★★★ (4.230)</span>
                    <span>R$ 29,90</span>
                    <span>Mais vendidos</span>
                </CourseCard>
                <CourseCard>
                    <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                    <h3>Curso Python 3 do básico ao avançado - com projetos reais</h3>
                    <span>Luiz Otavio Miranda</span>
                    <span>4,8 ★★★★★ (4.230)</span>
                    <span>R$ 29,90</span>
                    <span>Mais vendidos</span>
                </CourseCard>
                <CourseCard>
                    <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                    <h3>Curso Python 3 do básico ao avançado - com projetos reais</h3>
                    <span>Luiz Otavio Miranda</span>
                    <span>4,8 ★★★★★ (4.230)</span>
                    <span>R$ 29,90</span>
                    <span>Mais vendidos</span>
                </CourseCard>
                <CourseCard>
                    <img src="https://i.ytimg.com/vi/Y6dfxbAwE9M/maxresdefault.jpg" alt="" />
                    <h3>Curso Python 3 do básico ao avançado - com projetos reais</h3>
                    <span>Luiz Otavio Miranda</span>
                    <span>4,8 ★★★★★ (4.230)</span>
                    <span>R$ 29,90</span>
                    <span>Mais vendidos</span>
                </CourseCard>
            </CoursesContainer>
        </div>
    )
}