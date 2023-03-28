import { TopNav } from './style'

export default function NavBar() {
    return (
        <TopNav>
            <div className='topnav' id='myTopnav'>
                <a className="active" href="#about-resum">Resumo</a>
                <a href="#about">Sobre</a>
                <a href="#technologies" id='tecnologi'>Técnologias</a>
                <a href="#contact">Contato</a>
                <a href="javascript:void(0);" className="icon" onClick={() => myFunction()}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </TopNav>
    )
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    console.log(x)
    if (x == null) return
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}