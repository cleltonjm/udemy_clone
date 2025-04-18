import { Content, LinksContainer, TitleContainer, LinksProps, LinksContainerColumn } from "./styles";

export function Links() {
    return (
        <LinksProps>
            <LinksContainerColumn>
                <Content>
                    <TitleContainer>
                        <h3>Certificações por emissor</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Certificações Amazon Web Services (AwS)</a>
                        <a>Certificações Six Sigma</a>
                        <a>Certiicações Microsoft</a>
                        <a>Certificações Cisco</a>
                        <a>Certificações Tableau</a>
                        <a>Ver todas as certificações</a>
                    </LinksContainer>
                </Content>
                <Content>
                    <TitleContainer>
                        <h3>Desenvolvimento Web</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Desenvolvimento Web</a>
                        <a>Java Script</a>
                        <a>React JS</a>
                        <a>Angular</a>
                        <a>Java</a>
                    </LinksContainer>
                </Content>
                <Content>
                    <TitleContainer>
                        <h3>Certificações de TI</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Amazon AWS</a>
                        <a>AWS Certified Cloud Practitioner</a>
                        <a>AZ-900: Microsoft Azure Fundamentals</a>
                        <a>Certificações Cisco</a>
                        <a>AWS Certified Solutions Architect - Associate</a>
                        <a>Kubernates</a>
                    </LinksContainer>
                </Content>
                <Content>
                    <TitleContainer>
                        <h3>Liderança</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Liderança</a>
                        <a>Habilidades de gestão</a>
                        <a>Gestão de projetos</a>
                        <a>Produtividade pessoal</a>
                        <a>Inteligência emocional</a>
                    </LinksContainer>
                </Content>
                <Content>
                    <TitleContainer>
                        <h3>Certificações por habilidade</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Certificação de segurança virtual</a>
                        <a>Certificação de gestão de projetos</a>
                        <a>Certificação em nuvem</a>
                        <a>Certificação de análise de dados</a>
                        <a>Certificação de gestão de RH</a>
                        <a>Ver todas as certificações</a>
                    </LinksContainer>
                </Content>
                <Content>
                    <TitleContainer>
                        <h3>Data Science</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Data Science</a>
                        <a>Python</a>
                        <a>Machine Learning</a>
                        <a>ChatGPT</a>
                        <a>Aprendizado profundo</a>
                    </LinksContainer>
                </Content>
                <Content>
                    <TitleContainer>
                        <h3>Comunicação</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Habilidades de comunicação</a>
                        <a>Técnicas de comunicação</a>
                        <a>Discurso em público</a>
                        <a>Redação</a>
                        <a>Power Point</a>
                    </LinksContainer>
                </Content>
                <Content>
                    <TitleContainer>
                        <h3>Business Analytics e Intelligence</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Microsoft Excel</a>
                        <a>SQL</a>
                        <a>Microsoft Power BI</a>
                        <a>Análise de dados</a>
                        <a>Análise de negócios</a>
                    </LinksContainer>
                </Content>
            </LinksContainerColumn>
        </LinksProps>
    )
}