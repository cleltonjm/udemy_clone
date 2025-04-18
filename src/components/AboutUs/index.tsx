import { LinksContainer, StructuredLinks, StructuredLinksColumn, TitleContainer } from "./styles";

export function AboutUs() {
    return (
        <StructuredLinks>
            <StructuredLinksColumn>
                <div>
                    <TitleContainer>
                        <h3>Sobre</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Quem somos</a>
                        <a>Carreiras</a>
                        <a>Fale conosco</a>
                        <a>Blog</a>
                        <a>Investidores</a>
                    </LinksContainer>
                </div>
                <div>
                    <TitleContainer>
                        <h3>Conheça a Udemy</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Obtenha o aplicativo</a>
                        <a>Ensine na Udemy</a>
                        <a>Planos e preços</a>
                        <a>Afiliado</a>
                        <a>Ajuda e suporte</a>
                    </LinksContainer>
                </div>
                <div>
                    <TitleContainer>
                        <h3>Udemy business</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Udemy business</a>
                    </LinksContainer>
                </div>
                <div>
                    <TitleContainer>
                        <h3>Jurídico e acessibilidade</h3>
                    </TitleContainer>
                    <LinksContainer>
                        <a>Declaração e acessibilidade</a>
                        <a>Política de privacidade</a>
                        <a>Mapa do site</a>
                        <a>Termos</a>
                    </LinksContainer>
                </div>
            </StructuredLinksColumn>
        </StructuredLinks>
    )
}