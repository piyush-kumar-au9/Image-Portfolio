import React from 'react';
import './Search.css';
const Search = ({searchChange, searchSubmit}) => {
	return(
	<div className="center">
		<div className='pa3 br3 shadow-5 form center'>
			<input className='f4 pa2 w-70 center br-pill' type="text" placeholder = "search Image" onChange={searchChange}/>
			<button className='w-30  grow f4 link ph3 pv2 dib  white bg-light-purple br-pill' onClick={searchSubmit}>Search</button>
		</div>
	</div>
		);
}

export default Search;