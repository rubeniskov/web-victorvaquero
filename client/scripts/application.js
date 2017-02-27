import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'

import Main from './routes/main';
import Home from './routes/home';
import Blog from './routes/blog';
import Post from './routes/post';
import NotFound from './routes/not-found';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Router history={browserHistory}>
					<Route path="/" component={Main}>
						<Route path="home" component={Home}/>
						<Route path="blog" component={Blog}>
							<Route path="/post/:id" component={Post}/>
						</Route>
						<Route path="*" component={NotFound}/>
					</Route>
				</Router>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>, document.getElementById('app'));
