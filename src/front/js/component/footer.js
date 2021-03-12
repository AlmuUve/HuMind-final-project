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
							<p>What Do We Do?</p>
							<p>Corporate Psychology Services</p>
							<p>Psychologists</p>
							<p>Blog</p>
							<p>Contact Us</p>
						</div>
					</div>
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitle">Legal</h2>
						<div className="footer_column_div">
							<p>Legal Notice</p>
							<p>Cookies Policy</p>
							<p>Privacy Policy</p>
						</div>
					</div>
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitle">Conecta</h2>
						<div className="footer_column_img">
							<i className="fab fa-linkedin footer_img" />
							<i className="fab fa-facebook footer_img" />
							{/* <i className="fab fa-instagram footer_img" /> */}
							<i className="fab fa-instagram-square"></i>
							<i className="fab fa-youtube footer_img" />
							<i className="fab fa-twitter footer_img" />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
