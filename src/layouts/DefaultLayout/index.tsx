import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { FooterLinks } from "../../components/FooterLinks";
import { ContentContainer, LayoutContainer } from "./styles";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />

            <ContentContainer>
                <Outlet />
            </ContentContainer> 
            <FooterLinks /> 
            <Footer />
        </LayoutContainer>
    )
}