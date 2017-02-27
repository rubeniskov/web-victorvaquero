import React from 'react';
import {Link as LinkRouter} from 'react-router';
import {Link as LinkScroll} from 'react-scroll';

export default class NavbarMenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			links: [
				{
					_id: 1,
					label: 'Inicio',
					anchor: '#home'
				}, {
					_id: 2,
					label: 'Blog',
					anchor: '/blog'
				}, {
					_id: 3,
					label: 'Sobre Mí',
					anchor: '#details'
				}, {
					_id: 4,
					label: 'Portfolio',
					anchor: '#portfolio'
				}, {
					_id: 5,
					label: 'Trayectoria',
					anchor: '#timeline-vertical'
				}
			]
		};
	}
	render() {
		return (
			<div className="content-wrap">
				<header id="header-wrapper-mp" className="head-overlay sticky-menu-light">
					<div className="sticky-header header-dark sticky-overlay nobg" role="navigation">
						<div className="container mp-nav">
							<div id="site-title">
								<a href="index.html">
									<h1 className="font-accident-one-normal">
										<i className="flaticon-avatar36"></i>Paloma SF</h1>
								</a>
							</div>
							<nav id="main-menu" className="nav site-navigation primary-navigation">
								<ul className="sf-menu clearfix" id="example">
									{this.state.links.map(link => <li key={link._id} className="m-desktop menu-item active">
										{(/^\#/).test(link.anchor)
											? <LinkScroll to={link.anchor.substring(1)} spy={true} smooth={true} duration={500}>{link.label}</LinkScroll>
											: <LinkRouter to={link.anchor}>{link.label}</LinkRouter>}
									</li>)}
									<li>
										<div className="menu-button nav-icon" id="open-button">
											<div></div>
										</div>
									</li>
								</ul>
							</nav>

						</div>

					</div>

				</header>
			</div>
		);
	}
}
