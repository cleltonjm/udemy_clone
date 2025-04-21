import { User, Users, CheckCircle, ArrowRight } from 'phosphor-react'
import { ButtonContainer, CardBodyContainer, CardBodyTitle, CardList, HeaderCardContainer, ListItem, PlanCardContainer, PlansContainer, TitleContainer, UserDetailsContainer } from './styles'

export function Plans() {
    return (
        <PlansContainer>
            <TitleContainer>
                <h3>Acelere o crescimento — para você ou sua organização</h3>
                <span>Alcance metas mais rapidamente com um dos nossos planos ou programas. Experimente um gratuitamente hoje mesmo ou fale com a equipe de vendas para saber mais.</span>
            </TitleContainer>
            <CardList>
                <PlanCardContainer>
                    <HeaderCardContainer>
                        <strong>Plano Individual</strong>
                        <span>Para você</span>
                        <UserDetailsContainer>
                            <User size={20} />
                            <span>Individual</span>
                        </UserDetailsContainer>
                    </HeaderCardContainer>

                    <CardBodyContainer>
                        <CardBodyTitle>
                            <strong>A partir de R$ 33.33 por mês</strong>
                            <span>Cobrança mensal ou anual. Cancele a qualquer momento.</span>
                            <ButtonContainer>
                                Experimente grátis
                                <ArrowRight size={20} />
                            </ButtonContainer>     
                        </CardBodyTitle>
                        <ListItem>
                            <CheckCircle />
                            <span>Acesso a mais de 12.000 cursos conceituados</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Preparação para certificação</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Recomendações com foco em objetivo</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Exercícios de codificação baseados em IA</span>
                        </ListItem>
                    </CardBodyContainer>
                </PlanCardContainer>

                <PlanCardContainer>
                    <HeaderCardContainer>
                        <strong>Plano Team</strong>
                        <span>Para sua equipe</span>
                        <UserDetailsContainer>
                            <Users size={20} />
                            <span>2 a 20 pessoas</span>
                        </UserDetailsContainer>
                    </HeaderCardContainer>

                    <CardBodyContainer>
                        <CardBodyTitle>
                            <strong>R$ 169.00 por mês por usuário</strong>
                            <span>Cobrança anual. Cancele a qualquer momento.</span>
                            <ButtonContainer>
                                Experimente grátis
                                <ArrowRight size={20} />
                            </ButtonContainer>     
                        </CardBodyTitle>
                        <ListItem>
                            <CheckCircle />
                            <span>Acesso a mais de 12.000 cursos conceituados</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Preparação para certificação</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Recomendações com foco em objetivo</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Exercícios de codificação baseados em IA</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Relatórios de análise e adoção</span>
                        </ListItem>
                    </CardBodyContainer>
                </PlanCardContainer>

                <PlanCardContainer>
                    <HeaderCardContainer>
                        <strong>Plano Enterprise</strong>
                        <span>Para toda sua organização</span>
                        <UserDetailsContainer>
                            <Users size={20} />
                            <span>Mais de 20 pessoas</span>
                        </UserDetailsContainer>
                    </HeaderCardContainer>

                    <CardBodyContainer>
                        <CardBodyTitle>
                            <strong>Entre em contato com a equipe de vendas para conhecer os preços</strong>
                            <ButtonContainer>
                                Solicitar uma demonstração
                                <ArrowRight size={20} />
                            </ButtonContainer>     
                        </CardBodyTitle>
                        <ListItem>
                            <CheckCircle />
                            <span>Acesso a mais de 27.000 cursos conceituados</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Preparação para certificação</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Recomendações com foco em objetivo</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Exercícios de codificação baseados em IA</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Análises e insights avançados</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Equipe dedicada de sucesso do cliente</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Coleções internacionais de cursos com 15 idiomas</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Conteúdo personalizável</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Treinamento técnico prático com complemento</span>
                        </ListItem>
                        <ListItem>
                            <CheckCircle />
                            <span>Serviços de implementação estratégica com complemento</span>
                        </ListItem>
                    </CardBodyContainer>
                </PlanCardContainer>
            </CardList>
        </PlansContainer>
    )
}