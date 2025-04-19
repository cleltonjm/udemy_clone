import { ImageContainer, PartnerContainer, TextContainer } from './styles'

import volkswagenLogo from '../../assets/volkswagen_logo.svg'
import samsungLogo from '../../assets/samsung_logo.svg'
import ciscoLogo from '../../assets/cisco_logo.svg'
import vimeoLogo from '../../assets/vimeo_logo_resized-2.svg'
import pegLogo from '../../assets/procter_gamble_logo.svg'
import hewlettLogo from '../../assets/hewlett_packard_enterprise_logo.svg'
import citiLogo from '../../assets/citi_logo.svg'
import ericssonLogo from '../../assets/ericsson_logo.svg'

export function Partner() {
    return (
        <PartnerContainer>
            <TextContainer>Credibilidade perante mais de 16.000 empresas e milhões de alunos em todo o mundo</TextContainer>
            <ImageContainer>
                <img src={volkswagenLogo} alt="Volkswagen Logo" />
                <img src={samsungLogo} alt="Samsung Logo" />
                <img src={ciscoLogo} alt="Cisco Logo" />
                <img src={vimeoLogo} alt="Vimeo Logo" />
                <img src={pegLogo} alt="Procter Gamble Logo" />
                <img src={hewlettLogo} alt="Hewlett Logo" />
                <img src={citiLogo} alt="Citi Logo" />
                <img src={ericssonLogo} alt="ericsson Logo" />
            </ImageContainer>
        </PartnerContainer>
    )
}