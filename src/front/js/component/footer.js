import React, { Fragment } from "react";
import "../../styles/index.scss";

export const Footer = () => {
	return (
		<Fragment>
			<div className="container-fluid footer">
				<div className="row  footer_row">
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitle">HuMind</h2>
						<div className="footer_column_div">
							<p>What do we do?</p>
							<p>Servicios de Psicología para Empresas </p>
							<p>Psicólogos</p>
							<p>Blog</p>
							<p>Contacta con nosotros</p>
						</div>
					</div>
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitle">Legal</h2>
						<div className="footer_column_div">
							<p>Aviso legal</p>
							<p>Política de cookies</p>
							<p>Política de Privacidad</p>
						</div>
					</div>
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitle">Conecta</h2>
						<div className="footer_column_img">
							<i className="fab fa-linkedin footer_img" />
							<i className="fab fa-facebook footer_img" />
							<i className="fab fa-instagram footer_img" />
							<i className="fab fa-youtube footer_img" />
							<i className="fab fa-twitter footer_img" />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
