import React, {SyntheticEvent} from 'react';

const onClickEvent = (e:SyntheticEvent) => {
	e.preventDefault();
	alert('clicked');
};

const url = 'http://localhost:4000/v1/courses';

async function fetchJSON() {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
}

const App = () => {
	fetchJSON();
	return (
		<div>
			<div>
                Create app with custom webpack!!!
			</div>
			<button onClick={onClickEvent}>Click</button>
		</div>
	);
};

export default App;