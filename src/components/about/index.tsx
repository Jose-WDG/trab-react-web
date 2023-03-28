import { AboutContainer, ImgJose } from "./styles"

export default function AboutSection() {
    return (
        <div className="about" id="about">
            <AboutContainer >
                <div className="about-container">
                    <ImgJose />
                    <div className="about-text">
                        <h1>José Ramalho</h1>
                        <p><b>Desenvolvedor mobile altamente experiente, com uma sólida formação em analise e desenvolvimento
                            de sistemas e 3 anos de experiência em desenvolvimento de aplicativos móveis.</b></p>
                        <p>Seu foco principal é trabalhar com grandes corporações financeiras, criando aplicativos inovadores e
                            funcionais que atendam às necessidades específicas de seus clientes.</p>
                        <p>Com um conhecimento profundo em tecnologias móveis, José é capaz de criar aplicativos móveis
                            robustos e escaláveis que se destacam na indústria. Capaz de trabalhar nas plataformas
                            <b> iOS e Android</b>, está sempre procurando maneiras de usar as tecnologias mais recentes para
                            aprimorar seus projetos.</p>
                        <p>Além de suas habilidades técnicas, José é um excelente comunicador e trabalha em estreita
                            colaboração com sua equipe para garantir máxima qualdiade. Ele é conhecido por seu compromisso em entregar projetos
                            dentro do prazo e dentro do orçamento.</p>
                        <p>Quando não está trabalhando em projetos para grandes corporações financeiras,
                            José é um ávido jogador de tênis e adora viajar para novos lugares.
                            Ele está sempre procurando maneiras de crescer em sua carreira como desenvolvedor mobile,
                            buscando aprimorar suas habilidades e aprender novas tecnologias para fornecer aos seus clientes
                            aplicativos de qualidade superior.</p>

                        <p>
                            <a href="https://www.linkedin.com/in/jos%C3%A9-ramalho-8a1a07159/">
                                <span className="label"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    LinkedIn</span>
                            </a>
                        </p>

                        <p>
                            <a href="https://github.com/Jose-WDG">
                                <span className="label"><i className="fa fa-github" aria-hidden="true"></i> GitHub</span>
                            </a>
                        </p>

                        <p>
                            <a href="https://api.whatsapp.com/send?phone=5511992339592">
                                <span className="label"><i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp: 11 9 92339592</span>
                            </a>
                        </p>


                    </div>
                </div>
            </AboutContainer>
        </div>
    )
}