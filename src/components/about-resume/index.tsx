import { ImgJose } from "./style";

export default function AboutResumSection(){
    return (
    <div className='about-resum' id="about-resum">
      <h1 className='name-title'>José Ramalho da silva neto</h1>
      <ImgJose />
      <h2 className='office-title'>Desenvolvedor Mobile</h2>
      <h3 className='training'>Formado na Digital house, escola do código.</h3>
      <p>Conhecimento em orientação a objeto, padrões de projeto, documentação de arquitetura e git.</p>
    </div>
    )
}