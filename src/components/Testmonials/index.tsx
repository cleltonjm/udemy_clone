import stackImg from '../../assets/icons/logo_stackoverflow.svg'
import { CardContainer, CardContainerList, SourceDetails, TestmonialsContainer, UserDescription, UserDetails } from './styles'
import { Quotes } from 'phosphor-react'

export function Testmonials() {
    return (
        <TestmonialsContainer>
            <h2>Veja o que outros alcançaram por meio do aprendizado</h2>
            <CardContainerList>
                <CardContainer>
                    <Quotes size={25} />
                    <p>
                        A Udemy foi classificada como o <strong>programa de certificação 
                        ou curso online mais popular</strong> para aprender programação, 
                        de acordo com a <a href="/" target="_blank">2023 Developer Survey da Stack Overflow.</a>
                    </p>
                    <SourceDetails>
                        <img src={stackImg} alt="" />
                        <span>37.076 respostas coletadas</span>
                    </SourceDetails>
                    <a href="" target="_blank">Ver cursos de desenvolvimento Web &gt;</a>
                </CardContainer>

                <CardContainer>
                    <Quotes size={25} />
                    <p>
                        A Udemy realmente <strong>fez a diferença e foi uma ótima guia</strong> para mim quando criamos o Dimensional.
                    </p>
                    <SourceDetails>
                        <UserDetails>
                            <img src="https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg" alt="" />
                            <UserDescription>
                                <strong>Alvin Lim</strong>
                                <span>Cofundador técnico, CTO da Dimensional</span>
                            </UserDescription>
                        </UserDetails>
                    </SourceDetails>
                    <a href="" target="_blank">Ver este curso de iOS e Swift &gt;</a>
                </CardContainer>

                <CardContainer>
                    <Quotes size={25} />
                    <p>
                        A Udemy oferece a você a capacidade de ser persistente. Eu aprendi exatamente o que precisava saber no mundo real. 
                        Ela me ajudou a me promover para<strong>conquistar um novo cargo.</strong>
                    </p>
                    <SourceDetails>
                        <UserDetails>
                            <img src="https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg" alt="" />
                            <UserDescription>
                                <strong>William A. Wachlin</strong>
                                <span>Gerente de conta do parceiro da Amazon Web Services</span>
                            </UserDescription>
                        </UserDetails>
                    </SourceDetails>
                    <a href="" target="_blank">Ver este curso de AWS &gt;</a>
                </CardContainer>

                <CardContainer>
                    <Quotes size={25} />
                    <p>
                        Com a Udemy Business, os funcionários puderam combinar habilidades gerais de consultoria e de tecnologia... 
                        para ajudar a<strong>impulsionar a carreira deles.</strong>
                    </p>
                    <SourceDetails>
                        <UserDetails>
                            <img src="https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png" alt="" />
                            <UserDescription>
                                <strong>Ian Stevens</strong>
                                <span>Head of Capability Development, North America at Publicis Sapient</span>
                            </UserDescription>
                        </UserDetails>
                    </SourceDetails>
                    <a href="" target="_blank">Leia a história a completa &gt;</a>
                </CardContainer>

            </CardContainerList>
        </TestmonialsContainer>
    )
}