import React from 'react';
import Main from "@/Pages/main/Main";

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
			<Main />
		</div>
	);
};

export default App;