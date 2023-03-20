export default function ContactSection() {
    return (
        <div id="contact">
			<footer id="footer">
				<section>
					<div className="row">

						<div className="col-lg-4 col-md-6 col-sm-12 "></div>
						<div className="col-lg-4 col-md-6 col-sm-12 ">
							<h2 className="sobre-txt">Contato</h2>
							<ul className="informacoes">
								<li><i className="fab fa-whatsapp fa-1x"></i> tell: 55 11 9 51333960</li>
								<li><i className="icon solid alt fa-envelope"><span className="label">Email</span></i> E-mail:
									neto.silva101@outlook.com</li>
							</ul>

						</div>
						<div className="col-lg-4 col-md-6 col-sm-12"></div>







					</div>

				</section>
				<ul className="icons">
					<li><a href="https://www.linkedin.com/in/jos%C3%A9-ramalho-8a1a07159/"
							className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
					<li><a href="https://github.com/Jose-WDG" className="icon brands alt fa-github"><span
								className="label">GitHub</span></a></li>
					
				</ul>
				<ul className="copyright">
					<li>&copy; José Ramalho. Todos os direitos reservados.</li>
					<li>Design: José Ramalho</li>
				</ul>
			</footer>
        </div>
    )
}