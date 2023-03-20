import { TopNav } from './style'

export default function NavBar(){
    return (
        <TopNav>
        <a className="active" href="#about-resum">Resumo</a>
        <a href="#about">Sobre</a>
        <a href="#technologies">Técnologias</a>
        <a href="#contact">Contato</a>
        </TopNav>
    )
}