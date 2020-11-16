import React from 'react';
import '../styles/SearchBox.css';

function SearchBox({ inputSearchChange }) {
	return (
		<div className="searchbox">
			<form className="form-inline">
				<input
					className="form-control form-control-sm ml-3 w-75"
					type="text"
					placeholder="Search"
					aria-label="Search"
					onChange={e => inputSearchChange(e)}
				/>
			</form>
		</div>
	);
}
export default SearchBox;
