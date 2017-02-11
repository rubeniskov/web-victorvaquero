import React from 'react';
import { Link } from 'react-router';

export default class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-wrap">
        <header id="header-wrapper-mp" className="head-overlay sticky-menu-light">
           <div className="sticky-header header-dark sticky-overlay nobg" role="navigation">
              <div className="container mp-nav">
                 <div id="site-title"><a href="index.html"><h1 className="font-accident-one-normal">
                    <i className="flaticon-avatar36"></i>Fletcher</h1></a>
                 </div>
                 <nav id="main-menu" className="nav site-navigation primary-navigation">
                    <ul className="sf-menu clearfix" id="example">
                       <li className="m-desktop menu-item active"><a href="#home">Inicio</a></li>
                       <li className="m-desktop menu-item"><Link to="blog">Blog</Link></li>
                       <li className="m-desktop menu-item"><a href="#details">Sobre Mí</a></li>
                       <li className="m-desktop menu-item"><a href="#portfolio">Portfolio</a></li>
                       <li className="m-desktop menu-item"><a href="#timeline-vertical">Trayectoria</a></li>
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
