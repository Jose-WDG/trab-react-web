import { AboutContainer, Colum } from "./styles"

export default function AboutSection() {
    return (
        <div className="about" id="about">
            <AboutContainer >
                <Colum>
                    <h1>Sobre</h1>
                    <h2>José Ramalho</h2>
                    <h3>Formado em análise e desenvolvimento de sistemas</h3>
                    <p>Apaixonado por eletrônica desde pequeno, Sempre procurando entender como as coisas funcionam</p>

                </Colum>
                <Colum>
                    <h1>Informações</h1>
                    <p><b>Idade:</b> 25 anos</p>
                    <p><b>Estado Civil:</b> Solteiro </p>

                    <h1>Experiência</h1>
                    <h2>BRQ</h2>
                    <h3>Desenvolvedor Android PL.</h3>
                    <p><b>Desenvolvedor Android</b> inovador com 3
                        anos de experiência. Projetando, desenvolvendo, testando e mantendo aplicativos
                        Android no setor financeiro.
                        Desenvolvendo aplicativos com mais de 50 mil downloads.</p>
                </Colum>
                <Colum>
                    <h1>Línguas</h1>
                    <p>Português fluente</p>
                    <p>Inglês intermediário técnico</p>
                </Colum>
            </AboutContainer>
        </div>
    )
}