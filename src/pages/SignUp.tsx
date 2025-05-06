import { 
    AuthFormContainer, 
    ButtonSubmit, 
    Checkbox, 
    ImageContainer, 
    InputLabel, 
    Line, 
    SignIn, 
    SignUpContainer, 
    SocialIconContainer, 
    TermsContainer 
} from '../styles/sign-up'
import { EnvelopeSimple } from 'phosphor-react'
import ilustrationImg from '../assets/desktop-illustration.webp'
import googleImg from '../assets/icons/google.svg'
import facebookImg from '../assets/icons/facebook.svg'
import appleImg from '../assets/icons/apple.svg'

export function SignUp() {
    return (
        <SignUpContainer>
            <ImageContainer src={ilustrationImg} alt="" />
            
            <AuthFormContainer>
                <h2>Cadastre-se com e-mail</h2>
                <InputLabel type="text" placeholder="Nome completo" />
                <InputLabel type="email" placeholder="E-mail" />

                <Checkbox>
                    <input type="checkbox" checked />
                    <span>Quero receber ofertas especiais, recomendações personalizadas e dicas de aprendizado.</span>
                </Checkbox>

                <ButtonSubmit>
                    <EnvelopeSimple size={20} />
                    <span>Continuar com e-mail</span>
                </ButtonSubmit>

                <Line>━━━━━━━ Outras opções de inscrição ━━━━━━━</Line>    

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

                <TermsContainer>Ao se inscrever, você concorda com nossos <a>Termo de Uso</a> e com a <a>Política de Privacidade.</a></TermsContainer>

                <SignIn>Já tem uma conta? <a>Fazer login</a></SignIn>

            </AuthFormContainer>
        </SignUpContainer>
    )
}