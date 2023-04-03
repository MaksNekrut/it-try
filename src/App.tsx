import React from 'react';
import Main from "@/Pages/main/Main";
import Directions from "@/Pages/directions/Directions";
import Subdirections from "@/Pages/subdirections/Subdirections";
import '@root/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const url = 'http://localhost:4000/v1/courses';

// async function fetchJSON() {
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	console.log(data);
// }

const App = () => {
	// fetchJSON();
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/directions' element={<Directions />} />
				<Route path='/subdirections' element={<Subdirections />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;