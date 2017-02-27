import React from 'react';

import PostList from '../components/post-list';
import Preloader from '../components/preloader';
import NavbarMenu from '../components/navbar-menu';
import SidebarMenu from '../components/sidebar-menu';
import SliderGallery from '../components/slider-gallery';
import Content from '../components/content';
import GoogleMaps from '../components/google-maps';
import Footer from '../components/footer';
import Copyright from '../components/copyright';

export default class RouteHome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Preloader></Preloader>
				<div id="home">
					<div className="pt-section" data-name="Home" id="ptsection-one"></div>
				</div>
				<SidebarMenu></SidebarMenu>
				<NavbarMenu></NavbarMenu>
				<SliderGallery></SliderGallery>
				<Content></Content>
				<GoogleMaps></GoogleMaps>
				<Footer></Footer>
				<Copyright></Copyright>
				<div id="back-top">
					<a href="#top"></a>
				</div>
				<a className="ion-social-twitter" href="https://twitter.com/intent/tweet?text={{data.post.title}}&url={{data.post.fullPostUrl}}" onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"></a>
				<a className="ion-social-facebook" href="https://www.facebook.com/sharer/sharer.php?u={{data.post.fullPostUrl}}" onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"></a>
				<a className="ion-social-googleplus" href="https://plus.google.com/share?url={{data.post.fullPostUrl}}" onclick="window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;"></a>
			</div>
		);
	}
}
