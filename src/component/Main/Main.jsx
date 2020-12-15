import React, {Component} from 'react';
import {
	Route,
	NavLink,
	HashRouter
} from 'react-router-dom';

/* ---------------------------- import component ---------------------------- */
import Home from '../Home/Home';
import Stuff from '../Stuff/Stuff';
import Contact from '../Contact/Contact';

/* ------------------------------ import styles ----------------------------- */
import './Main.scss';

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<h1><NavLink to="/">Simple SPA</NavLink></h1>

					<ul className="header">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/stuff">Stuff</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>

					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/stuff" component={Stuff} />
						<Route path="/contact" component={Contact} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;