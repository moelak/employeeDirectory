import React from 'react';
import SearchBox from './SearchBox.js';
import '../styles/Nav.css';

function Nav({ inputSearchChange }) {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			<div className="navbar-collapse row" id="navbarNav">
				<SearchBox inputSearchChange={inputSearchChange} />
			</div>
		</nav>
	);
}
export default Nav;
