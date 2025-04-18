import { FooterContainer, ImageContainer, NavLinkProps, SponsorshipContainer, TextContainer } from "./styles";
import eventbriteLogo from '../../assets/eventbrite-light.svg' 
import volkswagenLogo from '../../assets/volkswagen-light.svg' 
import netappLogo from '../../assets/netapp-light.svg' 
import nasdaqLogo from '../../assets/nasdaq-light.svg'
import { AboutUs } from "../AboutUs";
import { Links } from "../Links";

export function FooterLinks() {
    return (
        <FooterContainer>
            <SponsorshipContainer>
                <TextContainer>
                    <span>As melhores empresas escolhem a <NavLinkProps to="/">Udemy Business</NavLinkProps> para desenvolver as <br/>habilidades de carreira necessárias.</span>
                </TextContainer>
                <ImageContainer>
                    <img src={nasdaqLogo} alt="Nasdaq Logo" />
                    <img src={volkswagenLogo} alt="Volkswagen Logo" />
                    <img src={netappLogo} alt="Netapp Logo" />
                    <img src={eventbriteLogo} alt="Event Brite Logo" />
                </ImageContainer>
            </SponsorshipContainer>

            <Links />
            <AboutUs />
        </FooterContainer>
    )
}