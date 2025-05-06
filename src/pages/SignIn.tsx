import { 
    AuthFormContainer, 
    ButtonSubmit,
    ImageContainer, 
    InputLabel, 
    Line, 
    SignUp, 
    SignInContainer, 
    SocialIconContainer,
    OrganizationLogin,
    BottomContainer,
} from '../styles/sign-in'
import { EnvelopeSimple } from 'phosphor-react'
import ilustrationImg from '../assets/desktop-illustration.webp'
import googleImg from '../assets/icons/google.svg'
import facebookImg from '../assets/icons/facebook.svg'
import appleImg from '../assets/icons/apple.svg'
import { NavLink } from 'react-router-dom'

export function SignIn() {
    return (
        <SignInContainer>
            <ImageContainer src={ilustrationImg} alt="" />
            
            <AuthFormContainer>
                <h2>Faça login para continuar<br /> sua jornada de<br /> aprendizado</h2>
                <InputLabel type="email" placeholder="E-mail" />

                <ButtonSubmit>
                    <EnvelopeSimple size={20} />
                    <span>Continuar com e-mail</span>
                </ButtonSubmit>

                <Line>━━━━━━━ Outras opções de login ━━━━━━━</Line>    

                <SocialIconContainer>
                    <button>
                        <img src={googleImg} width={30} alt="" />
                    </button>
                    <button>
                        <img src={facebookImg} width={30} alt="" />
                    </button>
                    <button>
                        <img src={appleImg} width={30} alt="" />
                    </button>
                </SocialIconContainer>

                <BottomContainer>
                    <SignUp>
                        Não tem uma conta? 
                        <NavLink to="/sign-up">
                            Cadastre-se
                        </NavLink>
                    </SignUp>
                    <OrganizationLogin to="/">
                        Faça login com sua organização
                    </OrganizationLogin>
                </BottomContainer>

            </AuthFormContainer>
        </SignInContainer>
    )
}