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
                        <p>Meu foco principal é trabalhar com grandes corporações financeiras, criando aplicativos inovadores e
                            funcionais que atendam às necessidades específicas de seus clientes.</p>
                        <p>Com um bom conhecimento em tecnologias móveis sou capaz de criar aplicativos móveis
                            robustos e escaláveis. Conhecimentos em<b> iOS e Android</b>, estou sempre procurando maneiras de usar as tecnologias mais recentes para
                            aprimorar os projetos.</p>
                        <p>Excelente comunicação e trabalho em estreita
                            colaboração com minha equipe para garantir máxima qualdiade. Comprometido em entregar projetos
                            dentro do prazo.</p>
                        <p>Quando não estou trabalhando, gosto de jogar video game e adoro viajar para novos lugares.
                            Estou sempre procurando maneiras de crescer na minha carreira como desenvolvedor buscando aprimorar
                            minhas habilidades e aprender novas tecnologias para fazer projetos de qualidade.</p>
                        <p>

                            <p>Casei com apenas 15 anos e, consequentemente, precisei aprender a lidar com responsabilidades mais cedo. Aos 21 anos,
                                me tornei pai de uma linda princesa e desde então, tenho buscado equilibrar minha vida profissional com a pessoal. 
                                A programação me proporcionou muitas coisas boas, em especial a flexibilidade de trabalhar de forma remota, o que me permitiu acompanhar cada fase de desenvolvimento da minha filha de perto.
                            </p>
                            <br/><br/>
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
                        <br /><br />
                        <h1>Formação</h1>
                        <p><b>SENAC</b> - analise em desolvimento de sistemas</p>
                        <p><b>Digital House</b> - Desenvolvimento web fullstack</p>
                        <br /><br />
                    </div>
                </div>
            </AboutContainer>
        </div>
    )
}