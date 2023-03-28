import { ContactContainer } from "./stylex";

export default function ContactSection() {
	return (
		<ContactContainer id="contact">
			<h2 className="sobre-txt">Contato</h2>
			<ul className="informacoes">
				<li>WhatsApp: 11 9 92339592</li>
				<li>E-mail: neto.silva101@outlook.com</li>
			</ul>
			<ul className="icons">
				<li>
					<a href="https://www.linkedin.com/in/jos%C3%A9-ramalho-8a1a07159/">
						<span className="label"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
							LinkedIn</span>
					</a>
				</li>
				<li>
					<a href="https://github.com/Jose-WDG">
						<span className="label"><i className="fa fa-github" aria-hidden="true"></i> GitHub</span>
					</a>
				</li>
			</ul>
			<ul className="copyright">
				<li>&copy; José Ramalho. Todos os direitos reservados.</li>
				<li>Design: José Ramalho</li>
			</ul>
		</ContactContainer>
	)
}